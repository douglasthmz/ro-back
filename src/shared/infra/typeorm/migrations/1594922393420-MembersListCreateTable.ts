import { MigrationInterface, QueryRunner } from 'typeorm';

export default class MembersListCreateTable1594922393420
  implements MigrationInterface {
  name = 'MembersListCreateTable1594922393420';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "members_list" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "members_list_json" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d43e7c6d0455099ec6667ec82a1" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "members_list"`);
  }
}
