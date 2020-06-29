module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [process.env.ENTITIES_DIR],
  migrations: [process.env.MIGRATIONS_DIR],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};

// postgres://rnhrkiynhpulwt:12c09aaeab3f607335dc8718a141e6e48b89fe1f6fbd94d890fb90adb5dcf7eb@ec2-3-211-48-92.compute-1.amazonaws.com:5432/daiegn0rpvbpa
