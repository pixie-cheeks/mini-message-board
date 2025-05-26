import express from 'express';
import path from 'node:path';

const app = express();
const PORT = Number(process.env.PORT) || 3_000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const basePage = `http://${HOSTNAME}:${PORT}`;
const { dirname } = import.meta;
const assetsPath = path.join(dirname, 'public');

app.set('views', path.join(dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(assetsPath));

app.listen(PORT, HOSTNAME, () => {
  console.log(`Express app - listening on ${basePage}`);
});
