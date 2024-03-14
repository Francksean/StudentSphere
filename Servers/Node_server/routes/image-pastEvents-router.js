const express = require('express');
const multer = require('../middlewares/profils-multer-config');

const app = express();
const upload = multer({ dest: '../ImagesEventsPast' }).single('Image');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('upload');
});

app.post('/ImagesEventsPast', (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log('Une erreur Multer s\'est produite :', err);
        } else if (err) {
            console.log('Une erreur s\'est produite lors de l\'upload :', err);
        } else {
            console.log('L\'upload s\'est terminé avec succès');
        }
        res.send('Upload terminé');
    });
});

app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});