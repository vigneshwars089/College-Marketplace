<?php
require "connection.php";

$arr=[];
$sql = "SELECT * FROM `posts` WHERE `isValid` = 1";
if($result=mysqli_query($conn, $sql)){
$count=0;
while($row=mysqli_fetch_assoc($result))
{
$arr[$count]['content']=$row['content'];
$row['createdBy'] = substr($row['createdBy'], 0, strpos($row['createdBy'], '@'));
$arr[$count]['createdBy']=$row['createdBy'];
$count++;
}
echo json_encode($arr);
}
else
{
http_response_code(404);
}

?>