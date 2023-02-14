import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationsVocabularyExamples1672455615195 implements MigrationInterface {
    name = 'RelationsVocabularyExamples1672455615195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "examples" ADD "vocabularyId" character varying`);
        await queryRunner.query(`ALTER TABLE "examples" ADD CONSTRAINT "FK_2184d03b9ba7ba52ffa8dfe4deb" FOREIGN KEY ("vocabularyId") REFERENCES "vocabularies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "examples" DROP CONSTRAINT "FK_2184d03b9ba7ba52ffa8dfe4deb"`);
        await queryRunner.query(`ALTER TABLE "examples" DROP COLUMN "vocabularyId"`);
    }

}
