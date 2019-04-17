// Update with your config settings.

const prodDbConnection = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/ir-school-reports.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    }
  },

  production: {
    client: 'pg',
    connection: prodDbConnection,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    }
  }

};
