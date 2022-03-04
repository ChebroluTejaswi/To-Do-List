const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// Connection to mongo database
// mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser: true});

//--------------------------------------------------------------------------------- 

app.get("/",function(req,res){
    res.render('list');
});

//--------------------------------------------------------------------------------- 

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

