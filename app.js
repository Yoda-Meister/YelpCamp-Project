const express = require("express"),
     rp       = require("request-promise"),
     app      = express(),
     bodyParser = require("body-parser"),
     mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const aestheticSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Aesthetics = mongoose.model("Aesthetics", aestheticSchema);

// Aesthetics.create(
//     {
//         name: "Garanite Hill",
//         image: "https://i.ytimg.com/vi/-ROAj71OiUU/maxresdefault.jpg"
//     },(err,aesthetic) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(aesthetic);
//         }
//     });

app.get("/", (req, res) =>{
    res.render("landing")
})

app.get("/aesthetic", (req, res) =>{
    Aesthetics.find({}, (err,aesthetic) => {
        if (err) {
            console.log(err);
        } else {
            res.render("aesthetic", {aesthetic:aesthetic});
        }
    })
});

app.get("/aesthetic/new", (req, res) =>{
    res.render("new.ejs")
});

app.post("/aesthetic", (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const newArt = {name: name, image: image}
    Aesthetics.create(newArt, (err, newlyCreated) =>{
        if (err) {
            console.log(err);
        } else {
            res.redirect("/aesthetic");
        }
    } )
});

app.listen(8000, process.env.IP, () =>{
    console.log("servers running")
});
