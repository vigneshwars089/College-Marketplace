<?php
require 'connection.php';

$recEmail=$_POST['emailid'];
$recPwd=$_POST['password'];
// $recEmail='lavanyaN@gmail.com';
// $recPwd='nLavan1604';
session_start();
$_SESSION['emailID'] = $recEmail;

$sql = "SELECT * FROM `registereduser` WHERE `emailId`='{$recEmail}' AND `password`='{$recPwd}'";
if($result=mysqli_query($conn, $sql)){

if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
        //echo $row;
        $json=json_encode($row);
        echo $json;
		//session_start();
		//$_SESSION['emailID'] = $recEmail;
		//echo "views = " . $_SESSION['emailID']; 
	} else {
		echo "<script>alert('Woops! Email or Password is Wrong.')</script>";
	}
}

?>
