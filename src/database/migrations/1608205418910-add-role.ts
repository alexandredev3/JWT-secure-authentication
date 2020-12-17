import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class createRefreshToken1608125914995 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("users", new TableColumn({
      name: "role",
      type: "varchar"
    }))
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "role")
  }
  
}
