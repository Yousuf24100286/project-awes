import pg from 'pg'
import { drizzle } from "drizzle-orm/node-postgres";
import dbConfig from './config'
import * as dbSchema from './schema'

const Database = (() => {
  let isConnected = false
  const client = new pg.Pool({
    connectionString: dbConfig.connectionString
  })

  const db = drizzle(client, {
    schema: dbSchema
  })

  const start = async () => {
    if (isConnected) return;
    await client.connect()
    isConnected = true
  }
  const stop = async () => {
    if (!isConnected) return;
    await client.end()
    isConnected = false
  }

  return {
    sql: db,
    start,
    stop
  }

})()

export default Database;