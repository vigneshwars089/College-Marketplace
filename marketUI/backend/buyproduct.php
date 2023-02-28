<?php
require 'connection.php';

// $recProductName = "Casual Shirt";
// $recCreatedBy= "lavanyaN@gmail.com";

$recProductName =$_POST['productName'];
$recCreatedBy=$POST['createdBy'];

$sql = "SELECT productId FROM `products` WHERE `productName`='{$recProductName}'";
$productId;
if($result=mysqli_query($conn, $sql)) {
    if ($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result);
        echo $row["productId"];
        $productId = $row["productId"];
   }
}
   $query = "INSERT INTO `orders` (`productId`,`createdBy`) VALUES ( '$productId', '$recCreatedBy')";
   if(mysqli_query($conn,$query)){
    echo "<br>Order Inserted successfully";
   }

?>