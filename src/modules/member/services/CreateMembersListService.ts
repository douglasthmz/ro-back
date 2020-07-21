import { injectable, inject } from 'tsyringe';
// import AppError from '@shared/errors/AppErrors';
import IMembersListRepository from '../repositories/IMembersListRepository';
import ICreateMembersListDTO from '../DTOs/ICreateMembersListDTO';
import MembersList from '../infra/typeorm/entities/MembersList';

// Protocolo 038204217230089

@injectable()
export default class CreateMembersListService {
  constructor(
    @inject('MembersListRepository')
    private membersListRepository: IMembersListRepository,
  ) {}

  public async execute(
    members_list_json: ICreateMembersListDTO,
  ): Promise<MembersList> {
    const membersList = this.membersListRepository.create(members_list_json);
    return membersList;
  }
}
