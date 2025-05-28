#!/usr/bin/env node
import { configDotenv } from 'dotenv';
import fs from 'node:fs';
import { Client } from 'pg';
import path from 'node:path';

const { dirname } = import.meta;
const parameter = process.argv.at(2);
const isProduction = parameter === '-p' || parameter === '--production';
const configPath = path.resolve(
  dirname,
  `../../.env${isProduction ? '.production' : ''}`,
);

if (!fs.existsSync(configPath))
  throw new Error(`Environment config file (${configPath}) doesn't exist.`);

configDotenv({
  path: configPath,
});

const getConfig = () =>
  isProduction
    ? {
        ssl: {
          rejectUnauthorized: true,
          ca: process.env.DB_SSL_CA,
        },
      }
    : {};

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "user" TEXT,
  text TEXT,
  added TIMESTAMPtz default CURRENT_TIMESTAMP
);

INSERT INTO messages ("user", text) 
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!');
`;

console.log('seeding...');
const client = new Client(getConfig());
await client.connect();
await client.query(SQL);
await client.end();
console.log('done');
