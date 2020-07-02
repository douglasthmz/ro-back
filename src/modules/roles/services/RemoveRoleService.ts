import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErrors';
import IRolesRepository from '../repositories/IRolesRepository';

@injectable()
class RemoveRoleService {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const roleExists = await this.rolesRepository.findById(id);

    if (!roleExists) {
      throw new AppError('This role does not exists');
    }
    await this.rolesRepository.remove(id);
  }
}

export default RemoveRoleService;
