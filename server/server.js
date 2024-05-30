import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = new Database(path.join(__dirname, 'cars.db'), { verbose: console.log });

app.get('/cars', (req, res) => {
  const cars = db.prepare('SELECT * FROM cars').all();
  res.json(cars);
});

app.post('/cars/:id/smash', (req, res) => {
  const { id } = req.params;
  const result = db.prepare('UPDATE cars SET smash = smash + 1 WHERE id = ?').run(id);
  if (result.changes > 0) {
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, message: 'Car not found' });
  }
});

app.post('/cars/:id/pass', (req, res) => {
  const { id } = req.params;
  const result = db.prepare('UPDATE cars SET pass = pass + 1 WHERE id = ?').run(id);
  if (result.changes > 0) {
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, message: 'Car not found' });
  }
});

app.listen(port, () => {
  console.log(`NodeJS Express Server running at http://localhost:${port}`);
});