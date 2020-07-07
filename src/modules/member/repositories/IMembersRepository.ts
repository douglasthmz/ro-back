import ICreateMemberDTO from '../DTOs/ICreateMembersDTO';
import Member from '../infra/typeorm/entities/Member';

export default interface IMembersRepository {
  show(): Promise<Member[]>;
  findById(id: string): Promise<Member | undefined>;
  findByName(full_name: string): Promise<Member | undefined>;
  findByRole(role_id: string): Promise<Member | undefined>;
  create(data: ICreateMemberDTO): Promise<Member>;
  remove(id: string): Promise<void>;
}
