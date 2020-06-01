import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ReportToMembersForeignKey1590982415584
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'reports',
      new TableForeignKey({
        name: 'MembersId',
        columnNames: ['members_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'members',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reports', 'MembersId');
  }
}
