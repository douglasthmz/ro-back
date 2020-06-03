import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class MembersList1591143304870 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'members_list',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'diretor_tv_1',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'diretor_tv_2',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'coord_tj',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'coord_externa',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'editor_chefe',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'sonoplasta_1',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'sonoplasta_2',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'lider_tecnologia',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'editor_imagem_1',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'editor_imagem_2',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'tecnico_sistemas_1',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'tecnico_sistemas_2',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'tecnico_sistemas_3',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'produtor_tecnologia',
            type: 'uuid',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('members_list');
  }
}
