import { injectable, inject } from 'tsyringe';
// import AppError from '@shared/errors/AppErrors';
import { isUuid } from 'uuidv4';
import IMembersListRepository from '../repositories/IMembersListRepository';
import ICreateMembersListDTO from '../DTOs/ICreateMembersListDTO';
import MembersList from '../infra/typeorm/entities/MembersList';
import IMembersRepository from '../repositories/IMembersRepository';
import Member from '../infra/typeorm/entities/Member';

@injectable()
export default class CreateMembersListService {
  constructor(
    @inject('MembersListRepository')
    private membersListRepository: IMembersListRepository,
    @inject('MembersRepository')
    private memberRepository: IMembersRepository,
  ) {}

  public async execute(
    members_list_json: ICreateMembersListDTO,
  ): Promise<MembersList> {
    for (const member in members_list_json) {
      if (members_list_json.hasOwnProperty(member)) {
        const element: Member = members_list_json[member];
        if (isUuid(element.role_id)) {
          const CheckIfMemberExists = await this.memberRepository.findById(
            element.role_id,
          );
          console.log(!!CheckIfMemberExists);
        }
      }
    }

    const membersList = this.membersListRepository.create(members_list_json);
    return membersList;
  }
}
