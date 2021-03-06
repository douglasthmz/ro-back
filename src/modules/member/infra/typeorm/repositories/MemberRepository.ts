import { getRepository, Repository, In } from 'typeorm';
import IMembersRepository from '@modules/member/repositories/IMembersRepository';
import ICreateMemberDTO from '@modules/member/DTOs/ICreateMembersDTO';
import AppError from '@shared/errors/AppErrors';
import Member from '../entities/Member';

class MembersRepository implements IMembersRepository {
  private ormRepository: Repository<Member>;

  constructor() {
    this.ormRepository = getRepository('members');
  }

  public async findById(id: string): Promise<Member | undefined> {
    const member = this.ormRepository.findOne(id);

    return member;
  }

  public async findMembers(
    membersList: string[],
  ): Promise<Member[] | undefined> {
    const members = this.ormRepository.find({
      where: {
        id: In(membersList),
      },
    });

    return members;
  }

  public async show(): Promise<Member[]> {
    return this.ormRepository.find();
  }

  public async create(memberData: ICreateMemberDTO): Promise<Member> {
    const member = this.ormRepository.create(memberData);

    await this.ormRepository.save(member);

    const savedMember = await this.ormRepository.findOne(member.id);

    if (!savedMember) {
      throw new AppError('Could not create the member');
    }

    return savedMember;
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async save(member: Member): Promise<Member> {
    return this.ormRepository.save(member);
  }

  public async findByName(full_name: string): Promise<Member | undefined> {
    const member = await this.ormRepository.findOne({ where: { full_name } });
    return member;
  }

  public async findByRole(role_id: string): Promise<Member | undefined> {
    const member = await this.ormRepository.findOne({ where: { role_id } });
    return member;
  }
}

export default MembersRepository;
