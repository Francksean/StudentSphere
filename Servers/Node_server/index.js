const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const articleRouter = require('./routes/articlesRouter');

const app = express();

app.use(express.json())
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: "studentspherebdd"
});

app.use('/shop', articleRouter(connection));

app.listen(3000, () => {
  console.log("\n\n\n\nserver started on port 3000");
  connection.connect(function(err) {
    if (err) throw err;
    console.log("\n\n\n\nConnected to the database!");
  });
});

module.exports = connection;
