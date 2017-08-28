var { join } = require('path')
// Update with your config settings.

module.exports = {
  migrations: {
    directory: join(__dirname, 'migrations')
  },
  seeds: {
    directory: join(__dirname, 'seeds')
  },

  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL
  },

  test: {
    client: 'postgres',
    connection: process.env.DATABASE_URL
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
}
