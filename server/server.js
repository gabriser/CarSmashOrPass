import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ensure the /tmp directory exists
// WARNING: Vercel testing (every new deploy resets the smash and pass count)
const tmpDir = '/tmp';
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir);
}

// Copy the database to /tmp if it does not exist there
const dbPath = path.join(__dirname, 'cars.db');
const tmpDbPath = path.join(tmpDir, 'cars.db');

if (!fs.existsSync(tmpDbPath)) {
  fs.copyFileSync(dbPath, tmpDbPath);
}

//const db = new Database(path.join(__dirname, 'cars.db'), { verbose: console.log });
const db = new Database(tmpDbPath, { verbose: console.log }); // Vercel tmp db

// serve static files from the cars_img directory
app.use('/cars_img', express.static(path.join(__dirname, 'cars_img')));

// get all cars
app.get('/cars', (req, res) => {
  const cars = db.prepare('SELECT * FROM cars').all();
  res.json(cars);
});

// get all cars orded by: 1. brand (ex: Honda), 2. year (ex: 1997), 3. model (ex: Civic Type R)
app.get('/cars/ordered', (req, res) => {
  const cars = db.prepare('SELECT * FROM cars ORDER BY brand, year, model').all();
  res.json(cars);
});

// get all cars most smashed
app.get('/cars/mostsmashed', (req, res) => {
  const cars = db.prepare('SELECT * FROM cars ORDER BY smash DESC').all();
  res.json(cars);
});

// get all cars most passed
app.get('/cars/mostpassed', (req, res) => {
  const cars = db.prepare('SELECT * FROM cars ORDER BY pass DESC').all();
  res.json(cars);
});

// update +1 smash car id
app.post('/cars/:id/smash', (req, res) => {
  const { id } = req.params;
  try {
    const result = db.prepare('UPDATE cars SET smash = smash + 1 WHERE id = ?').run(id);
    if (result.changes > 0) {
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'Car not found' });
    }
  } catch (error) {
    console.error('Error 500 updating smash count:', error);
    res.status(500).json({ success: false, message: '500 Internal server error' });
  }
});

// update +1 pass car id
app.post('/cars/:id/pass', (req, res) => {
  const { id } = req.params;
  try {
    const result = db.prepare('UPDATE cars SET pass = pass + 1 WHERE id = ?').run(id);
    if (result.changes > 0) {
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'Car not found' });
    }
  } catch (error) {
    console.error('Error 500 updating pass count:', error);
    res.status(500).json({ success: false, message: '500 Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`NodeJS Express Server running at http://localhost:${port}`);
});