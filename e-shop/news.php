<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"> 
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les plus vendus</title>
    <style>
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

.flex-around {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.fas{
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    display: inline-block;
    width: 310px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 1rem;
    background-color: beige;
}

.box:hover {
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
}

.box .image {
    position: relative;
    text-align: center;
    padding-top: 0.5rem;
    padding-left: 0px;
    padding-right: 0px;
    overflow: hidden;
}

.box .image img {
    height: 20rem;
    object-fit: cover;
    border: none;
    transition: transform 0.3s ease
}

.box .image .icons {
    position: absolute;
    bottom: -7rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.box:hover .image .icons {
    bottom: 0;
    opacity: 1;
}

.box .image .icons a {
    height: 4rem;
    line-height: 5rem;
    font-size: 1.5rem;
    width: 4rem;
    background: brown;
    color: #fff;
    text-align: center;
    transition: background 0.3s ease;
    text-decoration: none;
}

.box .image .icons .cart-btn {
    border-left: .1rem solid #fff7;
    border-right: .1rem solid #fff7;
}

.box .image .icons a:hover {
    background: #333;
}

.box .content {
    padding: 0.2rem 0;
    text-align: center;
}

.box .content h3 {
    font-size: 1.8rem;
    color: rgb(0, 0, 0);
    margin-bottom: 0.2rem;
}

.box .content .price {
    font-size: 1.8rem;
    color: brown;
    font-weight: bolder;
    margin-top: 0.2rem;
    margin-bottom: 0;
}

.d-flex {
        display: flex;
        justify-content: center;
        align-items: center;
}

.form-control {
    width: 150px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    transform: translate(-30px);
}

.btn {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    background-color: gray;
    color: white;
    cursor: pointer;
    transform: translate(-30px);
}

.btn:hover {
    background-color: brown;
}

    </style>
    <?php require_once "Index2.php" ?>
</head>
<body>
<section class="flex-around">
      <img src="Images/offre.png" alt=" logo">
      <h1 class="logo-titre">
        Shop with <br />
        StudentSphere
      </h1>
      <img src="Images/Blade1.jpg" alt=" image">
</section>
<nav>
    <div class="flex-around">
        <a href="produits.php"><button class="btn"> Previous</button></a> 
    </div>
</nav>

<?php
foreach ($products as $produit) {
    echo "<div class='box'>
        <div class='image'>
            <img src='./Images/" . $produit['poster'] . "' alt='image'>
            <div class='icons'>
                <a href='Connexion.php' class='cart-btn'>ADD</a>
            </div>
        </div>
        <div class='content'>
            <h3>" . $produit['name'] . "</h3>
            <div class='price'>" . $produit['price'] . " FCFA </div>
        </div>
    </div>";
}
?>
</body>
</html>

</body>
</html>