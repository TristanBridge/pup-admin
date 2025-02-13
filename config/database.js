module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        // host: env('DATABASE_HOST', '127.0.0.1'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        /* database: env('DATABASE_NAME', 'pup'),
        username: env('DATABASE_USERNAME', 'pup'),
        password: env('DATABASE_PASSWORD'), */
        database: env('DATABASE_NAME', 'demodb'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'admin'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
