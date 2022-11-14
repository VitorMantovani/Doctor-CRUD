import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668446601925 implements MigrationInterface {
    name = 'default1668446601925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_tb_doctor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "crm" varchar NOT NULL, "phone" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_tb_doctor"("id", "name", "crm", "phone") SELECT "id", "name", "crm", "phone" FROM "tb_doctor"`);
        await queryRunner.query(`DROP TABLE "tb_doctor"`);
        await queryRunner.query(`ALTER TABLE "temporary_tb_doctor" RENAME TO "tb_doctor"`);
        await queryRunner.query(`CREATE TABLE "temporary_tb_doctor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "crm" varchar NOT NULL, "phone" varchar NOT NULL, "mobile_phone" varchar NOT NULL, "zip_code" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_tb_doctor"("id", "name", "crm", "phone") SELECT "id", "name", "crm", "phone" FROM "tb_doctor"`);
        await queryRunner.query(`DROP TABLE "tb_doctor"`);
        await queryRunner.query(`ALTER TABLE "temporary_tb_doctor" RENAME TO "tb_doctor"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_doctor" RENAME TO "temporary_tb_doctor"`);
        await queryRunner.query(`CREATE TABLE "tb_doctor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "crm" varchar NOT NULL, "phone" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "tb_doctor"("id", "name", "crm", "phone") SELECT "id", "name", "crm", "phone" FROM "temporary_tb_doctor"`);
        await queryRunner.query(`DROP TABLE "temporary_tb_doctor"`);
        await queryRunner.query(`ALTER TABLE "tb_doctor" RENAME TO "temporary_tb_doctor"`);
        await queryRunner.query(`CREATE TABLE "tb_doctor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "crm" varchar NOT NULL, "phone" varchar NOT NULL, "mobilePhone" varchar NOT NULL, "zipCode" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "tb_doctor"("id", "name", "crm", "phone") SELECT "id", "name", "crm", "phone" FROM "temporary_tb_doctor"`);
        await queryRunner.query(`DROP TABLE "temporary_tb_doctor"`);
    }

}
