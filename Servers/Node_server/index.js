const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const setter = require('./middlewares/setter')
=======
const jwt = require('jsonwebtoken')

const setter = require('./middlewares/setter')
const auth = require('./middlewares/auth')
>>>>>>> 917331285ecb52be47948c71dc801d67976791e7


//import des routers des différentes entités
const eventsRouter = require('./routes/events-router')
const productsRouter = require('./routes/products-router');
const commentsRouter = require('./routes/comments-router');

const app = express();

app.use(express.json())
app.use(cors());

// mon "contrôlleur" pour les différentes routes
<<<<<<< HEAD
app.use('/comments', setter.set, commentsRouter());
app.use('/shop', setter.set, productsRouter());
app.use('/events', setter.set, eventsRouter());
=======
app.use('/comments', auth.verifyToken, setter.setParams, commentsRouter, setter.closeDBConnection );
app.use('/shop', auth.verifyToken, setter.setParams, productsRouter, setter.closeDBConnection);
app.use('/events', auth.verifyToken, setter.setParams, eventsRouter, setter.closeDBConnection);

app.post("/getToken", (req, res) => {
  const { userId } = req.body;
  const token = jwt.sign({ userId : userId },'your-secret-key')
  res.json(token)

})
>>>>>>> 917331285ecb52be47948c71dc801d67976791e7

app.listen(3000, () => {
  console.log("\n\n\n\nServer started on port 3000");
});

