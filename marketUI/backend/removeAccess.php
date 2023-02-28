<?php
require "connection.php";

$recCreatedBy = $_POST['createdBy'];
$recBusinessName = $_POST['businessName'];
$recRole = $_POST['role'];

if($recRole == 'Business'){
    $sql = "UPDATE `business` SET `isValid`= 0 WHERE `businessName`='$recBusinessName' AND `requestedBy`='$recCreatedBy'";
    if($result=mysqli_query($conn,$sql)){
        echo "Deleted Business sucessfully";
    }
} else if ($recRole == 'SchoolAdmin'){
    $sql = "UPDATE `business` SET `isValid`= 0 WHERE `requestedBy`='$recCreatedBy'";
    if($result=mysqli_query($conn,$sql)){
        echo "Deleted Business sucessfully";
    }
}

?>