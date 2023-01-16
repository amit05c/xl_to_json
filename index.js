const express= require("express")
const { connection } = require("./config/db")
const app=express()
app.use(express.json())

app.listen(8080,async()=>{
    try{
    await connection
    console.log("connected to db")
    }catch(err){
     console.log("err")
    }
})