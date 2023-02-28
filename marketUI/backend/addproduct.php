<?php
require 'connection.php';

// $recProductName = "Casual Shirt";
// $recProductDesc = "Short-Sleeved Shirt - Casual";
// $recPrice = 25;
// $recCategory= "Shirt";
// $recCreatedBy="lavanyaN@gmail.com";
// $recRole="Student";

$recProductName =$_POST['productName'];
$recProductDesc =$_POST['productDesc'];
$recPrice =$_POST['price'];
$recCategory=$_POST['category'];
$recCreatedBy=$_POST['createdBy'];
$recRole=$_POST['role'];

$query="INSERT INTO `products` (`productName`, `productDesc`, `category`, `price`,`createdBy`,`role`) VALUES ( '$recProductName', '$recProductDesc', '$recCategory', '$recPrice','$recCreatedBy','$recRole')";

if(mysqli_query($conn,$query)){
 echo "<script>alert('Product has been added successfully')</script>";
}

?>