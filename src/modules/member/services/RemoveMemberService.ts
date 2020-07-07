import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErrors';
import IMembersRepository from '../repositories/IMembersRepository';

@injectable()
export default class RemoveMemberService {
  constructor(
    @inject('MembersRepository')
    private membersRepository: IMembersRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const checkIfExists = await this.membersRepository.findById(id);
    if (!checkIfExists) {
      throw new AppError("Member doesn't exist.");
    }

    await this.membersRepository.remove(id);
  }
}
