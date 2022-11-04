const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

// Initialize middleware
// we use to have to install body parser but now it is a built in middleware
// function of express. It parses incoming JSON payload
//app.use(express.json({ extended: false }));
app.get("/",(req,res)=> res.send("Hello, World!"));


app.listen(PORT, () => console.log(`Server started at port ${PORT}`))