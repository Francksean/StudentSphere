const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const userRouter = require('./routes/usersRouter');

const app = express();

app.use(express.json())
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: "studentspherebdd"
});

app.use('/users', userRouter(connection));

app.listen(3000, () => {
  console.log("\n\n\n\n server started on port 3000");
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database!");
  });
});

module.exports = connection;
