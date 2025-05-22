const express= require('express');
const uploadRoutes=require('./src/routes/upload.routes');

const app=express();
const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use('/api/upload', uploadRoutes);

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));