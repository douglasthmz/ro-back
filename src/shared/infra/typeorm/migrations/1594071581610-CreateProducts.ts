import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateProducts1594071581610 implements MigrationInterface {
  name = 'CreateProducts1594071581610';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "site" character varying NOT NULL, "avatar_link" character varying NOT NULL, "studio" character varying NOT NULL, "alias" character varying NOT NULL, "control" character varying NOT NULL, "exibition_days" integer array NOT NULL, "initial_time" character varying NOT NULL, "end_time" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
