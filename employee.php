<?php
 $firstname = $_POST['firstname'];
 $lastname = $_POST['lastname'];
 $department = $_POST['department'];

 $connect = new mysqli('localhost', 'root', 'employee');

 if($connect->connect_error){
   die('Connection Failed : ' . $connect->connect_error);
 } else{
   //stmt
 }
?>