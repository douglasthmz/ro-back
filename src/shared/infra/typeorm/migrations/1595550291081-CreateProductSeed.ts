import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import ProductsSeed from '../seeds/products.seed';

export default class CreateProductSeed1595550291081
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const products = ProductsSeed;
    await getRepository('products').save(products);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // doing nothing
  }
}
