<?php
// Database configuration
$host = "localhost"; // MySQL server host (usually "localhost")
$username = "root"; // MySQL username
$password = ""; // MySQL password
$database = "aastumarket"; // MySQL database name

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optionally, you can set charset and other configurations here

?>
