import { injectable, inject } from 'tsyringe';
import IMembersRepository from '../repositories/IMembersRepository';
import Member from '../infra/typeorm/entities/Member';
import AppError from '@shared/errors/AppErrors';
import Role from '@modules/roles/infra/typeorm/entities/Role';
import IRolesRepository from '@modules/roles/repositories/IRolesRepository';
import { isNull } from 'util';

interface IRequest {
  role_id: string,
  full_name: string
}
@injectable()
export default class CreateMemberService {
  constructor(
    @inject('MembersRepository')
    private membersRepository: IMembersRepository,
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository
  ){}

  public async execute (data : IRequest): Promise<Member>{

    if(data.full_name.length < 2) {
      throw new AppError("Member name cannot be lower then 2 characters")
    }
    
    if(data.full_name.startsWith(" ")){
      throw new AppError("Member name cannot start with spaces")
    }


    const checkIfRoleExists = await this.rolesRepository.findById(data.role_id)

    if(!checkIfRoleExists){
      throw new AppError("Role doesn't exists")
    }

    const checkIfMemberExists = 
   !! await this.membersRepository.findByName(data.full_name) && 
   !! await this.membersRepository.findByRole(data.role_id)
  
   if(checkIfMemberExists){
      throw new AppError('This Member already exists')
    }

    const member = await this.membersRepository.create(data)

    return member
  }
}