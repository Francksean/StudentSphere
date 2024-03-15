<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"> 
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Produits de la boutique</title>
    <style>
.heading{
    text-align: center;
    font-size: 4rem;
    color:rgb(0, 0, 0);
    padding:1rem;
    margin:2rem 0;
    background:#ffdad1 ;
}

.heading span{
    color:var(--brown);
}
.box-container{
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
}

.box-container .box{
    flex:1 1 30rem;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
    border-radius: .5rem;
    border:.1rem solid rgba(0,0,0,.1);
    position: relative;    
}

.box-container .box .discount{
    position: absolute;
    top:0.5rem; left:0.5rem;
    padding:0.5rem 1rem;
    font-size: 0.5rem;
    color:var(--brown);
    background:rgba(255, 51, 153,.05);
    z-index: 1;
    border-radius: .5rem;
}

.box-container .box .image{
    position: relative;
    text-align: center;
    padding-top: 0.5rem;
    padding-left: 0px;
    padding-right: 0px;
    overflow:hidden;
}

.box-container .box .image img{
    height:25rem;
}

.box-container .box:hover .image img{
    transform: scale(1.1);
}

.box-container .box .image .icons{
    position: absolute;
    bottom:-7rem; left:0; right:0;
    display: flex;
}

.box-container .box:hover .image .icons{
    bottom:0;
}

.box-container .box .image .icons a{
    height: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    width:50%;
    background:var(--brown);
    color:#fff;
}

.box-container .box .image .icons .cart-btn{
    border-left: .1rem solid #fff7;
    border-right: .1rem solid #fff7;
    width:100%;
}

.box-container .box .image .icons a:hover{
    background:#333;
}

.box-container .box .content{
    padding:2rem;
    text-align: center;
}

.box-container .box .content h3{
    font-size: 2.5rem;
    color:rgb(0, 0, 0);
}

.box-container .box .content .price{
    font-size: 2.5rem;
    color:var(--brown);
    font-weight: bolder;
    padding-top: 1rem;
}
    </style>
</head>
<?php  require_once "Affiche.php" ?>
<body>

<h1 class="heading"> latest <span>products</span> </h1>
<?php
  foreach ($products as $produit) {

    echo "<div class='box'>

    <div class='image'>
      <img src='" . $produit['poster'] . "' alt='image'>
        <div class='icons'>
            <a href='panier.php' class='cart-btn'>add to cart</a>
            <a href='supprimer.php'fa-solid fa-trash'></a>
        </div>
    </div>
    <div class='content'>
        <h3>". $produit['name']."</h3>
        <div class='price'>". $produit['price']. "FCFA </div>
    </div>
    </div>";
  }
?> 
</body>
</html>