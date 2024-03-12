<?php
//Démarrage de la session d'utilisateur
session_start();

// Connexion à la base de données
$bdd = new PDO('mysql:host=localhost;dbname=studentspherebdd; charset=utf8', 'root', 'BredouilleMYADMA');

// Appel de la procédure stockée pour authentifier l'utilisateur
$stmt = $bdd->prepare("CALL authenticateUser(:email, :password)");
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->bindParam(':password', $password, PDO::PARAM_STR);
$stmt->execute();

// Vérification des informations de connexion
if(isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
//Récupération des informations dans la BDD
    $requete_verification = $bdd->prepare("SELECT * FROM users WHERE email = :email AND password = :password");
    $requete_verification->bindValue(':email', $email, PDO::PARAM_STR);
    $requete_verification->bindValue(':password', $password, PDO::PARAM_STR);
    $requete_verification->execute();
    $users = $requete_verification->fetch(PDO::FETCH_ASSOC);

    if ($users) {
        // Les informations de connexion sont correctes, l'utilisateur est connecté
        $_SESSION['users'] = $users;
        
        // Redirection vers une page spécifique après la connexion réussie
        header("Location: Profil_étudiant.html");
        exit(); 
    } else {
        // Les informations de connexion sont incorrectes
        echo "Identifiant ou mot de passe incorrect.";
    }
} else {
    echo "Veuillez fournir une adresse e-mail et un mot de passe.";
}
?>