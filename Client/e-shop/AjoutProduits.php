<!doctype html>
<html lang="fr">
 <head>
    <meta charset="utf-8">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ajouter Les Produits</title>
    <style>
         body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5rem;
        background-color: beige;
      }
      .container {
        position: absolute;
        top: 7%;
        left: 30%;
			  width: 800px;
			  height: auto;
			  background: white;
			  border-radius: 8px;
        overflow: hidden; 
        transform: translateY(-50%, -50%);
      }

      .container::before {
			content: '';
			z-index: 1;
			position: absolute;
			top: -50%;
			left: -50%;
			width: 380px;
			height: 420px;
			transform-origin: bottom right;
			animation: animate 6s linear infinite;
		}

		.container::after {
			content: '';
			z-index: 1;
			position: absolute;
			top: -50%;
			left: -50%;
			width: 380px;
			height: 420px;
			transform-origin: bottom right;
			animation: animate 6s linear infinite;
		}

      h2 {
        text-align: center;
      }

      form {
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 5px;
      }
      .label {
        display: block;
        margin-bottom: 10px;
        font-size: 20px;
      }

      input[type="text"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 20px;
      }

      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.5rem;
      }

      button:hover {
        background-color: brown;
      }

    </style>
 </head>

 <body>
    <div class="container">
        <h2>Entrer les informations: </h2>
        <form action="Index1.php" method="POST" enctype="multipart/form-data" >
            <label for="name">Nom:</label>
            <input type="text" id="name" name="name" required>

            <label for="fichier">Image:</label><br>
            <input type="file" id="fichier" name="poster" required>
            <br><br>
            <label for="fichier">Categorie:</label>
            <input type="text" id="category" name="category" required>

            <label for="modele">Description:</label>
            <input type="text" id="description" name="description" required>

            <label for="fichier">Quantite:</label>
            <input type="text" id="quantity" name="quantity" required>

            <label for="prix">Prix:</label>
            <input type="price" id="price" name="price" required>
            <br><br>

            <button type="submit">Ajouter</button>
        </form>
    </div>
</body>
</html>