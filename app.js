const express = require("express");

const bodyParser = require("body-parser");
const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    var tooday = new Date();

    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = tooday.toLocaleDateString("en-US", option);
    

    res.render("list", {kindOfDay: day, newListItems :items})
});


app.post("/", function(req,res){
    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
    
})


app.listen("3000", function(req,res){
    console.log("Server started on port 3000");
});