import { getRepository, Repository } from 'typeorm';
import IMembersListRepository from '@modules/member/repositories/IMembersListRepository';
import ICreateMembersListDTO from '@modules/member/DTOs/ICreateMembersListDTO';
import MembersList from '../entities/MembersList';

class MembersListRepository implements IMembersListRepository {
  private ormRepository: Repository<MembersList>;

  constructor() {
    this.ormRepository = getRepository('members_list');
  }

  public async findById(id: string): Promise<MembersList | undefined> {
    const member = this.ormRepository.findOne(id);

    return member;
  }

  public async create(
    membersData: ICreateMembersListDTO,
  ): Promise<MembersList> {
    const membersListParsed = JSON.stringify(membersData);

    const membersList = this.ormRepository.create({
      members_list_json: membersListParsed,
    });

    await this.ormRepository.save(membersList);

    return membersList;
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async save(membersList: MembersList): Promise<MembersList> {
    return this.ormRepository.save(membersList);
  }
}

export default MembersListRepository;
