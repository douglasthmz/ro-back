import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';
import Admin from '@modules/admin/infra/typeorm/entities/Admin';
import authConfig from '@config/auth';

import AppError from '@shared/errors/AppErrors';
import IAdminRepository from '../repositories/IAdminsRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  admin: Admin;
  token: string;
}

@injectable()
class AuthenticateAdminService {
  constructor(
    @inject('AdminsRepository')
    private adminsRepository: IAdminRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const admin = await this.adminsRepository.findByEmail(email);

    if (!admin) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      admin.password,
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: admin.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      admin,
      token,
    };
  }
}

export default AuthenticateAdminService;
