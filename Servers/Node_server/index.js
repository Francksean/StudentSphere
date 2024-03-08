const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

//import des routers des différentes entités
const eventsRouter = require('./routes/eventsRouter')
const productsRouter = require('./routes/productsRouter');
const commentsRouter = require('./routes/commentsRouter');

const app = express();

app.use(express.json())
app.use(cors());

// initialisation des paramètres de connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: "studentspherebdd"
});

// mon "contrôlleur" pour les différentes routes
app.use('/comments', commentsRouter(connection));
app.use('/shop', productsRouter(connection));
app.use('/events', eventsRouter(connection));

app.listen(3000, () => {
  console.log("\n\n\n\nServer started on port 3000");
  connection.connect(function(err) {
    if (err) throw err;
    console.log("\n\n\n\nConnected to the database!");
 });
});

