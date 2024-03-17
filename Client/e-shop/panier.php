<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panier</title>
    <style>
     *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 18px;
}
body{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.ee{
    font-size: 2em;
}
.header{
    height: 110px;
    width: 100%;
    background-color: #89260d;
    border-radius: 3px;
    margin: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
}
.header .logo{
    width: 100px ;
    height: 100px;
}
.cart{
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 7px 10px;
    border-radius: 3px;
    width: 80px;
    transform: translate(-100px);
}
.fa-solid{
    color: #89260d;
}
.cart p{
    height: 22px;
    width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    background-color: #89260d;
    color: white;
}
.container{
    display: flex;
    width: 70%;
    margin-bottom: 30px;
}
#root{
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}
.sidebar{
    width: 50%;
    border-radius: 5px;
    background-color: #eee;
    margin-left: 20px;
    padding: 15px;
    text-align: center;
    transform: translate(150px);
}
.head{
    background-color:#89260d;
    border-radius: 3px;
    height: 40px;
    padding: 10px;
    margin-bottom: 20px;
    color: white;
    display: flex;
    align-items: center;
}
.foot{
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    padding: 10px 0px;
    border-top: 1px solid #333;
}
.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #89260d;
    border-radius: 5px;
    padding: 15px;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 380px;
    transform: translate(-150px);
    background-color: beige;
}
.img-box{
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.images{
    max-width: 90%;
    max-height: 90%;
    object-fit: cover;
    object-position: center;
}
.bottom{
    margin-top: 20px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 110px;
}
h2{
    font-size: 20px;
    color: red;
}
button{
    width: 100%;
    position: relative;
    border: none;
    border-radius: 5px;
    background-color:#89260d;
    padding: 7px 25px;
    cursor: pointer;
    color: white;
}
button:hover{
    background-color: #333;
}
.cart-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: white;
    border-bottom: 1px solid #aaa;
    border-radius: 3px;
    margin: 10px 10px;
}
.row-img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #89260d;
    display: flex;
    align-items: center;
    justify-content: center;
}
.rowimg{
    max-width: 43px;
    max-height: 43px;
    border-radius: 50%;
}
.fa-trash:hover{
    cursor: pointer;
    color: #333;
}

    </style>
</head>
<body>
    <div class="header">
        <img class="logo" src="./Images/logo.png" alt=""> </a>
        <h3 class="ee"></h3>
        <div class="cart"><i class="fa-solid fa-cart-shopping"></i><p id="count">0</p></div>
    </div>
    <div class="container">
        <div id="root"> </div>
            <div class="sidebar">
                <div class="head"><p>Mon Panier</p></div>
                <div id="cartItem">Veuillez remplir le panier</div><br>
                <div class="foot">
                    <h3>Total</h3><br><br>
                    <h2 id="total"> 0.00 FCFA</h2><br>
                </div> 
                <br>
                <a href="payement.php"><button class="btn"> Valider</button></a>  
            </div>
    </div>
<script src="panier.js"></script>
<script src = "script.js" ></script>
</body>
</html>