import { 
  serial,
  varchar,
  pgSchema,
  PgSchema
} from "drizzle-orm/pg-core";
import config from "./config";

export const schema: PgSchema = pgSchema(config.schemaName)

export const users = schema.table("users", {
  id: serial("id").primaryKey().unique().notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
})