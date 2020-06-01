import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ExibitionToProductsForeignKey1590981812490
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'Product',
      new TableForeignKey({
        name: 'ProductId',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('exibitions', 'ProductId');
  }
}
