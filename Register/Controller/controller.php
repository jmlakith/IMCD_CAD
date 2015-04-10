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



if (array_key_exists('loading_donnerdata', $_POST)) {

    $data = $settings->prepareSelectQueryForJSON("SELECT `fname`,`lname`,`phone`,`email`,`confirmation`,`nic_no` FROM `donner_details` order by `fname`");
}



if (array_key_exists("delete_donnerdata", $_POST)) {
    echo $settings->prepareCommandQueryForAlertify("DELETE FROM `donner_details` WHERE nic_no= '" . $_POST['id_for_delete']."';", "Successfully Deleted Donner Record", "Sorry could not be Delete data");
}



if (array_key_exists('loading_donnerdata_approved', $_POST)) {

    $data = $settings->prepareSelectQueryForJSON("SELECT `fname`,`lname`,`phone`,`email`,`city`,`confirmation`,`nic_no` FROM `donner_details`where confirmation='false' order by `fname`");
}


if (array_key_exists('get_donner_data', $_POST)) {
    $data = $settings->prepareSelectQueryForJSON("SELECT `fname`,`lname`,`nic_no`,`phone`,`email`,`confirmation`,`package`,`student_id`,`bank_slip` FROM `donner_details` WHERE `nic_no`= '{$_POST['clinicID']}';");
}


if (array_key_exists("update_donnerdetails", $_POST)) {

    $sql = "UPDATE `donner_details` SET `package`='" . $_POST['package'] . "', `student_id`='" . $_POST['student_id']. "' WHERE `nic_no`='" . $_POST['hide_id_up'] . "';";
    $update = mysql_query($sql);

    if ($update) {
        echo json_encode(array("msgType" => 1, "msg" => "Successfully Assigned a Student"));
    } else {
        echo json_encode(array("msgType" => 2, "msg" => "Sorry ! Could not be Update your Data"));
    }
}