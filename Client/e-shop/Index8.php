<?php

$erreur = "";
$erreur1 = "";

if(isset($_POST['valider'])){
	if(!empty($_POST['email']) && !empty($_POST['mdp_conf']) && !empty($_POST['nv_mdp']) && !empty($_POST['mdp1']))
    {
        if ($_POST['nv_mdp'] == $_POST['mdp1']) {
            try {
                $bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');
            } catch (PDOException $exc) {
                echo $exc->getMessage();
                echo "ERREUR";
                exit();
            }
            $email = $_POST['email'];
            $password0 = $_POST['nv_mdp'];
            $password1 = $_POST['mdp1'];
            $password2 = $_POST['mdp_conf'];
            $requete = $bdd->prepare("SELECT * FROM users WHERE email= ? ");
            $requete->execute(array($email));
            if ($requete->rowCount() > 0) {
                $requete = $bdd->prepare("UPDATE  users set password= ?  WHERE email= ? ");
                $requete->execute(array($password0, $email));
                
                echo "<script>alert('Votre mot de passe a ete mis a jour. veuillez vous connecter'); window.location.href='Connexion.php';</script>"; 
            } else {
                $erreur = "votre email est introuvable";
            }
        }
        else{
            $erreur1 = "verifier que les deux mots de passe correspondent";

        }
		}
   
    }
   
 ?>