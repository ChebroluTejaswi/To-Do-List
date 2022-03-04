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
    name: String,
    priority: String
}
// model
const Item = mongoose.model("Item",itemsSchema);
const item1 = new Item({
    name: "Hit the Add button to add a new item.",
    priority: "low"
});
const defaultItems=[item1];
const listSchema ={
    name: String,
    priority: String,
    items: [itemsSchema]
};
const List =mongoose.model("List",listSchema);

//--------------------------------------------------------------------------------- 

var itemsLeft=0; 

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
            res.render('list', { newItems: foundItems,score:0,itemsleft: foundItems.length })
        }
    });
});

app.post("/",function(req,res){

    console.log(req.body);
    const itemName=req.body.newItem;
    const itemPriority=req.body.priority;
    const item = new Item({
        name: itemName,
        priority: itemPriority
    });
    item.save();
    res.redirect("/");
});

app.post("/update",function(req,res){
    const checkedItemIdRemove = req.body.remove;
    const checkedItemIdModify = req.body.modify;

    if(checkedItemIdRemove!=undefined)
    {
        Item.findByIdAndRemove(checkedItemIdRemove, function(err){
            if(!err)
            {
                console.log("Successfully deleted checked item.");
                res.redirect("/");
            }
        });
    }
    else
    {
        console.log("Edit function yet to be done!");
    }
    
})
//--------------------------------------------------------------------------------- 

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

