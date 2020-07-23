import { injectable, inject } from 'tsyringe';
import IMembersListRepository from '../repositories/IMembersListRepository';
import MembersList from '../infra/typeorm/entities/MembersList';

@injectable()
export default class CreateMemberService {
  constructor(
    @inject('MembersListRepository')
    private membersListRepository: IMembersListRepository,
  ) {}

  public async execute(id: string): Promise<MembersList | undefined> {
    const membersList = await this.membersListRepository.findById(id);
    return membersList;
  }
}
