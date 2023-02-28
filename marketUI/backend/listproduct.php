<?php
require 'connection.php';

$recCreatedBy=$_GET['createdBy'];
$recRole=$_GET['role'];

$arr=[];
$sql = "SELECT * FROM `products` WHERE `createdBy`='{$recCreatedBy}' AND `role`='{$recRole}'";
if($result=mysqli_query($conn, $sql)){
$count=0;
while($row=mysqli_fetch_assoc($result))
{
$arr[$count]['productName']=$row['productName'];
$arr[$count]['productDesc']=$row['productDesc'];
$arr[$count]['category']=$row['category'];
$arr[$count]['price']=$row['price'];
$arr[$count]['email']=$row['createdBy'];
$count++;
}
echo json_encode($arr);
}
else
{
http_response_code(404);
}

?>