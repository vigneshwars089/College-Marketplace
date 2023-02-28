<?php
require 'connection.php';

$recEmail= $_POST['emaildId']; 
$recPassword= $_POST['password'];
$recUniversity= $_POST['university'];
$recRole= $_POST['role'];
$recFirstName = $_POST['firstName'];
$recLastName = $_POST['lastName'];


$query="INSERT INTO `registereduser` (`emailId`, `password`, `university`, `role`, `firstName`, `lastName`) VALUES ( '$recEmail', '$recPassword', '$recUniversity', '$recRole', '$recFirstName', '$recLastName')";

if(mysqli_query($conn,$query)){
 echo "<script>alert('Uaser has been registered successfully')</script>";
}
?>