const multer = require ('multer');

const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg' : 'jpg',
    'image/png' : 'png'
};

const storage = multer.diskStorage ({
    destination : (req, file, callback) => {
        console.log('ok multer')
        callback (null, './Images/ImagesProfils') 
    },
    filename : (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES [file.mimetype];
        callback (null, name + Date.now() + '.' + extension);
        console.log("fin multer")
    }
});

module.exports = multer({storage: storage}).single('Image');