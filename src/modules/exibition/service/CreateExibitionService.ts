import { injectable, inject } from 'tsyringe';
import IExibitionsRepository from '../repositories/IExibitionsRepository';
import Exibition from '../infra/typeorm/entities/Exibition';
import ICreateExibitionDTO from '../DTOs/ICreateExibitionDTO';

@injectable()
class CreateExibitionService {
  constructor(
    @inject('ExibitionsRepository')
    private exibitionsRepository: IExibitionsRepository,
  ) {}

  public async execute(data: ICreateExibitionDTO): Promise<Exibition> {
    const exibitionInstance = await this.exibitionsRepository.create(data);

    return exibitionInstance;
  }
}

export default CreateExibitionService;
