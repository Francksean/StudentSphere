<?php
// Démarrage de la session utilisateur
session_start();

// Connexion à la base de données
$bdd = new PDO('mysql:host=localhost; dbname=studentspherebdd; charset=utf8', 'root', 'BredouilleMYADMA');

// Récupération des données du formulaire
$password = $_POST['password'];
$firstname = $_POST['firstname']; 
$secondname = $_POST['secondname']; 
$localisation = $_POST['localisation'];
$email = $_POST['email'];

// Appel de la procédure stockée pour enregistrer un nouvel étudiant
$stmt = $bdd->prepare("CALL inscriptionEtudiant(:firstname, :secondname, :localisation, :email, :password)");
$stmt->bindParam(':firstname', $firstname, PDO::PARAM_STR);
$stmt->bindParam(':secondname', $secondname, PDO::PARAM_STR);
$stmt->bindParam(':localisation', $localisation, PDO::PARAM_STR);
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->bindParam(':password', $password, PDO::PARAM_STR);
$stmt->execute();

// Création d'un tableau contenant les informations de l'utilisateur
$users = [
    'password' => $password,
    'firstname' => $firstname,
    'secondname' => $secondname,
    'localisation' => $localisation,
    'email' => $email
];

// Stockage des informations de l'utilisateur dans la session
$_SESSION['users'] = $users;

// Redirection vers une page spécifique après une inscription réussie
header("Location: Student_Profile.html");
exit();
?>