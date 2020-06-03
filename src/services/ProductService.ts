import { getRepository, Repository } from 'typeorm';
import { isUuid } from 'uuidv4';
import fs from 'fs';
import Product from '../models/Product';
import AppError from '../errors/AppErrors';
import UploadConfig from '../config/Upload';

interface ProductsRequest {
  name: string;
  alias: string;
  host: 'GNEWS' | 'REDE' | 'LOCAL' | 'ÍON' | 'E.G' | 'EVENTO' | 'ESPORTE';
  initial_time: Date;
  end_time: Date;
  studio: string;
}

interface ProductsUpdateRequest extends ProductsRequest {
  id: string;
}

export default class ProductService {
  private async checkIfExists(
    repository: Repository<Product>,
    uniqueKey: string,
  ): Promise<boolean> {
    let checkIfExists;

    if (isUuid(uniqueKey)) {
      checkIfExists = await repository.findOne({
        where: { id: uniqueKey },
      });
    } else {
      checkIfExists = await repository.findOne({
        where: { name: uniqueKey },
      });
    }
    return !!checkIfExists;
  }

  public async create({
    name,
    alias,
    host,
    studio,
    initial_time,
    end_time,
  }: ProductsRequest): Promise<Product> {
    const productRepository = getRepository(Product);

    const productExists = await this.checkIfExists(productRepository, name);

    if (productExists) {
      throw new AppError('Product already exists!');
    }

    const product = productRepository.create({
      name,
      alias,
      host,
      studio,
      initial_time,
      end_time,
    });
    await productRepository.save(product);

    return product;
  }

  public async update({
    id,
    name,
    alias,
    host,
    studio,
    initial_time,
    end_time,
  }: ProductsUpdateRequest): Promise<string> {
    const productRepository = getRepository(Product);
    if (!isUuid(id)) {
      throw new AppError('Id not valid');
    }
    const productExists = this.checkIfExists(productRepository, id);

    if (!productExists) {
      throw new AppError('Id not valid!');
    }

    await productRepository.update(id, {
      name,
      alias,
      host,
      studio,
      initial_time,
      end_time,
    });
    return 'Product updated!';
  }

  public async updateAvatar(id: string, filename: string): Promise<string> {
    const productRepository = getRepository(Product);
    const avatar_link = `${UploadConfig.directory}/${filename}`;

    if (!isUuid(id)) {
      throw new AppError('Id not valid');
    }
    const productFileExists = fs.promises.stat(avatar_link);
    if (!productFileExists) {
      throw new AppError('Image not found');
    }

    const product = await productRepository.findOne({
      where: { id },
    });

    if (product?.avatar_link) {
      await fs.promises.unlink(product.avatar_link);
    }

    await productRepository.update(id, { avatar_link });

    return 'Avatar updated';
  }

  public async delete(id: string): Promise<string> {
    const productRepository = getRepository(Product);
    if (!isUuid(id)) {
      throw new AppError('Id not valid');
    }

    const productExists = await this.checkIfExists(productRepository, id);
    if (!productExists) {
      throw new AppError('Id not valid');
    }

    await productRepository.delete(id);

    return 'Product deleted';
  }
}
