<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produits de la boutique</title>
    <style>
       body {
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
      }

      .image-container {
          margin: 20px;
          width: 390px;
          height: 280px; 
          overflow: hidden;
          position: relative;
      }

      .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }

      .image-container p {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 5px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          text-align: center;
          margin: 0;
      }
    </style>
</head>
<?php  require_once "Affiche.php" ?>
<body>
<?php
  foreach ($products as $produit) {
    echo "<div class='image-container'>
            <img src='../" . $produit['poster'] . "' alt='Image'>
            <p>" . $produit['name'] . "</p>
            <p>" . $produit['description'] . "</p>
            <p>Prix: " . $produit['price'] . "</p>
         </div>";
}
?> 
</body>
</html>