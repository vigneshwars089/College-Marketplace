<?php
require 'connection.php';

$recClubName =$_POST['clubName'];
$recCreatedBy =$_POST['createdBy'];

$query = "SELECT userClubId from user_club where userId in (select userId from registereduser where emailId='{$recCreatedBy}') and clubId in (select clubId from clubs where clubName = '{$recClubName}')";
$userClubId;

if($result=mysqli_query($conn, $query)){
    if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
        $userClubId = $row['userClubId'];
    }
}
$sql = "DELETE FROM `user_club` WHERE `userClubId`='{$userClubId}'";

if(mysqli_query($conn,$sql)){
    echo "<script>alert('User left the club successfully')</script>";
   }
   
?>