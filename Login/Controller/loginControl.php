<?php
session_start();

include '../Model/dbc.php';



if (array_key_exists('login', $_POST)) {


    $uname = $_POST['uname'];
    $pword = sha1($_POST['pword']);

    $row = mysql_query("select * from login where username='$uname'") or die(mysql_error());

    if (mysql_num_rows($row) > 0) {

        $query2 = mysql_query("select password,username,name,user_level from login where username='$uname'")or die(mysql_error());

        while ($row1 = mysql_fetch_assoc($query2)) {
            if ($row1['password'] == $pword) {

                $_SESSION['users']=$row1['username'];
				
                $_SESSION['user_fname']=$row1['name'];
              
                $_SESSION['level']=$row1['user_level'];
				
				
         
                 echo json_encode(array("msgType" => 1, "msg" => "Successfully Logged in to the CAD","level"=>$row1['user_level']));


              
            } else {

                echo json_encode(array("msgType" => 2, "msg" => "Wrong Password, Login unsuccessful"));
                // header('location:../login.php');
            }
        }
    } else {


        //echo "wrong user name";
        echo json_encode(array("msgType" => 3, "msg" => "Wrong username , Login unsuccessful"));
        // header('location:../login.php');
    }
}else{
    
    echo "JSON array error";
    
}

