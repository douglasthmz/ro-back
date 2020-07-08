import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateFailureOrigin1593731654067
  implements MigrationInterface {
  name = 'CreateFailureOrigin1593731654067';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "admins" DROP CONSTRAINT "UserRole"`);
    await queryRunner.query(
      `CREATE TABLE "failure_origin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "origin" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_831a31e9bea95b8c697712d6a86" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins" DROP CONSTRAINT "UQ_051db7d37d478a69a7432df1479"`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins" ADD CONSTRAINT "FK_5733c73cd81c566a90cc4802f96" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE SET NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "admins" DROP CONSTRAINT "FK_5733c73cd81c566a90cc4802f96"`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins" ADD CONSTRAINT "UQ_051db7d37d478a69a7432df1479" UNIQUE ("email")`,
    );
    await queryRunner.query(`DROP TABLE "failure_origin"`);
    await queryRunner.query(
      `ALTER TABLE "admins" ADD CONSTRAINT "UserRole" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
