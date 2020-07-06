import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  name: string;
  site: string;
  avatar_link?: string;
  studio: string;
  alias: string;
  control: string;
  exibition_days: number[];
  initial_time: string;
  end_time: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(data: IRequest): Promise<Product> {
    const productInstance = await this.productsRepository.create(data);

    return productInstance;
  }
}

export default CreateProductService;
