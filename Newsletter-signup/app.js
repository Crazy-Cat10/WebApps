const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");


const app=express();
app.use(express.static("puclic"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(rec,res){
  res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
   var name=  req.body.Name;
   var email=req.body.mail;
   const url="https://us7.api.mailchimp.com/3.0/";
var data={
   members:[
     {
       email_address: email,
       status: "subscribed",
       merge_fields:{
         FNAME: name,
         LNAME: name
       }
     }
   ]
 };
 const jsonData=JSON.stringify(data);
 const options={
   method:"POST",
   auth:"archigupta:1c9018363df23c5f43ace6182c882567-us7"
 };
 const request= https.request(url,options,function(response){
   response.on("data",function(data){
     console.log(JSON.parse(data));
   });


 });
 request.write(jsonData);
 request.end();

});
app.listen(3000,function(){
  console.log("port 3000");
});
// e938e7bec1 
// 1c9018363df23c5f43ace6182c882567-us7
