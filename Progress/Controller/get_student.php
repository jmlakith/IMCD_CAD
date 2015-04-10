<?php
require_once '../Model/student.php';
$q = strtolower($_GET["q"]);
if (!$q) return;
$obj=new Student();
$rsd=$obj->searchStudent($q);
while($rs = mysql_fetch_array($rsd)) {
	$cname = $rs['studentName'];
	echo "$cname\n";
}
    
?>
 