<?php
include("../Model/dbc.php");
include("../Model/commen_functions.php");


$settings = new settings();





if (array_key_exists('loading_donnerdata', $_POST)) {

    $data = $settings->prepareSelectQueryForJSON("SELECT `fname`,`lname`,`phone`,`email`,`confirmation`,`nic_no` FROM `donner_details` order by `fname`");
}




if (array_key_exists("delete_donnerdata", $_POST)) {
    echo $settings->prepareCommandQueryForAlertify("DELETE FROM `donner_details` WHERE nic_no= '" . $_POST['id_for_delete']."';", "Successfully Deleted Donner Record", "Sorry could not be Delete data");
}




