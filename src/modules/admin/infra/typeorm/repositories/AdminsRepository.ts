import { getRepository, Repository } from 'typeorm';
import IAdminsRepository from '@modules/admin/repositories/IAdminsRepository';
import ICreateAdminDTO from '@modules/admin/DTOs/ICreateAdminDTO';
import Admin from '../entities/Admin';

class AdminsRepository implements IAdminsRepository {
  private ormRepository: Repository<Admin>;

  constructor() {
    this.ormRepository = getRepository(Admin);
  }

  public async findById(id: string): Promise<Admin | undefined> {
    const admin = this.ormRepository.findOne(id);

    return admin;
  }

  public async findByEmail(email: string): Promise<Admin | undefined> {
    const admin = this.ormRepository.findOne({
      where: { email },
      relations: ['role'],
    });

    return admin;
  }

  public async create(adminData: ICreateAdminDTO): Promise<Admin> {
    const admin = this.ormRepository.create(adminData);

    await this.ormRepository.save(admin);

    return admin;
  }

  public async save(admin: Admin): Promise<Admin> {
    return this.ormRepository.save(admin);
  }
}

export default AdminsRepository;
