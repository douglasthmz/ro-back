import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ExibitionToAdminsForeignKey1590981977105
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'AdminId',
      new TableForeignKey({
        name: 'AdminId',
        columnNames: ['admin_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'admins',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('exibitions', 'AdminId');
  }
}
