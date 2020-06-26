import { injectable, inject } from 'tsyringe';
import IRolesRepository from '../repositories/IRolesRepository';
import Role from '../infra/typeorm/entities/Role';

@injectable()
class ShowRolesService {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  public async execute(): Promise<Role[]> {
    const roles = await this.rolesRepository.show();

    return roles;
  }
}

export default ShowRolesService;
