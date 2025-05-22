const express = require('express');
const router=express.Router();
const upload=require('../middleware/multerConfig');
const {uploadFile}= require('../controllers/upload.controller');

router.post('/', upload.single('file'), uploadFile);

module.exports = router;