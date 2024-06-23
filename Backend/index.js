require('dotenv').config()
const express = require("express");
const app = express();

// getting the port number from dotenv
const PORT = process.env.SERVER_PORT_NUMBER;
// basic server setup with specific port
app.listen(PORT, ()=>{
    console.log("Server is running at",PORT,"port");
})