const express = require('express');
const { stat } = require('fs');
const app = express();
const path =require('path');

const PORT = process.env.PORT||3000;

const static = path.join(__dirname)
app.use(express.static(static));
app.get('/',(req,res)=>{
    res.sendFile('index.html');
});

app.listen(PORT,()=>{
    console.log(`server is listening at PORT http://localhost:${PORT}`);
})