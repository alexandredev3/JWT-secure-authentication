import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1608080304943 implements MigrationInterface {
	
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "users",
			columns: [
				{
					name: "id",
					type: "integer",
					isPrimary: true,
					isGenerated: true,
					generationStrategy: "increment",
				},
				{
					name: "name",
					type: "varchar"
				},
				{
					name: "email",
					type: "varchar",
					isUnique: true
				},
				{
					name: "password",
					type: "varchar"
				},
				{
					name: "createdAt",
					type: "timestamp",
					default: "now()"
				},
				{
					name: "updatedAt",
					type: "timestamp",
					default: "now()"
				}
			]
		}))
	}
	
	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("users");
	}
	
}
