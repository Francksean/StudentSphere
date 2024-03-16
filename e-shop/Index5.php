<?php

$bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');

if(isset($_POST['id']) && !empty($_POST['id'])){
    $productId = $_POST['id'];

$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$requete=$bdd->prepare('CALL DeleteProduct (:productId)');

$requete->bindParam(':productId', $productId, PDO::PARAM_INT);
$requete->execute();

$produit = $requete->fetch(PDO::FETCH_ASSOC);

echo "Suppression reussie.";
header("refresh:1;url=AdminProduits.php");
exit;
} else {
    echo "Erreur : ID de produit manquant.";
}
?>