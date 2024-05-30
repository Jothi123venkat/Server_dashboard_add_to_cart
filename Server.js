const express = require("express");
const cors = require("cors");
const port = 5000;
const bodyparser = require("body-parser");
const mongoose = require("mongoose")
const app = express();
const router = require("./Routes/DashboardRoutes")
app.use(express.json({
    limit:"100mb"
}))

app.use(cors());

app.use(bodyparser.urlencoded({limit:"100mb",extended:true}))


mongoose.connect("mongodb://localhost:27017/Dashboard");

const database = mongoose.connection;

database.on("connected",()=>console.log("database Connected successfully"))
database.on("error",(err)=>console.log("database connection error",+err))

app.use("/",router);


app.listen(port,(req,res)=>{
   console.log("Server is running");
})