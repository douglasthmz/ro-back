import { injectable, inject } from 'tsyringe';
import IExibitionsRepository from '../repositories/IExibitionsRepository';
import Exibition from '../infra/typeorm/entities/Exibition';

@injectable()
class ListAllExibitionsService {
  constructor(
    @inject('ExibitionsRepository')
    private exibitionsRepository: IExibitionsRepository,
  ) {}

  public async execute(product_id: string): Promise<Exibition[]> {
    const exibitions = await this.exibitionsRepository.findAll(product_id);

    return exibitions;
  }
}

export default ListAllExibitionsService;
