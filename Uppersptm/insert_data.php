<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "elptm";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$address_line_1 = $_POST['address_line_1'];
$address_line_2 = $_POST['address_line_2'];
$city = $_POST['city'];
$country = $_POST['country'];
$postcode = $_POST['postcode'];

// Consulta SQL para insertar los datos
$sql = "INSERT INTO informs (address_line_1, address_line_2, city, country, postcode) 
        VALUES ('$address_line_1', '$address_line_2', '$city', '$country', '$postcode')";

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
