<?php

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');

/*
*   --- --- --- --- ---
*   Este archivo solo es para añadir los coches mas 'facil'.
*   Se puede mejorar pero por ahora me sirve.
*   --- --- --- --- ---
*/

// Nombre del archivo de la base de datos
$dbFile = 'cars.db';

// Conexión a la base de datos
try {
    $db = new PDO('sqlite:' . $dbFile);
} catch (PDOException $e) {
    die('Error: ' . $e->getMessage());
}

// Comprobamos si se han enviado datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recogemos los datos del formulario
    $brand = $_POST['brand'];
    $model = $_POST['model'];
    $year = $_POST['year'];
    $country = $_POST['country'];
    $power = $_POST['power'];
    $moreInfo = $_POST['moreInfo'];

    // Insertamos los datos en la base de datos
    $stmt = $db->prepare('INSERT INTO cars (brand, model, year, country, power, moreinfo, smash, pass) VALUES (?, ?, ?, ?, ?, ?, 0, 0)');
    $stmt->execute([$brand, $model, $year, $country, $power, $moreInfo]);

    echo "<pre>";
    var_dump($_POST);
    echo "</pre>";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Car</title>
</head>
<body>

<h1>Add Car</h1>

<p>PD: add the car image manually to public/cars_img/*id*.webp (id from db)</p>

<p>PD2: the folder server and addcars.php need to have write permissions on other users (server access)</p>

<form method="post">
    <label for="brand">Brand:</label>
    <input type="text" id="brand" name="brand" required><br><br>

    <label for="model">Model:</label>
    <input type="text" id="model" name="model" required><br><br>

    <label for="year">Year:</label>
    <input type="number" id="year" name="year" required><br><br>

    <label for="country">Country:</label>
    <input type="text" id="country" name="country" required><br><br>

    <label for="power">Power:</label>
    <input type="number" id="power" name="power" required><br><br>

    <label for="moreInfo">More Info (Forza Wiki car link):</label><br>
    <textarea id="moreInfo" name="moreInfo" rows="4" cols="50"></textarea><br><br>

    <input type="submit" value="Submit">
</form>

</body>
</html>