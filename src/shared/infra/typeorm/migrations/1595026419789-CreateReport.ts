import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateReport1595026419789 implements MigrationInterface {
  name = 'CreateReport1595026419789';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "reports" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "exibition_id" uuid NOT NULL, "memberlist_id" character varying, "report_finished" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_52fec5503a32a2523511e63849" UNIQUE ("exibition_id"), CONSTRAINT "PK_d9013193989303580053c0b5ef6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" DROP CONSTRAINT "FK_274c5ebb3c595f5a56f1f8fba9a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reports" ADD CONSTRAINT "FK_52fec5503a32a2523511e63849e" FOREIGN KEY ("exibition_id") REFERENCES "exibitions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE "reports" DROP CONSTRAINT "FK_52fec5503a32a2523511e63849e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" ADD CONSTRAINT "FK_274c5ebb3c595f5a56f1f8fba9a" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`DROP TABLE "reports"`);
  }
}
