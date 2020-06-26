import Role from '../infra/typeorm/entities/Role';
import ICreateRoleDTO from '../DTOs/ICreateRolesDTO';

export default interface IRolesRepository {
  show(): Promise<Role[]>;
  findById(id: string): Promise<Role | undefined>;
  create(data: ICreateRoleDTO): Promise<Role>;
  save(role: Role): Promise<Role>;
}
