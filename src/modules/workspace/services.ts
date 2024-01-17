import { Brackets } from 'typeorm';

import {
  PermissionRoles,
  Workspace,
  defaultPermissions,
} from '@src/models/Workspace';
import { ErrorTypes } from '@src/utils/error';
import GeneralError from '@src/utils/error/GeneralError';
import Internal from '@src/utils/error/Internal';
import { IOrdination, setOrdination } from '@src/utils/ordination';
import { PaginationParams, IPagination, Pagination } from '@src/utils/pagination';

import { IFilterParams, IWorkspacePayload, IWorkspaceService } from './types';

export class WorkspaceService implements IWorkspaceService {
  private _ordination: IOrdination<Workspace> = {
    orderBy: 'updatedAt',
    sort: 'DESC',
  };
  private _pagination: PaginationParams;
  private _filter: IFilterParams;

  filter(filter: IFilterParams) {
    this._filter = filter;
    return this;
  }

  paginate(pagination?: PaginationParams) {
    this._pagination = pagination;
    return this;
  }

  ordination(ordination?: IOrdination<Workspace>) {
    this._ordination = setOrdination(ordination);
    return this;
  }

  async list(): Promise<IPagination<Workspace> | Workspace[]> {
    try {
      const hasPagination = !!this._pagination;
      const hasOrdination = !!this._ordination;
      const queryBuilder = Workspace.createQueryBuilder('w')
        .select([
          'w', // Todos os campos de Workspace
          'owner', // Todos os campos de User (relação owner)
          'users', // Todos os campos de User (relação members)
          'predicates.id', // Seleção específica: apenas o campo 'id' de Predicate com alias
        ])
        .leftJoinAndSelect('w.owner', 'owner')
        .leftJoinAndSelect('w.members', 'users')
        .leftJoin('w.predicates', 'predicates');

      // .innerJoin('w.predicates', 'predicate')
      // .select(['predicate.id']);

      // .innerJoin('w.predicate', 'predicates')
      // .select(['predicates.id']);

      this._filter.q &&
        queryBuilder.where('LOWER(w.name) LIKE LOWER(:name)', {
          name: `%${this._filter.q}%`,
        });

      this._filter.single &&
        queryBuilder.andWhere('single = :single', { single: this._filter.single });

      this._filter.owner &&
        queryBuilder.andWhere(
          `${
            this._filter.owner.length <= 36 ? 'owner.id' : 'owner.address'
          } = :owner`,
          {
            owner: this._filter.owner,
          },
        );

      this._filter.user &&
        queryBuilder.andWhere(
          `${
            this._filter.user.length <= 36 ? 'users.id' : 'users.address'
          } = :user`,
          {
            user: this._filter.user,
          },
        );

      this._filter.id &&
        queryBuilder.andWhere('w.id = :id', {
          id: this._filter.id,
        });

      hasOrdination &&
        queryBuilder.orderBy(
          `w.${this._ordination.orderBy}`,
          this._ordination.sort,
        );
      return hasPagination
        ? await Pagination.create(queryBuilder).paginate(this._pagination)
        : await queryBuilder.getMany();
    } catch (error) {
      throw new Internal({
        type: ErrorTypes.Internal,
        title: 'Error on workspace list',
        detail: error,
      });
    }
  }

  async create(payload: Partial<Workspace>): Promise<Workspace> {
    return await Workspace.create(payload)
      .save()
      .then(data => data)
      .catch(error => {
        if (error instanceof GeneralError) throw error;

        throw new Internal({
          type: ErrorTypes.Create,
          title: 'Error on workspace create',
          detail: error,
        });
      });
  }

  async update(payload: Partial<Workspace>): Promise<boolean> {
    const w = Object.assign(await Workspace.findOne({ id: payload.id }), payload);

    return w
      .save()
      .then(() => {
        return true;
      })
      .catch(error => {
        if (error instanceof GeneralError) throw error;

        throw new Internal({
          type: ErrorTypes.Update,
          title: 'Error on workspace update',
          detail: error,
        });
      });
  }

  findById: (id: string) => Promise<Workspace>;

  /**
   * Formatar o capo de permissões do workspace, inserindo o assinante
   * caso o usuário ainda nao esteja na lista de membros, um novo field é criado, e o id do predicado adicionado
   * caso o usuário já esteja na lista de membros, o id do predicado é adicionado
   *
   * @params signers: string[] - lista de endereços dos signatários
   * @params predicate: string - id do predicado
   * @params worksapce: string - id do workspace
   *
   * @return Workspace
   *
   */
  async includeSigner(
    signers: string[],
    predicate: string,
    worksapce: string,
  ): Promise<void> {
    return await Workspace.findOne({ id: worksapce })
      .then(async workspace => {
        const p = workspace.permissions;
        signers.map(s => {
          if (p[s]) {
            p[s][PermissionRoles.SIGNER] = [
              ...p[s][PermissionRoles.SIGNER].filter(i => i != '*'),
              predicate,
            ];
            return;
          }
          p[s] = {
            ...defaultPermissions[PermissionRoles.SIGNER],
            [PermissionRoles.SIGNER]: [predicate],
          };
          return;
        });
        workspace.permissions = p;

        await workspace.save();
        return;
      })
      .catch(error => {
        if (error instanceof GeneralError) throw error;
        throw new Internal({
          type: ErrorTypes.Update,
          title: 'Error on workspace update',
          detail: error,
        });
      });
  }

  /**
   * Formatar os dados para usuário nao logado, removendo as infos delicadas
   *
   * @params w: Workspace[]
   *
   * @return o workspace resumido, apenas com nome, avatar e endereco do owner e membros
   *
   */
  static formatToUnloggedUser(w: Workspace[]) {
    return w.map(workspace => {
      return {
        id: workspace.id,
        name: workspace.name,
        avatar: workspace.avatar,
        owner: {
          name: workspace.owner.name,
          avatar: workspace.owner.avatar,
          address: workspace.owner.address,
        },
        members: workspace.members.map(member => {
          return {
            name: member.name,
            avatar: member.avatar,
            address: member.address,
          };
        }),
        predicates: workspace.predicates.length,
      };
    });
  }
}