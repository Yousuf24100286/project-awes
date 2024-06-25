import pg from 'pg'
import { drizzle } from "drizzle-orm/node-postgres";
import dbConfig from './config'
import * as schema from './schema'

let isConnected = false
const client = new pg.Pool({
  connectionString: dbConfig.connectionString
})
const sql = drizzle(client, {
  schema: schema
})

const db = (function () {
  let promise: Promise<pg.PoolClient> | undefined = client.connect() ;

  const start = () => {
    promise = client.connect()
  }

  const stop = () => {
    client.end().then(() => promise = undefined)
  }

  return {
    start,
    stop,
    promise
  }
})()

export default db;
export { 
  schema,
  sql
};