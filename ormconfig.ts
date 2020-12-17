import { TYPEORM_TYPE } from './src/utils/environment'

module.exports = {
  type: TYPEORM_TYPE,
  database: './src/database/database.sqlite',
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/entities/*.ts"],
  logging: true,
  // cli: {
  //   migrationsDir: "./src/database/migrations"
  // }
}