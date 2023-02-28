<?php
require "connection.php";

$recBusinessName = $_POST['businessName'];
$recCreatedBy = $_POST['emailId'];
$recIsApproved = $_POST['isApproved'];
$recRole = $_POST['role'];

if($recRole == 'Business'){
    $sql = "UPDATE `business` set `isApproved`={$recIsApproved} where `businessName` = {$recBusinessName} and `requestedBy` = {$recCreatedBy}";
    if($result=mysqli_query($conn, $sql)) {
        echo "Business Approved";
    }
} else if ($recRole == 'SchoolAdmin'){
    $sql = "UPDATE `schooladmin` set `isApproved`={$recIsApproved} where `requestedBy` = {$recCreatedBy}";
    if($result=mysqli_query($conn, $sql)) {
        echo "SchoolAdmin Approved";
    }
}

?>