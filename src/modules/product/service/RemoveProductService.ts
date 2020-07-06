import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErrors';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class RemoveProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const productExists = await this.productsRepository.findById(id);

    if (!productExists) {
      throw new AppError('This role does not exists');
    }

    this.productsRepository.remove(id);
  }
}

export default RemoveProductService;
