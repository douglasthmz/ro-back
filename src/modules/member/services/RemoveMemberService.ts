import { injectable, inject } from 'tsyringe';
import IMembersRepository from '../repositories/IMembersRepository';
import AppError from '@shared/errors/AppErrors';

@injectable()
export default class RemoveMemberService {
  constructor(
    @inject('MembersRepository')
    private membersRepository: IMembersRepository
  ){}


public async execute (id: string): Promise<void>{

  const checkIfExists = await this.membersRepository.findById(id)
    if(!checkIfExists){
      throw new AppError("Member doesn't exist.")
    }

    await this.membersRepository.remove(id)
    return
  }
}