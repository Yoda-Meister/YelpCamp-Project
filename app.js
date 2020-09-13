const express = require("express");
const { response } = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.send("home page")
})

app.listen(8000, process.env.IP, () =>{
    console.log("servers running")
});