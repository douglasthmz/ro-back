import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AdminsToRolesForeignKey1590978154265
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'admins',
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
    await queryRunner.dropForeignKey('admins', 'RoleId');
  }
}
