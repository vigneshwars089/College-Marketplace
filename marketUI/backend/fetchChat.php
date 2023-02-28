<?php
require "connection.php";

// $recFrom = $_POST['from'];
// $recTo = $_POST['to'];

$recFrom = 'mine@gmail.com';
$recTo = 'lavanya';
$query = "SELECT * from `chat` WHERE `sentBy`='{$recFrom}' and `sentTo`= '{$recTo}' ";
if($result=mysqli_query($conn, $query)){
    echo "Chat Conversation Saved";
}
?>