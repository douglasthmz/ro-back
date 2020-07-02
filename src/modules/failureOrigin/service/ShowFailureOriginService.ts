import { injectable, inject } from 'tsyringe';
import IFailureOriginRepository from '../repositories/IFailureOriginRepository';
import FailureOrigin from '../infra/typeorm/entities/FailureOrigin';

@injectable()
class ShowFailureOriginService {
  constructor(
    @inject('FailureOriginRepository')
    private failureOriginRepository: IFailureOriginRepository,
  ) {}

  public async execute(): Promise<FailureOrigin[]> {
    const failures = await this.failureOriginRepository.show();

    return failures;
  }
}

export default ShowFailureOriginService;
