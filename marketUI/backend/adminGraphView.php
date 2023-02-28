<?php
require 'connection.php';

$tab=[];
$sql="SELECT category, COUNT(productName) count FROM products GROUP BY category";

if($result=mysqli_query($conn,$sql))
{
$cr=0;
while($row=mysqli_fetch_assoc($result))
{
$tab[$cr]['category']=$row['category'];
$tab[$cr]['count']=$row['count'];
$cr++;
}
echo json_encode($tab);
}
else
{
http_response_code(404);
}

?>