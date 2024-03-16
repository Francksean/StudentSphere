<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
body{
    background-color: grey;
}
.box {
    top: 20%;
    left: 37%;
    position: absolute;
    display: inline-block;
    width: 310px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    margin-left: 1rem;
    background-color: beige;
    transform: translateY(-50%, -50%);
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
</style>
<body>

<?php
$bdd = new PDO("mysql:host=localhost;dbname=projet", "root", "");

$param_recherche = $_POST['search'];

$requete = $bdd->prepare("CALL SearchProducts(:param_recherche)");
$requete->bindParam(':param_recherche', $param_recherche,PDO::PARAM_STR);
$requete->execute();

$results = $requete->fetchAll(PDO::FETCH_ASSOC);

foreach ($results as $produit) {
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
<?php
