<?php
session_start();
require '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = intval($_POST['id']);
    
    // Prepare a statement for deleting the product
    $stmt = $conn->prepare("DELETE FROM products WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        header('Location: admin_dashboard.php'); // Redirect back to the product list
        exit;
    } else {
        echo "Error deleting product: " . $conn->error;
    }
}
?>
