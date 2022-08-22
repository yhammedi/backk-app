// importation
const express = require("express");

//creation de l'instance
const app = express();

// require dotenv
require('dotenv').config();

// connectDatabase
connectDB = require("./config/connectDB");
connectDB();
// format
app.use(express.json())

// routes
app.use("/api/contacts", require("./Route/contact"));

//creation server
const port = process.env.PORT;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`the server is runing on ${port} `);
});
