#!/usr/bin/env node
import { Client } from 'pg';
import 'dotenv/config';

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
const client = new Client();
await client.connect();
await client.query(SQL);
await client.end();
console.log('done');
