<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>commenter a propos d'un produit</title>
    <style>
        body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5rem;
        background-color: beige;
      }
      .container {
        position: absolute;
        top: 10%;
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
        <form action="send.php" method="POST">
           <h2> Ajouter un commentaire</h2>
            <label for="name">Votre Identifiant:</label>
            <input type="text" id="name" name="authorId" required>
			
			<label for="name">Identidiant du prouit:</label>
            <input type="text" id="surname" name="productId" required>

            <label for="email">date:</label>
            <input type="date" required="required" name ="datePosted">
				<br><br>
            <label for="message">Commentaire:</label>
            <textarea id="message" name="content" required></textarea>

            <button type="submit">Commenter</button>
        </form>

   </div>

</body>
</html>