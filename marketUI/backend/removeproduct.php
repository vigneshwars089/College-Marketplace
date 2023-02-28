<?php
require 'connection.php';

$recProductName =$_POST['productName'];
$recCreatedBy=$_POST['createdBy'];
$sql = "DELETE FROM `products` WHERE `productName`='{$recProductName}' AND `createdBy`='{$recCreatedBy}'";

if(mysqli_query($conn,$sql)){
    echo "<script>alert('Product has been Removed successfully')</script>";
   }
   
?>