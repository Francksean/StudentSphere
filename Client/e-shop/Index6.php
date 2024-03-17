<?php
$bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');


$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$requete=$bdd->prepare('CALL GetAllProduct_comments()');

$requete->execute();

$product_comments=$requete->fetchAll(PDO::FETCH_ASSOC);

?>