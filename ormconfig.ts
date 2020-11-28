const dotenv = require('dotenv').config()

module.exports = {
  type: 'mysql',
  host: process.env.HOST,
  port: 3306,
  username: process.env.NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  entities: ['src/entity/*.ts'],
  subscribers: ['src/subscriber/*.js'],
  migrations: ['src/migration/*.js'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
}
