const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix= `${Date.now()}-${Math.round(Math.random()*1E9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});


const fileFilter = (req, file, cb) =>{
    const allowedTypes = /jpeg|jpg|png|bmp|gif|pdf|webp|mp4|docx/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);

    if(extName && mimeType){
        return cb(null, true);
    } else{
        cb(new Error('Only images, documents, and media files are allowed'))
    }
};


const upload = multer({
    storage,
    limits: {fileSize: 1024 * 1024 * 1024},
    fileFilter,
})

module.exports = upload;