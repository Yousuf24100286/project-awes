import 'dotenv/config'
import type { Config } from 'drizzle-kit'
import dbConfig from './src/database/config'

const drizzleConfig = {
  schema: './src/database/schema.ts',
  out: './src/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbConfig.connectionString,
  },
  verbose: true,
  strict: true,
} satisfies Config
export default drizzleConfig