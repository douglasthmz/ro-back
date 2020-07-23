import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateExibition1594945651131
  implements MigrationInterface {
  name = 'CreateExibition1594945651131';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "admins" DROP CONSTRAINT "FK_5733c73cd81c566a90cc4802f96"`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" DROP CONSTRAINT "FK_274c5ebb3c595f5a56f1f8fba9a"`,
    );
    await queryRunner.query(
      `CREATE TABLE "exibitions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "admin_id" uuid, "product_id" uuid, "exibition_date" TIMESTAMP NOT NULL, "ready_time" character varying, "report_sent" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2c5574e530a0198793a43f727df" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "exibitions" ADD CONSTRAINT "FK_fbd4a6373d824a16e9f0006981f" FOREIGN KEY ("admin_id") REFERENCES "admins"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "exibitions" ADD CONSTRAINT "FK_97a36f186165589d7d0d630454a" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins" ADD CONSTRAINT "FK_5733c73cd81c566a90cc4802f96" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" ADD CONSTRAINT "FK_274c5ebb3c595f5a56f1f8fba9a" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "members" DROP CONSTRAINT "FK_274c5ebb3c595f5a56f1f8fba9a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins" DROP CONSTRAINT "FK_5733c73cd81c566a90cc4802f96"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exibitions" DROP CONSTRAINT "FK_97a36f186165589d7d0d630454a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exibitions" DROP CONSTRAINT "FK_fbd4a6373d824a16e9f0006981f"`,
    );
    await queryRunner.query(`DROP TABLE "exibitions"`);
    await queryRunner.query(
      `ALTER TABLE "members" ADD CONSTRAINT "FK_274c5ebb3c595f5a56f1f8fba9a" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE SET NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins" ADD CONSTRAINT "FK_5733c73cd81c566a90cc4802f96" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE SET NULL`,
    );
  }
}
