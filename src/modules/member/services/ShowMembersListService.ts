import { injectable, inject } from 'tsyringe';
import IMembersListRepository from '../repositories/IMembersListRepository';
import MembersList from '../infra/typeorm/entities/MembersList';

@injectable()
export default class CreateMemberService {
  constructor(
    @inject('MembersListRepository')
    private membersListRepository: IMembersListRepository,
  ) {}

  public async execute(): Promise<MembersList[]> {
    const membersList = await this.membersListRepository.show();
    return membersList;
  }
}
