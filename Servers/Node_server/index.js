const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');

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

app.use('/comments', auth.verifyToken, commentsRouter);
app.use('/shop', auth.verifyToken, productsRouter);
app.use('/events', auth.verifyToken, multer, eventsRouter);
app.use('/likes', auth.verifyToken, likesRouter)

// toute première requête lancée par le client pour récupérer son token
app.post("/getToken", (req, res) => {
  const { userId } = req.body;
  const token = jwt.sign({ userId : userId },'your-secret-key', {
    "expiresIn" : "1d"
  })
  res.json(token)

})

app.listen(3000, () => {
  console.log("\n\n\n\nServer started on port 3000");
});

