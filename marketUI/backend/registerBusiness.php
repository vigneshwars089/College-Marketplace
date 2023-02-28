<?php
require "connection.php";

$recCreatedBy = $_POST['createdBy'];
$recBusinessName = $_POST['businessName'];
$recBusinessCategory = $_POST['businessCategory'];

$sql = "INSERT into business (`businessName`, `category`, `requestedBy`, ) values ('$recBusinessName', '$recBusinessCategory', '$recCreatedBy')";
if($result=mysqli_query($conn,$sql)){
    echo "Business Added to the System - Approval Pending with school admin";
}

?>