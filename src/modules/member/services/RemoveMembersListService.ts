import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErrors';
import IMembersListRepository from '../repositories/IMembersListRepository';

@injectable()
export default class RemoveMemberService {
  constructor(
    @inject('MembersListRepository')
    private membersListRepository: IMembersListRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const checkIfExists = await this.membersListRepository.findById(id);
    if (!checkIfExists) {
      throw new AppError("Members List doesn't exist.");
    }

    await this.membersListRepository.remove(id);
  }
}
