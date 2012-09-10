<?php
session_start();

if(isset($_SESSION['userType'])){header('Location:game.php');}?>

<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>The World of Aldoun</title>
<link rel="stylesheet" type="text/css" href="css/styleLog.css">

</head>

<body>
	<div class="wrapper">
			<div class="content">
				<div id="form_wrapper" class="form_wrapper">
					<form action="create_process.php" enctype="multipart/form-data" method="post" class="register <?php if(isset($_GET['re'])){echo'active';}?>">
						<h3>Register</h3>
							<div>
								<label>Username:
									</label>
								<input type="text" name="cName"/>
								<span class="error"><?php if(isset($_GET['re'])){
									if($_GET['re']=='noUsername'){
										echo'Username is blank';}}?></span>
							</div>
							<div>
								<label>Email:</label>
								<input type="text" name="cEmail"/>
								<span class="error"><?php if(isset($_GET['re'])){
									if($_GET['re']=='noEmail'){
										echo'Email is blank';}}?></span>
							</div>
							<div>
								<label>Password:</label>
								<input type="password" name="cPass"/>
								<span class="error"><?php if(isset($_GET['re'])){
									if($_GET['re']=='noPass'){
										echo'Password is blank';}}?></span>
							</div>
						<div class="bottom">
							<div class="remember">
								<input type="checkbox" />
								<span>Send me updates</span>
							</div>
							<input type="submit" value="Register" />
							<a href="index.html" rel="login" class="linkform">You have an account already? Log in here</a>
							<div class="clear"></div>
						</div>
					</form>
					<form action="login_process.php" enctype="multipart/form-data" method="post" class="login <?php if(!isset($_GET['re'])|| !isset($_GET['fp'])){echo'active';}?>">
						<h3>Login</h3>
						<div>
							<label>Username:</label>
							<input type="text" name="Uname"/>
							<span class="error"><?php if(isset($_GET['error'])){if($_GET['error']=='loginFailed'){
										echo'Incorrect Username or Password';}}?></span>
						</div>
						<div>
							<label>Password: <a href="forgot_password.html" rel="forgot_password" class="forgot linkform">Forgot your password?</a></label>
							<input type="password" name="Upass"/>
							<span class="error"></span>
						</div>
						<div class="bottom">
							<div class="remember"><input type="checkbox" /><span>Keep me logged in</span></div>
							<input type="submit" value="Login"></input>
							<a href="register.html" rel="register" class="linkform">You don't have an account yet? Register here</a>
							<div class="clear"></div>
						</div>
					</form>
					<form class="forgot_password">
						<h3>Forgot Password</h3>
						<div>
							<label>Username or Email:</label>
							<input type="text" />
							<span class="error">This is an error</span>
						</div>
						<div class="bottom">
							<input type="submit" value="Send reminder"></input>
							<a href="index.html" rel="login" class="linkform">Suddenly remebered? Log in here</a>
							<a href="register.html" rel="register" class="linkform">You don't have an account? Register here</a>
							<div class="clear"></div>
						</div>
					</form>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		</div><!--Closes Wrapper-->

		<!-- The JavaScript -->
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
		<script type="text/javascript">
			$(function() {
					//the form wrapper (includes all forms)
				var $form_wrapper	= $('#form_wrapper'),
					//the current form is the one with class active
					$currentForm	= $form_wrapper.children('form.active'),
					//the change form links
					$linkform		= $form_wrapper.find('.linkform');
						
				//get width and height of each form and store them for later						
				$form_wrapper.children('form').each(function(i){
					var $theForm	= $(this);
					//solve the inline display none problem when using fadeIn fadeOut
					if(!$theForm.hasClass('active'))
						$theForm.hide();
					$theForm.data({
						width	: $theForm.width(),
						height	: $theForm.height()
					});
				});
				
				//set width and height of wrapper (same of current form)
				setWrapperWidth();
				
				/*
				clicking a link (change form event) in the form
				makes the current form hide.
				The wrapper animates its width and height to the 
				width and height of the new current form.
				After the animation, the new form is shown
				*/
				$linkform.bind('click',function(e){
					var $link	= $(this);
					var target	= $link.attr('rel');
					$currentForm.fadeOut(400,function(){
						//remove class active from current form
						$currentForm.removeClass('active');
						//new current form
						$currentForm= $form_wrapper.children('form.'+target);
						//animate the wrapper
						$form_wrapper.stop()
									 .animate({
										width	: $currentForm.data('width') + 'px',
										height	: $currentForm.data('height') + 'px'
									 },500,function(){
										//new form gets class active
										$currentForm.addClass('active');
										//show the new form
										$currentForm.fadeIn(400);
									 });
					});
					e.preventDefault();
				});
				
				function setWrapperWidth(){
					$form_wrapper.css({
						width	: $currentForm.data('width') + 'px',
						height	: $currentForm.data('height') + 'px'
					});
				}
			});
        </script>
</body>
</html>