require('dotenv')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.BDDATABASE,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
