import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668445478866 implements MigrationInterface {
    name = 'default1668445478866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_specialty" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "doctorsId" integer)`);
        await queryRunner.query(`CREATE TABLE "tb_doctor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "crm" varchar NOT NULL, "phone" varchar NOT NULL, "mobilePhone" varchar NOT NULL, "zipCode" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_tb_specialty" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "doctorsId" integer, CONSTRAINT "FK_17bf82a5788a5a93178f006af8b" FOREIGN KEY ("doctorsId") REFERENCES "tb_doctor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_tb_specialty"("id", "name", "doctorsId") SELECT "id", "name", "doctorsId" FROM "tb_specialty"`);
        await queryRunner.query(`DROP TABLE "tb_specialty"`);
        await queryRunner.query(`ALTER TABLE "temporary_tb_specialty" RENAME TO "tb_specialty"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_specialty" RENAME TO "temporary_tb_specialty"`);
        await queryRunner.query(`CREATE TABLE "tb_specialty" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "doctorsId" integer)`);
        await queryRunner.query(`INSERT INTO "tb_specialty"("id", "name", "doctorsId") SELECT "id", "name", "doctorsId" FROM "temporary_tb_specialty"`);
        await queryRunner.query(`DROP TABLE "temporary_tb_specialty"`);
        await queryRunner.query(`DROP TABLE "tb_doctor"`);
        await queryRunner.query(`DROP TABLE "tb_specialty"`);
    }

}
