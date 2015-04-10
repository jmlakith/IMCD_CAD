<?php
    
require_once 'connection.php';

class Student{
   
 function searchStudent($value){
        $db=new Connection();
       $sql="select full_name as studentName from student where full_name LIKE '%$value%'";
       $result=$db->query($sql);
       return $result;
    }
    
    function getStudentDeatailsByName($full_name){
      $conn=new Connection();
        $sql="select * from student where full_name='$full_name'";
        $result=$conn->query($sql);
        return $result;   
    }

    function getDetailsFromFullname($full_name_rep){
        $conn=new Connection();
        $sql="SELECT * FROM student WHERE full_name = '$full_name_rep'";
        $result=$conn->query($sql);
        return $result; 
    }
    
    function getSubjectNames(){
        $conn=new Connection();
        $sql="SELECT *
FROM subject, test_marks
WHERE subject.subject_id = test_marks.subject_id
AND test_marks.stu_id = '001'";
        $result=$conn->query($sql);
        return $result; 
    }
    
    function addProgress($stu_id,$term,$grade,$date_of_test,$student_tags,$total_marks_of_first_place,$position){
        $conn=new Connection();
        $sql1="INSERT INTO test_details(stu_id,term,grade,date_of_test,student_tags,total_marks_of_first_place,position) VALUES
               ('$stu_id','$term','$grade','$date_of_test','$student_tags','$total_marks_of_first_place','$position')";  
       $sql1="INSERT INTO subject(subject_name,marks) VALUES
               ('$subject')";  
       
        echo $sql;
        $result=$conn->query($sql);
        return $result; 
    }
    }

?>
