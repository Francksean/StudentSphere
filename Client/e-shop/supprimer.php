<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>suppression de produits</title>
    <style>
         body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: grey;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }

        .car {
            height: 270px;
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
            transform: translateY(-290px);
        }

        .car h2 {
            margin-bottom: 10px;
            margin-left: -80%;
        }

        .car p {
            margin-bottom: 10px;
            margin-left: -80%;
        }

        .car .cartn {
            align-items: center;
            margin-bottom: 10px;
            margin-right: -80%;
            transform: translateY(-120px);
            font-size: 25px;
            text-decoration: none;
        }

   /* @media only screen and (max-width: 768px) {
    .container {
        width: 90%;
    }

    .car img {
        width: 200px;
    }

    .car{
        height: 550;
    }

    .car h2,
    .car p {
        margin-left: 0;
        text-align: center;
    }

    .car .cartn {
        margin-right: 0;
        transform: translateY(0);
    }
} */
    </style>
    <?php require_once "Index3.php" ?>
</head>
<body>
<?php
    foreach ($products as $produit) {
    echo "<div class='container'>
        <div class='car'>
            <p>". $produit['id'] . "</p>
            <h2>" . $produit['name'] . "</h2>
            <p>". $produit['category'] . "</p>
            <p>". $produit['description'] . "</p>
            <p>" . $produit['price'] . " FCFA </p>
            <a href='Index4.php' class='cartn'>Supprimer</a>
            <img src='./Images/" . $produit['poster'] . "' alt='image'>
        </div>  
    </div>";
    }
?>
</body>
</html>