import { getRepository, Repository } from 'typeorm';
import IExibitionsRepository from '@modules/exibition/repositories/IExibitionsRepository';
import ICreateExibitionDTO from '@modules/exibition/DTOs/ICreateExibitionDTO';
import Exibition from '../entities/Exibition';

class ExibitionsRepository implements IExibitionsRepository {
  private ormRepository: Repository<Exibition>;

  constructor() {
    this.ormRepository = getRepository(Exibition);
  }

  public async findById(id: string): Promise<Exibition | undefined> {
    const exibition = this.ormRepository.findOne(id);

    return exibition;
  }

  public async findLast15(product_id: string): Promise<Exibition[]> {
    const exibitions = await this.ormRepository.find({
      where: {
        product_id,
      },
      order: {
        exibition_date: 1,
      },
      take: 15,
    });

    return exibitions;
  }

  public async findAll(product_id: string): Promise<Exibition[]> {
    const exibitions = await this.ormRepository.find({
      where: {
        product_id,
      },
      order: {
        exibition_date: 1,
      },
    });
    return exibitions;
  }

  public async create(exibitionData: ICreateExibitionDTO): Promise<Exibition> {
    const exibition = this.ormRepository.create(exibitionData);

    await this.ormRepository.save(exibition);

    return exibition;
  }

  public async save(exibition: Exibition): Promise<Exibition> {
    return this.ormRepository.save(exibition);
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ExibitionsRepository;
