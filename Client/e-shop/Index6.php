<?php
$bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');


$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$requete=$bdd->prepare('SELECT * FROM product_comments');

$requete->execute();

$products=$requete->fetchAll(PDO::FETCH_ASSOC);

?>