import ICreateMemberListDTO from '../DTOs/ICreateMembersListDTO';
import MembersList from '../infra/typeorm/entities/MembersList';

export default interface IMembersRepository {
  show(): Promise<MembersList[]>;
  findById(id: string): Promise<MembersList | undefined>;
  create(data: ICreateMemberListDTO): Promise<MembersList>;
  remove(id: string): Promise<void>;
}
