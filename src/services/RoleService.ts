import { getRepository, Repository } from 'typeorm';
import { isUuid } from 'uuidv4';
import Role from '../models/Role';
import AppError from '../errors/AppErrors';

interface RoleRequest {
  role_name: string;
}

export default class RoleService {
  private async checkIfExists(
    repository: Repository<Role>,
    uniqueKey: string,
  ): Promise<boolean> {
    let checkIfExists;

    if (isUuid(uniqueKey)) {
      checkIfExists = await repository.findOne({
        where: { id: uniqueKey },
      });
    } else {
      checkIfExists = await repository.findOne({
        where: { role_name: uniqueKey },
      });
    }

    return !!checkIfExists;
  }

  public async create({ role_name }: RoleRequest): Promise<Role> {
    const rolesRepository = getRepository(Role);

    const roleExists = await this.checkIfExists(rolesRepository, role_name);

    if (roleExists) {
      throw new AppError('this role exist');
    }

    const role = rolesRepository.create({ role_name });
    await rolesRepository.save(role);

    return role;
  }

  public async remove(id: string): Promise<string> {
    const rolesRepository = getRepository(Role);

    const roleExists = await this.checkIfExists(rolesRepository, id);

    if (!roleExists) {
      throw new AppError('this role does not exists exist');
    }

    await rolesRepository.delete(id);

    return 'Role deleted';
  }
}
