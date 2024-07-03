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

// Layouts por defecto
$arrLayout = array("FE FWD", "FE RWD", "FE AWD", "ME FWD", "ME RWD", "ME AWD", "RE FWD", "RE RWD", "RE AWD");
$layoutOption = "";
foreach ($arrLayout as $value) {
    $layoutOption .= "<option value=\"$value\">$value</option>\n";
}

// Comprobamos si se han enviado datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recogemos los datos del formulario
    $brand = $_POST['brand'];
    $model = $_POST['model'];
    $year = $_POST['year'];
    $country = $_POST['country'];
    $engine = $_POST['engine'];
    $power = $_POST['power'];
    $layout = $_POST['layout'];
    $transmission = $_POST['transmission'];
    $weight = $_POST['weight'];
    $moreInfo = $_POST['moreInfo'];

    // Insertamos los datos en la base de datos
    $stmt = $db->prepare('INSERT INTO cars (brand, model, year, country, engine, power, layout, transmission, weight, moreinfo, smash, pass) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0)');
    $stmt->execute([$brand, $model, $year, $country, $engine, $power, $layout, $transmission, $weight, $moreInfo]);

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
    <style>
        input {
            width: 200px;
        }
    </style>
</head>
<body>

<h1>Add Car</h1>

<p>PD: add the car image manually to server/cars_img/*id*.webp (id from db)</p>

<p>PD2: the folder server and addcars.php need to have write permissions on other users (server access)</p>

<form method="post">
    <label for="brand">Brand:</label>
    <input type="text" id="brand" name="brand" placeholder="ex: 'Honda'" required><br><br>

    <label for="model">Model:</label>
    <input type="text" id="model" name="model" placeholder="ex: 'Civic Type R'" required><br><br>

    <label for="year">Year:</label>
    <input type="number" id="year" name="year" placeholder="ex: '1997'" required><br><br>

    <label for="country">Country:</label>
    <input type="text" id="country" name="country" placeholder="ex: 'Japan'" required><br><br>

    <label for="engine">Engine:</label>
    <input type="text" id="engine" name="engine" placeholder="ex: '1.6L Naturally-Aspirated I4'" required><br><br>

    <label for="power">Power:</label>
    <input type="number" id="power" name="power" placeholder="ex: '182' bhp" required><br><br>

    <label for="layout">Layout:</label>
    <select name="layout" id="layout" required>
        <?php echo $layoutOption; ?>
    </select><br><br>

    <label for="transmission">Transmission:</label>
    <input type="number" id="transmission" name="transmission" placeholder="ex: '5' speed" required><br><br>

    <label for="weight">Weight:</label>
    <input type="number" id="weight" name="weight" placeholder="ex: '1090' kg" required><br><br>

    <label for="moreInfo">More Info (Forza Wiki car link):</label><br>
    <textarea id="moreInfo" name="moreInfo" rows="4" cols="50" 
    placeholder="ex: 'https://forza.fandom.com/wiki/Honda_Civic_Type_R_(1997)'" required></textarea><br><br>

    <input type="submit" value="Submit">
</form>

</body>
</html>
