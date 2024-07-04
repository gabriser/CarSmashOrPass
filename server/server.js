import express from 'express';
import cors from 'cors';
//import { Pool } from 'pg'; // Error pg: commonjs package
import pg from 'pg';
const { Pool } = pg;
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT || 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

// Serve static files from the cars_img directory
app.use('/cars_img', express.static(path.join(__dirname, 'cars_img')));

// Middleware for catch errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Get all cars (ordered by new cars on top)
app.get('/cars', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ success: false, message: 'Error fetching cars' });
  }
});

// Get all cars ordered by brand year and model
app.get('/cars/ordered', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars ORDER BY brand, year, model');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching ordered cars:', error);
    res.status(500).json({ success: false, message: 'Error fetching ordered cars' });
  }
});

// Get most smashed cars
app.get('/cars/mostsmashed', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars ORDER BY smash DESC, id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching most smashed cars:', error);
    res.status(500).json({ success: false, message: 'Error fetching most smashed cars' });
  }
});

// Get most passed cars
app.get('/cars/mostpassed', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars ORDER BY pass DESC, id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching most passed cars:', error);
    res.status(500).json({ success: false, message: 'Error fetching most passed cars' });
  }
});

// Update smash count
app.post('/cars/:id/smash', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('UPDATE cars SET smash = smash + 1 WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount > 0) {
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'Car not found' });
    }
  } catch (error) {
    console.error('Error updating smash count:', error);
    res.status(500).json({ success: false, message: 'Error updating smash count' });
  }
});

// Update pass count
app.post('/cars/:id/pass', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('UPDATE cars SET pass = pass + 1 WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount > 0) {
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'Car not found' });
    }
  } catch (error) {
    console.error('Error updating pass count:', error);
    res.status(500).json({ success: false, message: 'Error updating pass count' });
  }
});

app.listen(port, () => {
  console.log(`NodeJS Express Server running at http://localhost:${port}`);
});