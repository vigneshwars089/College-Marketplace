<?php
require "connection.php";

$recProductName = $_POST["productName"];
// $recCategory = $_POST["category"];

$sql = "SELECT productId FROM `products` WHERE `productName`='{$recProductName}'";
$productId;
if($result=mysqli_query($conn, $sql)) {
    if ($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result);
        echo $row["productId"];
        $productId = $row["productId"];
   }
}

$query = "UPDATE `advertisement` set `isValid` = 0 where `productId` ='{$productId}'";
if($result=mysqli_query($conn, $sql)) {
    echo "Advertisment removed successfully";
}
?> 