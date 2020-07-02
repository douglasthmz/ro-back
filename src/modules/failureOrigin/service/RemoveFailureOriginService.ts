import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErrors';
import IFailureOriginRepository from '../repositories/IFailureOriginRepository';

@injectable()
class RemoveFailureOriginService {
  constructor(
    @inject('FailureOriginRepository')
    private failureOriginRepository: IFailureOriginRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const failureOriginExists = await this.failureOriginRepository.findById(id);

    if (!failureOriginExists) {
      throw new AppError('This failure origin does not exists');
    }
    await this.failureOriginRepository.remove(id);
  }
}

export default RemoveFailureOriginService;
