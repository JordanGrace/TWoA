<?php
//creates variables fo the the inputed text
$userName = $_POST['Uname'];
$userPassword = $_POST['Upass'];
//runs the include file
include('include/function_con.inc');
//connects to the query and searches the SQL file if the username and password exist
$results = connect_to_query('SELECT * FROM account_table WHERE username="'.$userName.'"AND password ="'.$userPassword.'"');
//if the username and password have been found it will save the privilege and username and redirect you to the product page
if($row = mysql_fetch_array($results)){
session_start();
$_SESSION['userType']=$row['userType'];
$_SESSION['username']=$row['username'];

header('Location:game.php');
//if the search was a failure redirect back to the login page
}else{
header('Location:index.php?error=loginFailed');
}
?>