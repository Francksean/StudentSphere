<!doctype html>
<html lang="fr">
 <head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Ajouter des voitures</title>
	<link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css"> 
	<link rel="stylesheet" href="./assets/vendors/bootstrap/js/bootstrap.min.css">
	<link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <style>
        body {
          font-family: Arial, sans-serif;
        }
  
        .container {
          width: 80%;
          margin: 50px auto;
          padding: 20px;
          box-sizing: border-box; /* Pour inclure les paddings dans la largeur */
        }
  
        h1 {
          text-align: center;
        }
  
        form {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 5px;
        }
  
        label {
          display: block;
          margin-bottom: 10px;
        }
  
        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box; /* Pour inclure les paddings dans la largeur */
        }
  
        button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
  
        button:hover {
          background-color: #45a049;
        }
  
        footer {
          background-color: #333;
          color: white;
          padding: 0px 0;
          text-align: center;
        }
  
        footer ul {
          list-style-type: none;
          padding: O;
        }
  
        footer ul li {
          display: inline;
          margin-right: 20px;
        }
  
        footer ul li:last-child {
          margin-right: 0;
        }
  
        footer ul li a {
          color: white;
          text-decoration: none;
        }
    </style>
 </head>

 <body>
    <div class="container">
        <h1>Entrer les informations: </h1>
        <form action="Index.php" method="POST" enctype="multipart/form-data" >
            <label for="name">Nom:</label>
            <input type="text" id="name" name="nom" required>
			
			<label for="prix">Prix:</label>
            <input type="prix" id="prix" name="prix" required>

            <label for="modele">Modele:</label>
            <input type="text" id="modele" name="modele" required>

            <label for="fichier">Fichier:</label>
            <input type="file" id="fichier" name="fichier" required>
            <br><br>

            <button type="submit">Ajouter</button>
        </form>
    </div>
    <footer>
        <div class="container">
            <ul>
                <li><a href="Acceuil.php">Accueil</a></li>
                <li><a href="vehicule.php">Véhicules</a></li>
            </ul>
        </div>
    </footer>
</body>
</html>