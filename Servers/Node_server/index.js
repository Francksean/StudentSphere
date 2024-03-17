const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');

const setter = require('./middlewares/setter')

const auth = require('./middlewares/auth');

const multer1 = require('./middlewares/profils-multer-config')

const multer2 = require('./middlewares/pastEvents-multer-config')

const multer3 = require('./middlewares/Events-multer-config')

//import des routers des différentes entités
const eventsRouter = require('./routes/events-router')
const productsRouter = require('./routes/products-router');
const usersRouter = require('./routes/users-router');

const app = express();

app.use(express.json())
app.use(cors());

// mon "contrôlleur" pour les différentes routes


app.use('/users', setter.setReqHeader, auth.verifyToken, usersRouter);
app.use('/events', setter.setReqHeader, auth.verifyToken, eventsRouter);
app.use('/products', setter.setReqHeader, auth.verifyToken, productsRouter);
app.use('/ImagesProfils', multer1);
app.use('/ImagesEventsPast', multer2);
app.use('/ImagesEvents', multer3);

// toute première requête lancée par le client pour récupérer son token
app.get("/getToken/:userId", (req, res) => {
  const { userId } = req.params;
  const token = jwt.sign({ userId : userId },'your-secret-key', {
    "expiresIn" : "5d"
  })
  res.json(token)

})

app.listen(3000, () => {
  console.log("\n\n\n\nServer started on port 3000");
});

