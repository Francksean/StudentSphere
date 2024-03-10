<?php
//Démarrage de la session d'utilisateur
session_start();

//Connexion à la base de données 

$bdd = new PDO('mysql:host=localhost; dbname=studentspherebdd; charset=utf8', 'root', 'BredouilleMYADMA');

// Récupération des données du formulaire
$motDePasse = $_POST['motDePasse'];
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$localisation = $_POST['localisation'];
$email = $_POST['email'];

// Requête préparée pour empêcher les injections SQL
$requete = $bdd->prepare("INSERT INTO utilisateurs (motDePasse, nom, prenom, localisation, email) VALUES(:motDePasse, :nom, :prenom, :localisation, :email)");

// Liaison des valeurs aux paramètres de la requête
$requete->bindValue(':motDePasse', $motDePasse, PDO::PARAM_STR);
$requete->bindValue(':nom', $nom, PDO::PARAM_STR);
$requete->bindValue(':prenom', $prenom, PDO::PARAM_STR);
$requete->bindValue(':localisation', $localisation, PDO::PARAM_STR);
$requete->bindValue(':email', $email, PDO::PARAM_STR);

// Exécution de la requête
$requete->execute();

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