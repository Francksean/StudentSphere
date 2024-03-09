<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Style.css">
    <title>Connexion</title>
    <style>
        body {
            text-align: center; /* Centrer le texte */
        }
        a {
            text-decoration: none; /* Retirer le soulignement du lien */
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
