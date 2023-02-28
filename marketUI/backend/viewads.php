<?php
require "connection.php";

$arr=[];
$sql = "SELECT prd.category as category, prd.productDesc as product, adv.discount as discount from products prd JOIN advertisement adv WHERE adv.productId = prd.productId and adv.isValid = 1";

if($result=mysqli_query($conn, $sql)){
    $count=0;
    while($row=mysqli_fetch_assoc($result))
    {
    $arr[$count]['category']=$row['category'];
    $arr[$count]['product']=$row['product'];
    $arr[$count]['discount']=$row['discount'];
    $count++;
    }
    echo json_encode($arr);
    }
    else
    {
    http_response_code(404);
    }
    
?>