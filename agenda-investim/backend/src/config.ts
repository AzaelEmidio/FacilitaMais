import 'dotenv/config';
import { z } from 'zod';
export const env = z.object({ DATABASE_URL:z.string().url(), SESSION_SECRET:z.string().min(32), FRONTEND_ORIGIN:z.string().url(), PORT:z.coerce.number().int().positive().default(3000), NODE_ENV:z.enum(['development','test','production']).default('development') }).parse(process.env);
