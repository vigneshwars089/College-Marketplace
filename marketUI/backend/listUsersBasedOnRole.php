<?php
require "connection.php";

$recRole = "role1";
// $recRole = $_POST["role"];
$arr=[];
$sql="SELECT * from `registereduser` where role = '{$recRole}'";
if($result=mysqli_query($conn, $sql)){
    $count=0;
    while($row=mysqli_fetch_assoc($result))
    {
    $arr[$count]['firstName']=$row['firstName'];
    $arr[$count]['lastName']=$row['lastName'];
    $arr[$count]['emailId']=$row['emailId'];
    $arr[$count]['university']=$row['university'];
    $count++;
    }
    echo json_encode($arr);
    }
    else
    {
    http_response_code(404);
    }
?>