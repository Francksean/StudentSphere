const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');

const setter = require('./middlewares/setter')

const auth = require('./middlewares/auth');

const multer = require ('./middlewares/multer-config');

//import des routers des différentes entités
const eventsRouter = require('./routes/events-router')
const productsRouter = require('./routes/products-router');
const commentsRouter = require('./routes/comments-router');
const likesRouter = require('./routes/likes-router')

const app = express();

app.use(express.json())
app.use(cors());

// mon "contrôlleur" pour les différentes routes

app.use('/comments', setter.setReqHeader, auth.verifyToken, commentsRouter);
app.use('/shop', setter.setReqHeader, auth.verifyToken, productsRouter);
app.use('/events', setter.setReqHeader, auth.verifyToken, multer, eventsRouter);
app.use('/likes', setter.setReqHeader, auth.verifyToken, likesRouter)

// toute première requête lancée par le client pour récupérer son token
app.get("/getToken/:userId", (req, res) => {
  const { userId } = req.params;
  const token = jwt.sign({ userId : userId },'your-secret-key', {
    "expiresIn" : "1d"
  })
  res.json(token)

})

app.listen(3000, () => {
  console.log("\n\n\n\nServer started on port 3000");
});

