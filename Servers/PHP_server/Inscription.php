<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="PageInscription.css">
    <title>Inscription</title>
</head>
<body>
    <h2>Inscription</h2>
    <form action="TraitementInscription.php" method="POST">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required><br><br>

        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" required><br><br>

        <label for="localisation">Localisation :</label>
        <input type="text" id="localisation" name="localisation" required><br><br>

        <label for="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="motDePasse">Mot de passe :</label>
        <input type="password" id="motDePasse" name="motDePasse" required><br><br>

        <input type="submit" value="S'inscrire">
    </form>
</body>
</html>
