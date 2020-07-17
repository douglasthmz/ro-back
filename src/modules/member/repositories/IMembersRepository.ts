import ICreateMembersDTO from '../DTOs/ICreateMembersDTO';
import Members from '../infra/typeorm/entities/Member';

export default interface IMembersRepository {
  show(): Promise<Members[]>;
  findById(id: string): Promise<Members | undefined>;
  findByName(full_name: string): Promise<Members | undefined>;
  findByRole(role_id: string): Promise<Members | undefined>;
  create(data: ICreateMembersDTO): Promise<Members>;
  remove(id: string): Promise<void>;
}
