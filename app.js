const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const http =  require('http');
const errorhandler = require('./middleware/errorhandler');
const connectdb = require("./config/dbconnection.js")
connectdb();  
// const server = http.createServer((req,res)=>{
//     res.end(`<h1>hello</h1>`)
// })

app.use(express.json())
app.use("/api/contacts" , require("./routes/contactroute"));
app.use(errorhandler)
 
const port = process.env.PORT || 5000
app.listen(port , () => {
    console.log(`server listening at ${port}`)
}) 