<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Forget password</title>
	<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	flex-direction: column;
	background:beige;
	filter: drop-shadow(10px 10px 10px);
}

.box {
	position: relative;
	width: 380px;
	height: 640px;
	background: #89260d;
	border-radius: 8px;
	overflow: hidden;
}

.box::before {
	content: '';
	z-index: 1;
	position: absolute;
	top: -50%;
	left: -50%;
	width: 380px;
	height: 420px;
	transform-origin: bottom right;
	background: linear-gradient(0deg,transparent,#f6ff00,#f6ff00);
	animation: animate 6s linear infinite;
}

.box::after {
	content: '';
	z-index: 1;
	position: absolute;
	top: -50%;
	left: -50%;
	width: 380px;
	height: 420px;
	transform-origin: bottom right;
	background: linear-gradient(0deg,transparent,#f6ff00,#f6ff00);
	animation: animate 6s linear infinite;
	animation-delay: -3s;
}

@keyframes animate {
	0%
	{
		transform: rotate(0deg);
	}
	100%
	{
		transform: rotate(360deg);
	}
}

form {
	position: absolute;
	inset: 2px;
	background:  white;
	padding: 50px 40px;
	border-radius: 8px;
	z-index: 2;
	display: flex;
	flex-direction: column;
}

h2 {
	color: #89260d;
	font-weight: 500;
	text-align: center;
	letter-spacing: 0.1em;
}

.inputBox {
	position: relative;
	width: 300px;
	margin-top: 35px;
}

.inputBox input {
	position: relative;
	width: 100%;
	padding: 20px 10px 10px;
	background: transparent;
	outline: none;
	box-shadow: none;
	border: none;
	color: white;
	font-size: 1em;
	letter-spacing: 0.05em;
	transition: 0.5s;
	z-index: 10;
}

.inputBox span {
	position: absolute;
	left: 0;
	padding: 20px 0px 10px;
	pointer-events: none;
	font-size: 1em;
	color: #89260d;
	letter-spacing: 0.05em;
	transition: 0.5s;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
	color: #89260d;
	transform: translateX(0px) translateY(-34px);
	font-size: 0.75em;
}

.inputBox i {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 2px;
	background: #89260d;
	border-radius: 4px;
	overflow: hidden;
	transition: 0.5s;
	pointer-events: none;
	z-index: 9;
}

.inputBox input:valid ~ i,
.inputBox input:focus ~ i {
	height: 44px;
}

.links {
	display: flex;
	justify-content: space-between;
}

.links a {
	margin: 10px 0;
	font-size: 0.75em;
	color: #89260d;
	text-decoration: beige;
}

.links a:hover{
	color:#89260d;
}

.coul{
	color: red;
}

input[type="submit"]{
	border: none;
	outline: none;
	padding: 11px 25px;
	background: grey;
	cursor: pointer;
	border-radius: 4px;
	font-weight: 600;
	width: 100px;
	margin-top: 10px;
}

input[type="submit"]:hover{
    background-color: #89260d;
}

input[type="submit"]:active {
	opacity: 0.8;
}
	</style>	
</head>
<?php require_once("Index8.php") ?>;
<body>
	
	<div class="box">
		<form autocomplete="off" method="post">
			<h2>Forget password</h2>
			<div class="inputBox">
				<input type="email" required="required" name="email">
				<span>Email</span>
				<i></i>
				</div>
                <div class="coul">
			<?php echo $erreur; ?></div>
				<div class="inputBox">
				<input type="password" required="required" name="mdp_conf">
				<span>Confirmation password</span>
				<i></i>
			</div>
			<div class="inputBox">
				<input type="password" required="required" name ="nv_mdp">
				<span>New password</span>
				<i></i>
			</div>
			<div class="inputBox">
				<input type="password" required="required" name ="mdp1">
				<span>Confirm password</span>
				<i></i>
			</div>
            <div class="coul">
			<?php echo $erreur1; ?></div>
			<br><br><br>
			<input type="submit" value="valider" name="valider">
		</form>
	</div>
</body>
</html>