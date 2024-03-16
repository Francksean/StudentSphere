<?php
$bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');

$nom=$_POST['name'];
$poster=$_FILES['poster']['name'];
$category=$_POST['category'];
$description=$_POST['description'];
$quantity=$_POST['quantity'];
$prix=$_POST['price'];



$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$requete=$bdd->prepare('INSERT INTO products(name, poster, category, description, quantity, price) VALUES(:param_nom, :param_poster, :param_category, :param_description, :param_quantity, :param_prix)');

$requete->bindValue(':param_nom', $nom, PDO::PARAM_STR);
$requete->bindValue(':param_poster', $poster, PDO::PARAM_STR);
$requete->bindValue(':param_category', $category, PDO::PARAM_STR);
$requete->bindValue(':param_description', $description, PDO::PARAM_STR);
$requete->bindValue(':param_quantity', $quantity, PDO::PARAM_STR);
$requete->bindValue(':param_prix', $prix, PDO::PARAM_STR);
$requete->execute();

echo "Produit Ajouter.";
header("refresh:1;url=AdminProduits.php");
exit; 

?>