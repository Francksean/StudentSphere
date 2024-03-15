<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contact</title>
    <style>
        body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5rem;
      }

      .heading{
           text-align: center;
           font-size: 3rem;
           color:rgb(0, 0, 0);
           padding:1rem;
           margin:2rem 0;
           background:#ffdad1 ;
           width: 100%;
         }

      .container {
        width: 80%;
        margin: 50px auto;
        padding: 20px;
        box-sizing: border-box; 
      }

      h2 {
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
        box-sizing: border-box;
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
        <h2 class="heading">Contactez nous</h2>

        <form action="submit_form.php" method="POST">
            <label for="name">Nom:</label>
            <input type="text" id="name" name="name" required>
			
			      <label for="name">Prenom:</label>
            <input type="text" id="surname" name="surname" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
   </div>
</body>
</html>