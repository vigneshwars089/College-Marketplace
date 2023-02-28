<?php
require "connection.php";

$arr=[];
$sql = "SELECT usr.firstName as fname, usr.lastName as lname, usr.emailId as emailId, bsn.businessName as bname, bsn.category as category
        from business bsn join registereduser usr on bsn.userId = usr.userId and bsn.isValid = 1 and bsn.isApproved = 1";

if($result=mysqli_query($conn, $sql)){
    $count=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $arr[$count]['firstName']=$row['fname'];
        $arr[$count]['lastName']=$row['lname'];
        $arr[$count]['emailId']=$row['emailId'];
        $arr[$count]['businessName']=$row['bname'];
        $arr[$count]['category']=$row['category'];
        $count++;
    }
    echo json_encode($arr);
}
else
{
    http_response_code(404);
}
?>