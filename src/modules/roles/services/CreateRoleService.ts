import { injectable, inject } from 'tsyringe';
import IRolesRepository from '../repositories/IRolesRepository';
import Role from '../infra/typeorm/entities/Role';

interface IRequest {
  role: string;
}

@injectable()
class CreateRoleService {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  public async execute({ role }: IRequest): Promise<Role> {
    const roleInstance = await this.rolesRepository.create({
      role,
    });

    return roleInstance;
  }
}

export default CreateRoleService;
