/*
    ignore this file, only for pass json data to sqlite bd.
*/

import fs from 'fs';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta al archivo JSON
const carsFilePath = path.join(__dirname, 'cars.json');

// Leer el archivo JSON
const carsData = JSON.parse(fs.readFileSync(carsFilePath, 'utf-8'));

// Crear una nueva base de datos SQLite
const db = new Database(path.join(__dirname, 'cars.db'), { verbose: console.log });

// Crear la tabla 'cars' con las nuevas columnas
db.exec(`
  CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY,
    brand TEXT,
    model TEXT,
    year INTEGER,
    country TEXT,
    smash INTEGER DEFAULT 0,
    pass INTEGER DEFAULT 0
  )
`);

// Insertar los datos del JSON en la tabla
const insert = db.prepare('INSERT INTO cars (id, brand, model, year, country, smash, pass) VALUES (?, ?, ?, ?, ?, ?, ?)');

const insertMany = db.transaction((cars) => {
  for (const car of cars) {
    insert.run(car.id, car.brand, car.model, car.year, car.country, 0, 0);
  }
});

insertMany(carsData);

console.log('Datos insertados correctamente');

db.close();