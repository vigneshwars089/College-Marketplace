<?php
require "connection.php";

$recCreatedBy = $POST['postedBy'];
$recContent = $_POST['content'];

$sql = "UPDATE `posts` set `isValid` = 0 where `createdBy`={$recCreatedBy} and `content` = {$recContent}";
if($result=mysqli_query($conn, $sql)) {
    echo "Post removed successfully";
}
?>