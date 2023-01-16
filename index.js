const express= require("express")
const { connection } = require("./config/db")
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const app=express()
app.use(express.json())

app.post("/",(req,res)=>{
  console.log(req)
  res.send("done")
})

app.listen(8080,async()=>{
    try{
    await connection
    console.log("connected to db")
    }catch(err){
     console.log("err")
    }
})