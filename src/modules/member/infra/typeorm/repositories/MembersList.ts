import { getRepository, Repository } from 'typeorm';
import IMembersListRepository from '@modules/member/repositories/IMembersListRepository';
import ICreateMembersListDTO from '@modules/member/DTOs/ICreateMembersListDTO';
import AppError from '@shared/errors/AppErrors';
import { stringify } from 'querystring';
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

  public async show(): Promise<MembersList[]> {
    return this.ormRepository.find();
  }

  public async create(
    membersData: ICreateMembersListDTO,
  ): Promise<MembersList> {
    const membersList = this.ormRepository.create({
      members_list_json: stringify(membersData.membersList),
    });

    await this.ormRepository.save(membersList);

    const savedMember = await this.ormRepository.findOne(membersList.id);

    if (!savedMember) {
      throw new AppError('Could not create the member');
    }

    return savedMember;
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async save(membersList: MembersList): Promise<MembersList> {
    return this.ormRepository.save(membersList);
  }
}

export default MembersListRepository;
