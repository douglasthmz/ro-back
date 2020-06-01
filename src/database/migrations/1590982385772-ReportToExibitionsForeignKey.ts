import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ReportToExibitionsForeignKey1590982385772
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'reports',
      new TableForeignKey({
        name: 'ExibitionId',
        columnNames: ['exibition_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exibitions',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reports', 'ExibitionId');
  }
}
