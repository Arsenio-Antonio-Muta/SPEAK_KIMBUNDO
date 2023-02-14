import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationsLearningVocabularyUser1672666012545 implements MigrationInterface {
    name = 'RelationsLearningVocabularyUser1672666012545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "learning_vocabulary" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "learning_vocabulary" ADD CONSTRAINT "FK_829550b6558f11c4e6e80039b25" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "learning_vocabulary" DROP CONSTRAINT "FK_829550b6558f11c4e6e80039b25"`);
        await queryRunner.query(`ALTER TABLE "learning_vocabulary" DROP COLUMN "userId"`);
    }

}
