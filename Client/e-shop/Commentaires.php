<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8"> 
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BDE Shop</title>
    <style>
 body {
  margin: 0;
  padding: 0;
}

.flex-around {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.logo-titre {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2.5em;
  color: rgb(238, 122, 122);
}

div {
  height: 100px;
  margin-right: 80px;
}

div > a {
  display: block;
  justify-content: center;
  text-decoration: none;
  font-size: 25px;
  color: black;
}

div > a >button{
    background-color: beige;
    border-color: black;
    cursor: pointer;
    font-size: 25px;
}

div > a > button:hover{
    background-color: brown;
}

section > img:first-child {
    width: 150px;
    height: auto;
    border-radius: 5px;
    animation: none;
}
  
section > img:last-child {
    width: 200px;
    height: auto;
    border-radius: 5px;
    animation: none;
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

.car {
    height: 250px;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.car img {
    width: 250px;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
    transform: translateY(-270px);
}

.car h2 {
    margin-bottom: 10px;
    margin-left: -80%;
}

.car p {
    margin-bottom: 10px;
    margin-left: -80%;
}

    </style>
</head>
<?php require_once "Index6.php" ?>
<body>
   <section class="flex-around">
      <img src="Images/offre.png" alt=" logo">
      <h1 class="logo-titre">
        Shop with <br />
        StudentSphere
      </h1>
      <img src="Images/Blade1.jpg" alt=" image">
   </section>

    <div class="flex-around">
        <a href="Acceuil.php"><button class="btn"> Previous</button></a> 
    </div>

  <?php
    foreach ($product_comments as $comment) {
    echo "<div class='container'>
        <div class='car'>
            <h2>". $comment['authorId'] . "</h2> 
            <h2>" . $comment['productId'] . "</h2>
            <p>". $comment['content'] . "</p>
            <p>". $comment['datePosted'] . "</p>
        </div>  
    </div>";
    }
  ?>
</body>
</html>