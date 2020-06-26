import { getRepository, Repository } from 'typeorm';
import IRolesRepository from '@modules/roles/repositories/IRolesRepository';
import ICreateRolesDTO from '@modules/roles/DTOs/ICreateRolesDTO';
import Role from '../entities/Role';

class RolesRepository implements IRolesRepository {
  private ormRepository: Repository<Role>;

  constructor() {
    this.ormRepository = getRepository(Role);
  }

  public async findById(id: string): Promise<Role | undefined> {
    const role = this.ormRepository.findOne(id);

    return role;
  }

  public async create(roleData: ICreateRolesDTO): Promise<Role> {
    const role = this.ormRepository.create(roleData);

    await this.ormRepository.save(role);

    return role;
  }

  public async save(role: Role): Promise<Role> {
    return this.ormRepository.save(role);
  }

  public async show(): Promise<Role[]> {
    return this.ormRepository.find();
  }
}

export default RolesRepository;
