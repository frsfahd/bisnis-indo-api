// import Pool from 'pg';
import postgresql from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const { Pool } = postgresql;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

export { pool };
