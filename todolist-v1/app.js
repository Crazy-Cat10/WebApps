const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
var items=[];
var workItems=[];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  let day=date.getdate();
  res.render("list",{listName:day,newListItem:items});
  });
  app.post("/",function(req,res){
  var item=req.body.newItem;
  if(req.body.list==="Work")
  {
    workItems.push(item);
    res.redirect("/work");
  }
  else
{  items.push(item);
  res.redirect("/");}
  console.log(item);
  });
  app.get("/work",function(req,res)
  {
    var list="Work List";
    res.render("list",{listName:list,newListItem:workItems});
  });
  app.post("/work",function(req,res){
  var item=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
  console.log(item);
  });
  app.get("/about",function(req,res)
{
  res.render("about");
});
app.listen(3000,function(){
  console.log("Port 3000");
});
