const express = require('express')

const mysql = require('mysql');

// initialisation des paramètres de connexion à la base de données
exports.createConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "studentspherebdd"
  })
};

// fonction de connexion à la bd
exports.initConnection = (connection, next) =>  {
  connection.connect(function(err) {
    if (err) throw err;
    console.log("\n\n\n\nConnected to the database!");
    next()
  });
}


