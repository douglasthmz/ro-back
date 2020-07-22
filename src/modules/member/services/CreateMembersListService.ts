import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErrors';
import IMembersListRepository from '../repositories/IMembersListRepository';
import ICreateMembersListDTO from '../DTOs/ICreateMembersListDTO';
import MembersList from '../infra/typeorm/entities/MembersList';
import IMembersRepository from '../repositories/IMembersRepository';

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
    const keys = Object.values(members_list_json);
    const memberListId = keys.map(key => key.member_id);

    const findDuplicates = memberListId.filter(
      (item, index) => memberListId.indexOf(item) !== index,
    );

    if (findDuplicates.length > 0) {
      throw new AppError('Exists duplicate members in list', 400);
    }

    const members = await this.memberRepository.findMembers(memberListId);

    if (memberListId.length !== members?.length) {
      throw new AppError('Exists invalid members in list', 400);
    }

    const membersList = await this.membersListRepository.create(
      members_list_json,
    );
    const ParsedMembersList = JSON.parse(membersList.members_list_json);
    return ParsedMembersList;
  }
}
