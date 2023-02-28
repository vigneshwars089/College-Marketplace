<?php

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'UTF-8';

$mail->Host       = "smtp.gmail.com"; // SMTP server example
$mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->Port       = 25;                    // set the SMTP port for the GMAIL server
$mail->Username   = "anyalav26@gmail.com"; // SMTP account username example
$mail->Password   = "admin1234";

$to = 'saalailavanya@gmail.com';
$subject = 'Hello, Registered Successfully';
$message = "Username: and Password: . Please note it";
mail($to, $subject, $message);

?>