module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/data/budget.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './api/data/migrations'
    },
    seeds: {
      directory: './api/data/seeds'
    }
  },
};