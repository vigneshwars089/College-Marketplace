<?php
require 'connection.php';

// $recProductName = "Casual Shirt";
// $recEmail='lavanyaN@gmail.com';
// $recFullName ="Lavs Srini";
// $recAddress='301 Gandhi street';
// $recState='Texas';
// $recCity='Dallas';
// $recZip=75051;
// $recNameOnCard='Lavanya Srinivasan';
// $recCreditCardNumber=1768765634529980;
// $recExpMonth=10;
// $recExpYear=2027;
// $recCvv=687;
// $recCreatedBy="lavanyaN@gmail.com";

$recProductName = $_POST['productName'];
$recEmail= $_POST['emailId'];
$recFullName =$_POST['fullName'];
$recAddress=$_POST['address'];
$recState=$_POST['state'];
$recCity=$_POST['city'];
$recZip=$_POST['zip'];
$recNameOnCard=$_POST['nameOnCard'];
$recCreditCardNumber=$_POST['creditCardNumber'];
$recExpMonth=$_POST['expMonth'];
$recExpYear=$_POST['expYear'];
$recCvv=$_POST['cvv'];
$recCreatedBy= $_POST['emailId'];

$sql = "SELECT productId FROM `products` WHERE `productName`='{$recProductName}'";
$productId;
$orderId;
if($result=mysqli_query($conn, $sql)) {
    if ($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result);
        echo "product: ";
        echo $row["productId"];
        $productId = $row["productId"];
   }
}
   $sql2 = "SELECT orderId FROM `orders` WHERE `productId`='{$productId}' and `createdBy`='{$recCreatedBy}'";
   if($result2=mysqli_query($conn, $sql2)) {
    if ($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result2);
        $orderId = $row["orderId"];
        echo " order: ";
        echo $orderId;
    }
   }
   $query = "INSERT INTO `payments` (`orderId`,`fullName`,`emailId`,`address`,`city`,`state`,`zip`,`nameOnCard`,`creditCard`,`expMonth`,`expYear`,`cvv`,`createdBy`)
             VALUES ( '$orderId', '$recFullName','$recEmail','$recAddress','$recCity','$recState','$recZip','$recNameOnCard','$recCreditCardNumber','$recExpMonth','$recExpYear','$recCvv','$recCreatedBy')";
   
   if(mysqli_query($conn,$query)){
       echo "<br>Payment Information Inserted successfully";
   }

?>