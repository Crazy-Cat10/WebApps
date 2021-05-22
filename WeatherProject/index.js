const express=require("express");
const https=require("https");
const app=express();



app.get("/",function(req,res){

  const url="https://api.openweathermap.org/data/2.5/weather?q=jhansi&appid=af5176e418272aa0d44e93fca7a36f7f&units=metric";

https.get(url,function(response){
  console.log(response.statusCode);
  response.on("data",function(data){
    const weatherdata=JSON.parse(data);
    const weatherDescription=weatherdata.weather[0].description;
    res.write("Weather="+weatherDescription);
    res.send();
  });
});

});



app.listen(3000,function(){
  console.log("Port 3000");
});
