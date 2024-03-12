<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="PageConnexion.css">
    <title>Connexion</title>
    <style>
    body {
        text-align: center;
        /* Centrer le texte */
    }

    a {
        text-decoration: none;
        /* Retirer le soulignement du lien */
    }
    </style>
</head>

<body>
    <h2>Connexion</h2>
    <form action="TraitementConnexion.php" method="POST">
        <label for="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="motDePasse">Mot de passe :</label>
        <input type="password" id="motDePasse" name="motDePasse" required><br><br>

        <input type="submit" value="Se connecter">
    </form>

    <!-- Lien vers la page d'inscription -->
    <p>Vous n'avez pas de compte, <a href="#" style="text-decoration: none;">inscrivez-vous</a> ?</p>
</body>

</html>
<?php
// Démarrage de la session utilisateur
session_start();

// Vérification des informations de soumission du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connexion à la base de données
    $bdd = new PDO('mysql:host=localhost; dbname=studentspherebdd; charset=utf8', 'root', 'BredouilleMYADMA');

    // Récupération des données du formulaire
    $email = $_POST['email'];
    $motDePasse = $_POST['motDePasse'];

    // Requête préparée pour empêcher les injections SQL
    $requete = $bdd->prepare("SELECT * FROM utilisateurs WHERE email = :email AND motDePasse = :motDePasse");

    // Liaison des valeurs aux paramètres de la requête
    $requete->bindValue(':email', $email, PDO::PARAM_STR);
    $requete->bindValue(':motDePasse', $motDePasse, PDO::PARAM_STR);

    // Exécution de la requête
    $requete->execute();

    // Vérification de l'existence de l'utilisateur dans la base de données
    if ($requete->rowCount() > 0) {
        // L'utilisateur existe, création d'une session pour l'utilisateur
        $_SESSION['utilisateur'] = $email;

        // Redirection vers une page spécifique après la connexion réussie
        header("Location: Profil_utilisateur.html");
        exit();
    } else {
        // L'utilisateur n'existe pas ou les informations de connexion sont incorrectes
        echo "Identifiants invalides. Veuillez réessayer.";
    }
}
?>