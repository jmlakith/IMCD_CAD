<?php

include("../Model/dbc.php");
include("../Model/commen_functions.php");
$settings = new settings();





if (array_key_exists('save_register', $_POST)) {


    $sql = "INSERT INTO `donner_details`(`fname`, `lname`, `nic_no`, `gender`, `phone`, `country`, `address`, `city`, `state`, `zip`, `email`, `password`, `re_password`) VALUES ('{$_POST['fname']}', '{$_POST['lname']}', '{$_POST['nic']}', '{$_POST['gender']}', '{$_POST['pnumber']}', '{$_POST['country']}', '{$_POST['address']}', '{$_POST['city']}','{$_POST['state']}', '{$_POST['zip']}', '{$_POST['email']}', '{$_POST['password']}', '{$_POST['re_password']}');";

    $data = mysql_query($sql);

    if ($data) {
        echo json_encode(array("msgType" => 1, "msg" => "Your Details Saved !"));
    } else {
        echo json_encode(array("msgType" => 2, "msg" => "Sorry ! Could not be Saved your Data"));
    }
}





