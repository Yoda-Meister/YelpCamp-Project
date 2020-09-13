const express = require("express");
const { response } = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("landing")
})

app.get("/aesthetic", (req, res) =>{
    let aesthetic = [
        {
            name: "Salmon Creek",
            image: "https://i.pinimg.com/originals/1c/74/30/1c743094b32e4fdf2c448bcba8bd4161.jpg"
        },
        {
            name: "Garanite Hill",
            image: "https://i.ytimg.com/vi/-ROAj71OiUU/maxresdefault.jpg"
        },
        {
            name: "Ganat camp",
            image: "https://wallpapercave.com/wp/wp4751466.jpg"
        }
    ]
    res.render("aesthetic", {aesthetic:aesthetic});
})

app.listen(8000, process.env.IP, () =>{
    console.log("servers running")
});
