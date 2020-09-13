const express = require("express");
const { response } = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("landing")
})

app.get("/asthetic", (req, res) =>{
    let campgrounds = [
        {name: "Salmon Creek", image: ""},
        {name: "Garanite Hill", image: ""},
        {name: "Ganat camp", image: ""}
    ]
    res.render("asthetic")
})

app.listen(8000, process.env.IP, () =>{
    console.log("servers running")
});
