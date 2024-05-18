<?php
session_start();
require '../db.php';

// Fetch all products
$sql = "SELECT * FROM products";
$result = $conn->query($sql);
?>


