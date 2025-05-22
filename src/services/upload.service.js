const saveFile=async (file)=>{
    return{
        filename: file.filename,
        path: file.path,
        size: file.size,
        mimeType: file.mimetype,
    };
};

module.exports = {saveFile};