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
        <label for="firstname">Firstname :</label>
        <input type="text" id="firstname" name="firstname" required><br><br>

        <label for="secondname">Secondname :</label>
        <input type="text" id="secondname" name="secondname" required><br><br>

        <label for="localisation">Localisation :</label>
        <input type="text" id="localisation" name="localisation" required><br><br>

        <label for="email">E-mail Adress :</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="password">Password :</label>
        <input type="password" id="password" name="password" required><br><br>

        <input type="submit" value="Sign in">
    </form>
</body>

</html>