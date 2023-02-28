<?php
require "connection.php";

$recCreatedBy = $_POST['createdBy'];
$recPostContent = $_POST['content'];
$userId;

$sql = "SELECT userId from `registereduser` where `emailId` =  `{$recCreatedBy}`";
if($result=mysqli_query($conn,$sql)){
    if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
        $userId = $row['userId'];
    }
}

$query = "INSERT into posts values ('$userId','$recPostContent','$recCreatedBy')";
if($result=mysqli_query($conn,$query)){
    echo "User post has been stored successfully";
}

?>