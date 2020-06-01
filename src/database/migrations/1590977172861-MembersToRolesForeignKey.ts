import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class MembersToRolesForeignKey1590977172861
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'members',
      new TableForeignKey({
        name: 'RoleId',
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'roles',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('members', 'RoleId');
  }
}
