const uploadService = require('../services/upload.service');

const uploadFile= async(req, res)=>{
    try {
        if(!req.file){
            return res.status(400).json({message: 'No file uploaded'})
        }

        const fileInfo = await uploadService.saveFile(req.file);
        res.status(200).json({
            message: 'File upload successfully',
            file: fileInfo,
        });
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {uploadFile};