<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="PageInscription.css">
    <title>Inscription</title>
    <style>
        *
{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body 
{
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	flex-direction: column;
	background: beige;
}
.box 
{
	position: relative;
	width: 500px;
	height: 840px;
	background: #89260d;
	border-radius: 8px;
	overflow: hidden;
}
.box::before 
{
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
.box::after 
{
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
@keyframes animate 
{
	0%
	{
		transform: rotate(0deg);
	}
	100%
	{
		transform: rotate(360deg);
	}
}
form 
{
	position: absolute;
	inset: 2px;
	background: white;
	padding: 50px 40px;
	border-radius: 8px;
	z-index: 2;
	display: flex;
	flex-direction: column;
}
h2 
{
	color: #89260d;
	font-weight: 500;
	text-align: center;
	letter-spacing: 0.1em;
}
.inputBox 
{
	position: relative;
	width: 300px;
	margin-top: 35px;
}
.inputBox input 
{
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
.inputBox span 
{
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
.inputBox input:focus ~ span 
{
	color: #89260d;
	transform: translateX(0px) translateY(-34px);
	font-size: 0.75em;
}
.inputBox i 
{
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
.inputBox input:focus ~ i 
{
	height: 44px;
}
.links 
{
	display: flex;
	justify-content: space-between;
}
.links a 
{
	margin: 10px 0;
	font-size: 0.75em;
	color: #89260d;
	text-decoration: beige;
}
.links a:hover, 
.links a:nth-child(2)
{
	color: #89260d;
}
.coul{
	color: red;
}
input[type="submit"]
{
	border: none;
	outline: none;
	padding: 11px 25px;
	background: #89260d;
	cursor: pointer;
	border-radius: 4px;
	font-weight: 600;
	width: 100px;
	margin-top: 10px;
}
input[type="submit"]:active 
{
	opacity: 0.8;
}
    </style>
</head>

<body>
<div class="box">
    <form action="scriptInscription.php" method="POST">
           <h2>sign in</h2>

      <div class="inputBox">
        <input type="text" id="firstname" name="firstname" required><br><br>
        <span>Firstname</span>
		<i></i>
      </div>

      <div class="inputBox">
        <input type="text" id="secondname" name="secondname" required><br><br>
        <span>Secondname</span>
		<i></i>
      </div>

      <div class="inputBox">
        <input type="text" id="localisation" name="localisation" required><br><br>
        <span>Localisation</span>
		<i></i>
      </div>

      <div class="inputBox">
        <input type="email" id="email" name="email" required><br><br>
        <span>Email</span>
		<i></i>
      </div>

      <div class="inputBox">
        <input type="password" id="password" name="password" required><br><br>
        <span>Password</span>
		<i></i>
      </div>

      <div class="inputBox">
        <span>Image</span><br><br>
        <input type="file" id="fichier" name="image" required>
      </div>

        <input type="submit" value="Sign in">
    </form>

</div>
</body>

</html>