import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TableMeaning1672288092925 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "meaning",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "meaning",
            type: "varchar"
          },
          {
            name: "created_At",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_At",
            type: "timestamp",
            default: "now()"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("meaning")
  }

}
