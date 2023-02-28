<?php
require "connection.php";

// $recProductName = $_POST["productName"];
// $recCategory = $_POST["category"];
// $recDiscount = $_POST["discount"];
// $recPostedBy = $_POST["postedBy"];

$recProductName = "Casual Shirt";
$recCategory = "Shirt";
$recDiscount = "Flat 20%";
$recPostedBy = "lavanyaN@gmail.com";

$sql = "SELECT productId FROM `products` WHERE `productName`='{$recProductName}' and `category`='{$recCategory}'";
$productId;
if($result=mysqli_query($conn, $sql)) {
    if ($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result);
        echo $row["productId"];
        $productId = $row["productId"];
   }
}
$query = "INSERT into `advertisement` (`productId`, `discount`, `postedBy`) values ('$productId', '$recDiscount', '$recPostedBy')";
if($result=mysqli_query($conn, $query)){
    echo "Advertisment Added Successfully";
}
?>