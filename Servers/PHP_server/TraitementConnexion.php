<?php
// Connexion à la base de données
$bdd = new PDO('mysql:host=localhost;dbname=studentspherebdd; charset=utf8', 'root', 'BredouilleMYADMA');

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
        echo "Connexion réussie ! Bienvenue, " . $utilisateur['prenom'] . ".";
        
        // Redirection vers une page spécifique après la connexion réussie
        header("Location: #");
        exit(); 
    } else {
        // Les informations de connexion sont incorrectes
        echo "Identifiant ou mot de passe incorrect.";
    }
} else {
    echo "Veuillez fournir une adresse e-mail et un mot de passe.";
}
?>
