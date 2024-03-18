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
            echo "<script>alert('Connexion reussie'); window.location.href='AdminProduits.php';</script>";
        } else {
            echo "<script>alert('Connexion reussie'); window.location.href='produits.php';</script>";
        }
    } else {
        echo "<script>alert('Adresse email ou mot de passe incorrect. Veuillez reesayer'); window.location.href='Connexion.php';</script>";
       
    }
}
?>