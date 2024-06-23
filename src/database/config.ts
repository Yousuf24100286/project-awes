import dotenv from 'dotenv';
dotenv.config();

const dbConfig = (() => {
  const connectionString = process.env.DATABASE_URL ? process.env.DATABASE_URL : (() => { throw new Error('DATABASE_URL environment variable not set!') })()
  const schemaName = 'awes_schema';
  return {
    connectionString,
    schemaName
  }
})()

export default dbConfig;