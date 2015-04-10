<?php
require_once '../Model/student.php';
$action=$_REQUEST['action'];

switch($action) {
    case 'get_details':
        getDetails();
        break;
    case 'search':
        search();
        break;
    case 'add_progress':
        addProgress();
        break;
    default:
        break;
}

function getDetails(){
    $full_name=$_POST['full_name'];
    $obj=new Student();
    $result=mysql_fetch_assoc($obj->getStudentDeatailsByName($full_name));
    echo json_encode($result);
    exit;
}

function search(){
    
    $obj=new Student();
    $full_name_rep=$_POST['full_name_rep'];
    echo $full_name_rep;
    $result=  mysql_fetch_assoc($obj->getDetailsFromFullname($full_name_rep));
    $reg_no1=$result['stu_id'];
    $grade=$result['grade'];
    $grade= base64_encode($grade);
    $reg_no=  base64_encode($reg_no1);
    $full_name_rep=  base64_encode($full_name_rep);
    //$obj->removeBook($id,$quantity,$product_id,$batch_no);
    //require_once '../model/book.php';
    header('location:../View/progress.php?stu_id='.$reg_no.'&full_name='.$full_name_rep.'&grade='.$grade);
}

function addProgress(){
   $stu_id=$_REQUEST['stu_id'];
   $term=$_REQUEST['term'];
   $grade=$_REQUEST['grade'];
   $date_of_test=$_REQUEST['date_of_test'];
   $student_tags=$_REQUEST['student_tags'];
   $total_marks_of_first_place=$_REQUEST['total_marks_of_first_place'];
   $position=$_REQUEST['position'];
   $subject1=$_REQUEST['subject1'];
   $marks1=$_REQUEST['$marks1'];
   $subject2=$_REQUEST['subject2'];
   $marks2=$_REQUEST['$marks2'];
//   $subject3=$_REQUEST['subject3'];
//   $marks3=$_REQUEST['$marks3'];
//   $subject4=$_REQUEST['subject4'];
//   $marks4=$_REQUEST['$marks4'];
//   $subject5=$_REQUEST['subject5'];
//   $marks5=$_REQUEST['$marks5'];
//   $subject6=$_REQUEST['subject6'];
//   $marks6=$_REQUEST['$marks6'];
   echo $date_of_test;
    $obj=new Student();
    $obj->addProgress($stu_id,$term,$grade,$date_of_test,
            $student_tags,$total_marks_of_first_place,$position,$subject1,$marks1,$subject2,$marks2);
    // header('location:../view/progress.php');
}

?>
