import { injectable, inject } from 'tsyringe';
import IMembersRepository from '../repositories/IMembersRepository';
import Member from '../infra/typeorm/entities/Member';

@injectable()
export default class CreateMemberService {
  constructor(
    @inject('MembersRepository')
    private membersRepository: IMembersRepository,
  ) {}

  public async execute(): Promise<Member[]> {
    const members = await this.membersRepository.show();
    return members;
  }
}
