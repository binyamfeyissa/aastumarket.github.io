<?php
// Function to sanitize input

function sanitizeInput($input) {
    return htmlspecialchars(stripslashes(trim($input)));
}

// Function to validate email format
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to validate password format (minimum 8 characters)
function validatePassword($password) {
    return preg_match('/^.{8,}$/', $password);
}
?>

