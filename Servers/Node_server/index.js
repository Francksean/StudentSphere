const express = require('express');
const cors = require('cors');
const setter = require('./middlewares/setter')


// const jwt = require('jsonwebtoken')

// const setter = require('./middlewares/setter')
const auth = require('./middlewares/auth')


//import des routers des différentes entités
const eventsRouter = require('./routes/events-router')
const productsRouter = require('./routes/products-router');
const commentsRouter = require('./routes/comments-router');

const app = express();

app.use(express.json())
app.use(cors());

// mon "contrôlleur" pour les différentes routes

// app.use('/comments', setter.setParams, commentsRouter());
// app.use('/shop', setter.setParams, productsRouter());
// app.use('/events', setter.setParams, eventsRouter());

app.use('/comments', auth.verifyToken, setter.setParams, commentsRouter());
app.use('/shop', auth.verifyToken, setter.setParams, productsRouter());
app.use('/events', auth.verifyToken, setter.setParams, eventsRouter());

app.post("/getToken", (req, res) => {
  const { userId } = req.body;
  const token = jwt.sign({ userId : userId },'your-secret-key')
  res.json(token)

})

app.listen(3000, () => {
  console.log("\n\n\n\nServer started on port 3000");
});

