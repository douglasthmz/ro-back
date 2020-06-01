import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class ReportMigration1590619868012
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reports',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'exibition_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'failures_id',
            type: 'uuid',
            isNullable: false,
            isArray: true,
          },
          {
            name: 'members_id',
            type: 'uuid',
            isNullable: false,
            isArray: true,
          },
          {
            name: 'comments',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('reports', [
      new TableForeignKey({
        name: 'ExibitionId',
        columnNames: ['exibition_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exibitions',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        name: 'FailuresId',
        columnNames: ['failures_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'failures',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        name: 'MembersId',
        columnNames: ['members_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'members',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reports', 'ExibitionId');
    await queryRunner.dropForeignKey('reports', 'FailuresId');
    await queryRunner.dropForeignKey('reports', 'MembersId');
    await queryRunner.dropTable('reports');
  }
}
