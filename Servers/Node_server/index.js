const express = require('express');
const cors = require('cors');

//import des routers des différentes entités
const eventsRouter = require('./routes/eventsRouter')
const productsRouter = require('./routes/productsRouter');
const commentsRouter = require('./routes/commentsRouter');

const app = express();

app.use(express.json())
app.use(cors());

// mon "contrôlleur" pour les différentes routes
app.use('/comments', commentsRouter());
app.use('/shop', productsRouter());
app.use('/events', eventsRouter());

app.listen(3000, () => {
  console.log("\n\n\n\nServer started on port 3000");
});

