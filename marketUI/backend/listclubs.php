<?php
require 'connection.php';
$recFrom = $_GET['emailID'];

$arr=[];
$sql = "SELECT * FROM `clubs`";
if($result=mysqli_query($conn, $sql)){
$count=0;
while($row=mysqli_fetch_assoc($result))
{
$arr[$count]['clubName']=$row['clubName'];
$arr[$count]['clubActivity']=$row['clubActivity'];
$count++;
}
echo json_encode($arr);
}
else
{
http_response_code(404);
}

?>