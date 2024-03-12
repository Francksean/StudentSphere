<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="PageConnexion.css">
    <title>Login</title>
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
    <h2>Login</h2>
    <form action="TraitementConnexion.php" method="POST">
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <input type="submit" value="Login">
    </form>

    <!-- Lien vers la page d'inscription -->
    <p>Don't have an account? <a href="#" style="text-decoration: none;">Sign up</a>?</p>
</body>

</html>
<?php
// Démarrage de la session utilisateur
session_start();

// Vérification des informations de soumission du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connexion à la base de données
    $bdd = new PDO('mysql:host=localhost; dbname=studentspherebdd; charset=utf8', 'root', 'BredouilleMYADMA');

    /// Récupération des données du formulaire
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Requête préparée pour empêcher les injections SQL
    $query = $bdd->prepare("SELECT * FROM users WHERE email = :email AND password = :password");

     // Liaison des valeurs aux paramètres de la requête
    $query->bindValue(':email', $email, PDO::PARAM_STR);
    $query->bindValue(':password', $password, PDO::PARAM_STR);
    
    // Exécution de la requête
    $query->execute();

    // Vérification de l'existence de l'utilisateur dans la base de données
    if ($query->rowCount() > 0) {
        // L'utilisateur existe, création d'une session pour l'utilisateur
        $_SESSION['users'] = $email;

        // Redirection vers une page spécifique après la connexion réussie
        header("Location: User_Profile.html");
        exit();
    } else {
        // L'utilisateur n'existe pas ou les informations de connexion sont incorrectes
        echo "Invalid credentials. Please try again.";
    }
}
?>