<?php
//Démarrage de la session d'utilisateur
session_start();

// Connexion à la base de données
$bdd = new PDO('mysql:host=localhost;dbname=studentspherebdd; charset=utf8', 'root', 'BredouilleMYADMA');
//Création Procédure sockées athentificateUser
$bdd->exec("
    CREATE PROCEDURE authenticateUser (IN p_email VARCHAR(255), IN p_motDePasse VARCHAR(255))
    BEGIN
    DECLARE user_id INT;
    SELECT id INTO user_id FROM utilisateurs WHERE email = p_email AND motDePasse = p_motDePasse;
    SELECT user_id;
END;
");

// Appel de la procédure stockée pour authentifier l'utilisateur
    $stmt = $bdd->prepare("CALL authenticateUser(:email, :motDePasse)");
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':motDePasse', $motDePasse, PDO::PARAM_STR);
    $stmt->execute();

// Vérification des informations de connexion
if(isset($_POST['email']) && isset($_POST['motDePasse'])) {
    $email = $_POST['email'];
    $motDePasse = $_POST['motDePasse'];

    $requete_verification = $bdd->prepare("SELECT * FROM utilisateurs WHERE email = :email AND motDePasse = :motDePasse");
    $requete_verification->bindValue(':email', $email, PDO::PARAM_STR);
    $requete_verification->bindValue(':motDePasse', $motDePasse, PDO::PARAM_STR);
    $requete_verification->execute();
    $utilisateur = $requete_verification->fetch(PDO::FETCH_ASSOC);

    if ($utilisateur) {
        // Les informations de connexion sont correctes, l'utilisateur est connecté
        $_SESSION['utilisateur'] = $utilisateur;
        
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