import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as dotenv from 'dotenv';
import * as schema from '@shared/schema';

dotenv.config();

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL must be set in the .env file.");
// }

// Create pg pool
export const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_rZNzWEPmaD20@ep-floral-violet-a5xuyzeg.us-east-2.aws.neon.tech/neondb?sslmode=require',
});

// Create drizzle instance
export const db = drizzle(pool, { schema });
