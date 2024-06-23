import path from 'path';
import { migrate  } from "drizzle-orm/node-postgres/migrator";
import Database from ".";


(async () => {
  await Database.start();

  const migrationFolder = path.join(__dirname, '..', '..', 'migrations');
  console.log('migrationFolder', migrationFolder);
  await migrate(Database.sql, {
    migrationsFolder: migrationFolder,
  }).then(() => {
    console.log('Migration done');
  }).catch((err) => {
    console.error('Migration failed', err);
  }).finally(() => {
    Database.stop();
  });
})().then(() => {
  console.log('Migration Script Complete');
}).catch((err) => {
  console.error('Migration Script Failed', err);
}).finally(() => {
  process.exit();
})
