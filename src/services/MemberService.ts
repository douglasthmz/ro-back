import { getRepository, Repository, UpdateResult } from 'typeorm';
import { isUuid } from 'uuidv4';
import Member from '../models/Member';
import AppError from '../errors/AppErrors';

interface MemberRequest {
  full_name: string;
  role_id: string;
  id?: string;
}

export default class MemberService {
  private async checkIfExists(
    repository: Repository<Member>,
    uniqueKey: string,
  ): Promise<boolean> {
    let checkIfExists;

    if (isUuid(uniqueKey)) {
      checkIfExists = await repository.findOne({
        where: { id: uniqueKey },
      });
    } else {
      checkIfExists = await repository.findOne({
        where: { full_name: uniqueKey },
      });
    }
    return !!checkIfExists;
  }

  public async create({ full_name, role_id }: MemberRequest): Promise<Member> {
    const memberRepository = getRepository(Member);

    const member = memberRepository.create({ full_name, role_id });
    await memberRepository.save(member);

    return member;
  }

  public async remove(id: string): Promise<string> {
    const memberRepository = getRepository(Member);

    const memberExists = await this.checkIfExists(memberRepository, id);

    if (!memberExists) {
      throw new AppError('Invalid member');
    }

    await memberRepository.delete(id);

    return 'Member deleted';
  }

  public async update({
    full_name,
    role_id,
    id,
  }: MemberRequest & { id: string }): Promise<UpdateResult> {
    const memberRepository = getRepository(Member);

    const memberExists = await this.checkIfExists(memberRepository, id);

    if (!memberExists) {
      throw new AppError('Invalid member');
    }

    const memberUpdate = await memberRepository.update(id, {
      full_name,
      role_id,
    });

    return memberUpdate;
  }
}
