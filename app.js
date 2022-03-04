const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// Connection to mongo database
mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser: true});
// Schema
const itemsSchema = {
    name: String
}
// model
const Item = mongoose.model("Item",itemsSchema);
const item1 = new Item({
    name: "Hit the Add button to add a new item."
});
const defaultItems=[item1];
const listSchema ={
    name: String,
    items: [itemsSchema]
};
const List =mongoose.model("List",listSchema);

//--------------------------------------------------------------------------------- 

app.get("/",function(req,res){

    Item.find({},function(err, foundItems){
        if(foundItems.length === 0)
        {
            Item.insertMany(defaultItems,function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("Successfully saved your default items to DB");
            }
            });
            res.redirect("/");
        }
        else{
            res.render('list', { newItems: foundItems,score:0,itemsleft: 0 })
        }
    });
});

app.post("/",function(req,res){

    const itemName=req.body.newItem;
    const item = new Item({
        name: itemName
    });
    item.save();
    res.redirect("/");
});

app.post("/delete",function(req,res){
    const checkedItemId = req.body.close;
    const listName = req.body.listName;
    Item.findByIdAndRemove(checkedItemId, function(err){
        if(!err)
        {
            console.log("Successfully deleted checked item.");
            res.redirect("/");
        }
    });
})

//--------------------------------------------------------------------------------- 

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

