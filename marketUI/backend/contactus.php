<?php
require 'connection.php';

$recFname =$_POST['fname'];
$recLname =$_POST['lname'];
$recEmail =$_POST['email'];
$recMessage=$_POST['message'];
echo $recFname;
echo $recLname;
echo $recEmail;
echo $recMessage;

$query="INSERT INTO `contact` (`fName`, `lName`, `eMail`, `message`) VALUES ( '$recFname', '$recLname', '$recEmail', '$recMessage')";

if(mysqli_query($conn,$query)){
 echo "Data has been inserted successfully";

 $fromAdd="escloar@lxs0671.uta.cloud";
 $to_email = "saalailavanya@gmail.com";
 $subject = "Admin Contact-Us Form";
 $body = "Hi ".$recFname.'\r\n'.$recMessage.'\r\n'."Regards,".'\r\n'."Escolar Team";
 $headers = "From:".$fromAdd;
 
 if (mail($to_email, $subject, $body, $headers)) {
     echo "Email successfully sent to $to_email...";
 } else {
     echo "Email sending failed...";
 }


}
else{
   echo "Error!";
}
?>