<?php
  header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');
  session_start();
  $mysqli = new mysqli('localhost','skipkris7_lern','SQLstudyFront201','skipkris7_lern');
  $login = trim(mb_strtolower($_POST['login']));
  $password = trim($_POST['password']);
  $result = $mysqli->query("SELECT * FROM `users` WHERE `login`='$login'");
  $row = $result->fetch_assoc(); //Преобразуем ответ от базы данных в массив
  if(password_verify($password,$row['password'])){
    $_SESSION['login'] = $row['login'];
    $_SESSION['id'] = $row['id'];
    echo json_encode(['result'=>'success']);
  }else{
    echo json_encode(['result'=>'error']);
  }
?>