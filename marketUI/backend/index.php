<?php
require 'connection.php';

$recEmail='lavanyaN@gmail.com'; 
$recPassword='';
$recRePassword='';
$recUniversity='';
$recRole='';


$query="INSERT INTO `registereduser` (`emailId`, `password`, `university`, `role`) VALUES ( '$recEmail', '$recPassword', '$recUniversity', '$recRole')";

if(mysqli_query($conn,$query)){
 echo "<script>alert('Uaser has been registered successfully')</script>";
}
?>