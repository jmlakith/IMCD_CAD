<?php
class connection{
    function  query($sql){
        $conn=  mysql_connect('localhost','root','') 
                or die("Could not connect server");
        $db=  mysql_select_db('cad',$conn) 
                or die("Could not connect database");
        $result = mysql_query($sql) or die("Could not connect query");
        return $result;
        
    }
    
}
?>
