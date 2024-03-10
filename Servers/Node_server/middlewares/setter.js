const dbconnector = require('../utils/dbconnector')
const connection = dbconnector.createConnection()

exports.setParams = (req, res, next ) => {
  res.header('Content-Type', 'application/json');
  console.log('ok mdw 2')
  dbconnector.initConnection(connection)
  res.locals.currentConnection = connection
  next();
}

exports.closeDBConnection = ( req, res, next ) => {
  connection.end()
}