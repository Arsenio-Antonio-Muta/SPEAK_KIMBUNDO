import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationsLearningVocabularyVocabulary1672548609687 implements MigrationInterface {
    name = 'RelationsLearningVocabularyVocabulary1672548609687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "learning_vocabulary" ADD "vocabularyId" character varying`);
        await queryRunner.query(`ALTER TABLE "learning_vocabulary" ADD CONSTRAINT "FK_a10c7ccad3b49f5fc8bbf02f92f" FOREIGN KEY ("vocabularyId") REFERENCES "vocabularies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "learning_vocabulary" DROP CONSTRAINT "FK_a10c7ccad3b49f5fc8bbf02f92f"`);
        await queryRunner.query(`ALTER TABLE "learning_vocabulary" DROP COLUMN "vocabularyId"`);
    }

}
