import { Request, Response, NextFunction } from 'express';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

import User from '@src/models/User';
import { ErrorTypes } from '@src/utils/error';
import { UnauthorizedErrorTitles } from '@src/utils/error/Unauthorized';
import { JwtUtils } from '@src/utils/jwt';
import { IAccessTokenPayload } from '@src/utils/jwt/types';

import { IAuthRequest } from './types';

async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const requestAuth: IAuthRequest = req;
    const tokenString = JwtUtils.getTokenFromHeader(requestAuth);

    if (!tokenString) {
      return res.status(401).json({
        type: ErrorTypes.Unauthorized,
        title: UnauthorizedErrorTitles.ACCESS_TOKEN_NOT_PROVIDED,
        detail: 'Access token not provided',
      });
    }

    const tokenDecoded = JwtUtils.verifyAccessToken(
      tokenString,
    ) as IAccessTokenPayload;

    const user = await User.findOne({
      where: { id: tokenDecoded.userId },
      relations: ['role'],
    });

    if (!user) {
      return res.status(401).json({
        type: ErrorTypes.Unauthorized,
        title: UnauthorizedErrorTitles.INVALID_ACCESS_TOKEN,
        detail: 'Invalid access token',
      });
    }

    if (!user.active) {
      return res.status(401).json({
        type: ErrorTypes.Unauthorized,
        title: UnauthorizedErrorTitles.INVALID_ACCESS_TOKEN,
        detail: 'User inactive',
      });
    }

    requestAuth.accessToken = tokenString;
    requestAuth.user = user;

    return next();
  } catch (e) {
    switch (e.constructor) {
      case TokenExpiredError:
        return res.status(401).json({
          type: ErrorTypes.Unauthorized,
          title: UnauthorizedErrorTitles.ACCESS_TOKEN_EXPIRED,
          detail: 'Access token expired',
        });
      case JsonWebTokenError:
        return res.status(401).json({
          type: ErrorTypes.Unauthorized,
          title: UnauthorizedErrorTitles.INVALID_ACCESS_TOKEN,
          detail: 'Invalid access token',
        });
      default:
        return next(e);
    }
  }
}

export default AuthMiddleware;
