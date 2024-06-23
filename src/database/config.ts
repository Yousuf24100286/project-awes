import dotenv from 'dotenv';
dotenv.config();

const dbConfig = (() => {
  const env = process.env.NODE_ENV ? process.env.NODE_ENV : (() => { throw new Error('NODE_ENV environment variable not set!') })()
  const connectionString = process.env.DATABASE_URL ? process.env.DATABASE_URL : (() => { throw new Error('DATABASE_URL environment variable not set!') })()
  const schemaName = (() => {
    switch (env) {
      case 'development':
        return 'awes-dev';
        break;
      case 'test':
        return 'awes-test';
        break;
      case 'production':
        return 'awes';
        break;
      default:
        throw new Error('Invalid NODE_ENV! Please set the NODE_ENV environment variable to either "development", "test", or "production"!');
    }
  })()

  return {
    connectionString,
    schemaName
  }
})()

export default dbConfig;