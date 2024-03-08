const mysql = require('mysql');

// initialisation des paramètres de connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: "studentspherebdd"
});

// fonction de connexion à la bd
const initConnection = () =>  {
  console.log('ok server')
  connection.connect(function(err) {
    if (err) throw err;
    console.log("\n\n\n\nConnected to the database!");
 });
}

initConnection()

module.exports = initConnection;
module.exports = connection;
