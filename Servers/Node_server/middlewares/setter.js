const dbconnector = require('../utils/dbconnector')
const connection = dbconnector.createConnection()

exports.setParams = async (req, res, next) => {
  try {
    console.log("Connexion à la base de données...");
    console.log("Connexion établie.");

    res.header('Content-Type', 'application/json');
    await dbconnector.initConnection(connection);
    res.locals.currentConnection = connection;
    next();
  } catch (error) {
    // Gérer les erreurs de connexion à la base de données
    console.error("Erreur lors de la connexion à la base de données:", error);
    res.status(500).send("Erreur lors de la connexion à la base de données");
  }
};


exports.closeDBConnection = (req, res, next) => {
  console.log('ok close');
  res.locals.currentConnection.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err);
    } else {
      console.log('Database connection closed successfully.');
    }
    next();
  });
};
