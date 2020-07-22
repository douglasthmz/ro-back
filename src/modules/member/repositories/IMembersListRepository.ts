import ICreateMemberListDTO from '../DTOs/ICreateMembersListDTO';
import MembersList from '../infra/typeorm/entities/MembersList';
// import Member from '../infra/typeorm/entities/Member';

export default interface IMembersListRepository {
  show(): Promise<MembersList[]>;
  findById(id: string): Promise<MembersList | undefined>;
  // findMember(member: Member): Promise<boolean>;
  create(data: ICreateMemberListDTO): Promise<MembersList>;
  remove(id: string): Promise<void>;
}
