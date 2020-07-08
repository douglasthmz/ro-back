import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateMembers1594140241824 implements MigrationInterface {
  name = 'CreateMembers1594140241824';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role_id" uuid , "full_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_28b53062261b996d9c99fa12404" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" ADD CONSTRAINT "FK_274c5ebb3c595f5a56f1f8fba9a" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE SET NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "members" DROP CONSTRAINT "FK_274c5ebb3c595f5a56f1f8fba9a"`,
    );
    await queryRunner.query(`DROP TABLE "members"`);
  }
}
