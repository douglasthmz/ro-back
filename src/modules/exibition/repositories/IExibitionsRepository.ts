import Exibition from '../infra/typeorm/entities/Exibition';
import ICreateExibitionDTO from '../DTOs/ICreateExibitionDTO';

export default interface IExibitionsRepository {
  findById(id: string): Promise<Exibition | undefined>;
  findLast15(product_id: string): Promise<Exibition[]>;
  findAll(product_id: string): Promise<Exibition[]>;
  create(data: ICreateExibitionDTO): Promise<Exibition>;
  save(exibition: Exibition): Promise<Exibition>;
  remove(id: string): Promise<void>;
}
