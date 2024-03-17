<?php
$bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');

$authorId=$_POST['authorId'];
$productId=$_POST['productId'];
$datePosted=$_POST['datePosted'];
$content=$_POST['content'];



$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$requete=$bdd->prepare('CALL AddComment(:authorId, :productId, :datePosted, :content)');

$requete->bindValue(':authorId', $authorId, PDO::PARAM_STR);
$requete->bindValue(':productId', $productId, PDO::PARAM_STR);
$requete->bindValue(':datePosted', $datePosted, PDO::PARAM_STR);
$requete->bindValue(':content', $content, PDO::PARAM_STR);
$requete->execute();

echo "Commentaire envoye.";
header("refresh:1;url=Commentaire.php");
exit; 

?>