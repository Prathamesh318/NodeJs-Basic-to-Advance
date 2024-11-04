const express=require('express');
const fs=require('fs');
const path = require('path');


const data=fs.readFileSync('file.txt','utf8');




const app=express();

app.use(express.json());

// const server=app.createServer()

app.listen(3000,()=>{
    console.log(`Server started at port :${3000}`)
})


app.get('/',(req,res)=>{

    res.send("hello world");

})

app.post('/user/:id',(req,res)=>{
    console.log("User ID:",req.params.id);
    const {reqData}=req.body;
    console.log(reqData)
    fs.writeFileSync('file.txt',reqData);
    res.status(200).json({
        id:req.params.id,
        message:"ID successfullt retrieved",
        data:data
    })
});




app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+"/views/login.html"))
    console.log(req.url);
})
