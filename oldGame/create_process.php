<?php
include("include/function_con.inc");
$theirUsername= $_POST['cName'];
$theirPassword= $_POST['cPass'];
$theirEmail= $_POST['cEmail'];
if($theirUsername==''){
	//redirect browser back to the form
	header('Location:index.php?re=noUsername');
	//stop running scripts on this page
	exit();
	}
else if($theirPassword==''){
	//redirect browser back to the form
	header('Location:index.php?re=noPass');
	//stop running scripts on this page
	exit();
	}
else if($theirEmail==''){
	//redirect browser back to the form
	header('Location:index.php?re=noEmail');
	//stop running scripts on this page
	exit();
	}


//connects to the query and searches the SQL file if the username and password already exist
$results = connect_to_query("SELECT * FROM account_table WHERE username= '$theirUsername'");
//if the username and password have been found it will redirect you back to the create page and give you a error message
if($row = mysql_fetch_array($results)){
	header('Location:index.php?re=alreadyExists');
	exit();
	}
//uses the include file which connects to the query
//Inserts the variables into the sql file
$results = connect_to_query("INSERT INTO account_table
	VALUES 
	(NULL,'$theirUsername','$theirPassword','$theirEmail','account')"
	);
//redirects the page back to the login
header('Location:index.php');
?>