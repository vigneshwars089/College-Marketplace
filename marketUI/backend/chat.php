<?php
require "connection.php";

$recMessage = $_POST['message'];
$recFrom = $_POST['from'];
$recTo = $_POST['to'];

$query = "INSERT into `chat` (`sentBy`, `sentTo`, `message`) values ('$recFrom', '$recTo', '$recMessage')";
if($result=mysqli_query($conn, $query)){
    echo "Chat Conversation Saved";
}
?>