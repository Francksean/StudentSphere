const dbconnector = require('../utils/dbconnector');

exports.setParams = (req, res, next) => {
  try {
    console.log("Connexion à la base de données...");
    const connection = dbconnector.createConnection();
    dbconnector.initConnection(connection, next);
    console.log("Connexion établie.");

    res.header('Content-Type', 'application/json');
    res.locals.currentConnection = connection;
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de données:", error);
    res.status(500).send("Erreur lors de la connexion à la base de données");
  }
};

exports.closeDBConnection = (req, res, next) => {
  console.log('Fermeture de la connexion à la base de données...');
  const connection = res.locals.currentConnection;
  connection.end();
  next();
};
