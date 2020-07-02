import { injectable, inject } from 'tsyringe';
import IFailureOriginRepository from '../repositories/IFailureOriginRepository';
import FailureOrigin from '../infra/typeorm/entities/FailureOrigin';

interface IRequest {
  type: string;
  origin: string;
}

@injectable()
class CreateFailureOriginService {
  constructor(
    @inject('FailureOriginRepository')
    private failureOriginRepository: IFailureOriginRepository,
  ) {}

  public async execute(data: IRequest): Promise<FailureOrigin> {
    const failureOriginInstance = await this.failureOriginRepository.create(
      data,
    );

    return failureOriginInstance;
  }
}

export default CreateFailureOriginService;
