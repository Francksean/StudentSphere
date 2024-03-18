<?php
$bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');

$Firstname=$_POST['firstname'];
$Secondname=$_POST['secondname'];
$Localisation=$_POST['localisation'];
$Email=$_POST['email'];
$Password=$_POST['password'];
$profilePic=$_FILES['image']['name'];
$status=$_POST[_('status')];

$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$requete=$bdd->prepare('CALL Addusers (:param_nom, :param_prenom, :param_email, :param_localisation, :param_password, :param_image, :param_status)');

$requete->bindValue(':param_nom', $Firstname, PDO::PARAM_STR);
$requete->bindValue(':param_prenom', $Secondname, PDO::PARAM_STR);
$requete->bindValue(':param_email', $Email, PDO::PARAM_STR);
$requete->bindValue(':param_localisation', $Localisation, PDO::PARAM_STR);
$requete->bindValue(':param_password', $Password, PDO::PARAM_STR);
$requete->bindValue(':param_image', $profilePic, PDO::PARAM_STR);
$requete->bindValue(':param_status', $status, PDO::PARAM_STR);
$requete->execute();

echo "<script>alert('Inscription reussie. Veuillez vous connecter a present'); window.location.href='Connexion.php';</script>";

?>