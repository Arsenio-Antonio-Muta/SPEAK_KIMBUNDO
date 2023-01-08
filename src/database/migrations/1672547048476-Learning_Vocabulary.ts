import {MigrationInterface, QueryRunner} from "typeorm";

export class LearningVocabulary1672547048476 implements MigrationInterface {
    name = 'LearningVocabulary1672547048476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "learning_vocabulary" ("id" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8d5b944f887a3b22810ec6abdfe" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "learning_vocabulary"`);
    }

}
