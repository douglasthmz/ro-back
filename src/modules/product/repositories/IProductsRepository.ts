import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../DTOs/ICreateProductDTO';

export default interface IProductsRepository {
  show(): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
  create(data: ICreateProductDTO): Promise<Product>;
  save(admin: Product): Promise<Product>;
  remove(id: string): Promise<void>;
}
