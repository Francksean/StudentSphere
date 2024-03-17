<?php
$bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$email = $_POST['email'];
$password = $_POST['password'];
 
$query = $bdd->prepare("SELECT * FROM users WHERE email = :email AND password = :password");

$query->bindValue(':email', $email, PDO::PARAM_STR);
$query->bindValue(':password', $password, PDO::PARAM_STR);
$query->execute();    
$resultat = $query->fetch(); 

    if ($resultat) {
        $status = $resultat['status'];

        if ($status == 1) {
            header("Location: AdminProduits.php");
            exit();
        } else {
            echo "Connexion reussie ";
            header("refresh:1;url=panier.php");
            exit;
        }
    } else {
        echo "Adresse email ou mot de passe incorrect. Veuillez reesayer";
        header("refresh:2;url=Connexion.php");
        exit;
    }
}
?>