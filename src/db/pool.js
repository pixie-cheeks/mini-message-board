import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool();

export { pool };
