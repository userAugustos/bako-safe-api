import Role from '@src/models/Role';

import { error } from '@utils/error';
import { Responses, bindMethods, successful } from '@utils/index';

import { IUserService } from '../configs/user/types';
import {
  IVaultTemplateService,
  ICreateVaultTemplateRequest,
  ILisVaultTemplatetRequest,
  IUpdateVaultTemplateRequest,
  IFindByIdRequest,
} from './types';

export class VaultTemplateController {
  private vaultTemplateService: IVaultTemplateService;
  private userService: IUserService;

  constructor(
    vaultTemplateService: IVaultTemplateService,
    userService: IUserService,
  ) {
    Object.assign(this, { vaultTemplateService, userService });
    bindMethods(this);
  }

  async create({ body, user }: ICreateVaultTemplateRequest) {
    try {
      const roles = await Role.find({ where: [{ name: 'Administrador' }] });

      const addMembers = body.addresses.map(async address => {
        let user = await this.userService.findByAddress(address);

        if (!user) {
          user = await this.userService.create({
            address,
            // TODO: confirmar se todos users do template terao o mesmo provider
            provider: user.provider,
            role: roles[0],
            avatar: await this.userService.randomAvatar(),
          });
        }

        return user;
      });

      const members = await Promise.all(addMembers);
      const newTemplate = await this.vaultTemplateService.create({
        ...body,
        createdBy: user,
        addresses: members,
      });
      return successful(newTemplate, Responses.Ok);
    } catch (e) {
      return error(e.error, e.statusCode);
    }
  }

  async list(req: ILisVaultTemplatetRequest) {
    const { orderBy, sort, page, perPage, q } = req.query;
    const { user } = req;
    try {
      const response = await this.vaultTemplateService
        .filter({
          user,
          q,
        })
        .ordination({ orderBy, sort })
        .paginate({ page, perPage })
        .list();

      return successful(response, Responses.Ok);
    } catch (e) {
      return error(e.error, e.statusCode);
    }
  }

  async findById(req: IFindByIdRequest) {
    const { id } = req.params;
    try {
      const response = await this.vaultTemplateService.findById(id);

      return successful(response, Responses.Ok);
    } catch (e) {
      return error(e.error, e.statusCode);
    }
  }

  async update(req: IUpdateVaultTemplateRequest) {
    try {
      const { id } = req.params;
      const { body } = req;

      const response = await this.vaultTemplateService.update(id, body);
      return successful(response, Responses.Ok);
    } catch (e) {
      return error(e.error, e.statusCode);
    }
  }
}
