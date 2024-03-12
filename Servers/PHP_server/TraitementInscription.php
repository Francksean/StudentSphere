<?php
// Démarrage de la session d'utilisateur
session_start();

// Connexion à la base de données 
$bdd = new PDO('mysql:host=localhost; dbname=studentspherebdd; charset=utf8', 'root', 'BredouilleMYADMA');

// Récupération des données du formulaire
$motDePasse = $_POST['motDePasse'];
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$localisation = $_POST['localisation'];
$email = $_POST['email'];

// Appel de la procédure stockée pour inscrire un nouvel étudiant
$stmt = $bdd->prepare("CALL inscriptionEtudiant(:nom, :prenom, :localisation, :email, :motDePasse)");
$stmt->bindParam(':nom', $nom, PDO::PARAM_STR);
$stmt->bindParam(':prenom', $prenom, PDO::PARAM_STR);
$stmt->bindParam(':localisation', $localisation, PDO::PARAM_STR);
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->bindParam(':motDePasse', $motDePasse, PDO::PARAM_STR);
$stmt->execute();

// Création d'un tableau contenant les informations de l'utilisateur
$utilisateur = [
    'motDePasse' => $motDePasse,
    'nom' => $nom,
    'prenom' => $prenom,
    'localisation' => $localisation,
    'email' => $email
];

// Stockage des informations de l'utilisateur dans la session
$_SESSION['utilisateur'] = $utilisateur;

// Redirection vers une page spécifique après l'inscription réussie
header("Location: Profil_étudiant.html");
exit();
?>