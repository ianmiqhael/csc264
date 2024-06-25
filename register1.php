<?php
/* include db connection file */
include("dbconn.php");
if (isset($_POST['submit'])) {
    /* capture values from HTML form */

    $name = $_POST['name'];
    $password = $_POST['password'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $username = $_POST['username'];

    $sql0 = "SELECT email FROM customer WHERE 		email= '$email'";
    $query0 = mysqli_query($dbconn, $sql0) or die("Error: " .              mysqli_error($dbconn));
    $row0 = mysqli_num_rows($query0);
    if ($row0 != 0) {
        echo "Record is existed";
    } else {
        /* execute SQL INSERT command */
        $sql2 = "INSERT INTO customer (name, password, address, email, username) 
         VALUES ('$name', '$password', '$address', '$email', '$username')";
        mysqli_query($dbconn, $sql2) or die("Error: " .     mysqli_error($dbconn));
        /* display a message */
        echo "Data has been saved";
    }
} // close if isset()
/* close db connection */
mysqli_close($dbconn);