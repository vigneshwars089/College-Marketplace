<?php
require "connection.php";

$recClubName = $_POST['club'];
$recCreatedBy=$POST['emailId'];
$clubId;
$userId;

$sql = "SELECT clubId from `clubs` where clubs.clubName =  `{$recClubName}`";
if($result=mysqli_query($conn,$sql)){
    if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
        $clubId = $row['clubId'];
    }
}

$sql2 = "SELECT userId from `registereduser` where `emailId` =  `{$recCreatedBy}`";
if($result=mysqli_query($conn,$sql2)){
    if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
        $userId = $row['userId'];
    }
}

$query = "INSERT into `user_club` values ('{$userId}', '{$clubId}')";
if($result=mysqli_query($conn, $query)){
    echo "Joined the club successfully";
}

?>