import { injectable, inject } from 'tsyringe';

import Admin from '@modules/admin/infra/typeorm/entities/Admin';
import AppError from '@shared/errors/AppErrors';
import IAdminsRepository from '@modules/admin/repositories/IAdminsRepository';
import IHashProvider from '@modules/admin/providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  role_id: string;
}

@injectable()
class CreateAdminService {
  constructor(
    @inject('AdminsRepository')
    private adminsRepository: IAdminsRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    role_id,
  }: IRequest): Promise<Admin> {
    const checkUserExists = await this.adminsRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email already used');
    }

    if (!email.includes('g.globo')) {
      throw new AppError('Only corporate email are allowed');
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const user = await this.adminsRepository.create({
      name,
      email,
      password: passwordHash,
      role_id,
    });

    return user;
  }
}

export default CreateAdminService;
