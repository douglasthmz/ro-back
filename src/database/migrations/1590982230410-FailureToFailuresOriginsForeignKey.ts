import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class FailureToFailuresOriginsForeignKey1590982230410
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'FailureOriginId',
      new TableForeignKey({
        name: 'FailureOriginId',
        columnNames: ['failure_origin_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'failures_origin',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('failures', 'FailureOriginId');
  }
}
