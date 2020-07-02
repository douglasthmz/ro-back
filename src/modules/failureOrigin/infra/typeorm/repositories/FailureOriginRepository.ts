import { getRepository, Repository } from 'typeorm';
import IFailureOriginRepository from '@modules/failureOrigin/repositories/IFailureOriginRepository';
import ICreateFailureOriginDTO from '@modules/failureOrigin/DTOs/ICreateFailureOriginDTO';
import FailureOrigin from '../entities/FailureOrigin';

class FailureOriginRepository implements IFailureOriginRepository {
  private ormRepository: Repository<FailureOrigin>;

  constructor() {
    this.ormRepository = getRepository(FailureOrigin);
  }

  public async findById(id: string): Promise<FailureOrigin | undefined> {
    const failureOrigin = this.ormRepository.findOne(id);

    return failureOrigin;
  }

  public async create(data: ICreateFailureOriginDTO): Promise<FailureOrigin> {
    const failureOrigin = this.ormRepository.create(data);

    await this.ormRepository.save(failureOrigin);

    return failureOrigin;
  }

  public async show(): Promise<FailureOrigin[]> {
    return this.ormRepository.find();
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default FailureOriginRepository;
