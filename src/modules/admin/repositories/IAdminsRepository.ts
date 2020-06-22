import Admin from '../infra/typeorm/entities/Admin';
import ICreateAdminDTO from '../DTOs/ICreateAdminDTO';

export default interface IAdminsRepository {
  findById(id: string): Promise<Admin | undefined>;
  findByEmail(email: string): Promise<Admin | undefined>;
  create(data: ICreateAdminDTO): Promise<Admin>;
  save(admin: Admin): Promise<Admin>;
}
