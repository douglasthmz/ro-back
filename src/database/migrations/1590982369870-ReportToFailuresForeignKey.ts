import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ReportToFailuresForeignKey1590982369870
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'reports',
      new TableForeignKey({
        name: 'FailuresId',
        columnNames: ['failures_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'failures',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reports', 'FailuresId');
  }
}
