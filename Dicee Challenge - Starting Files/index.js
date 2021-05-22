var randomnumber1=Math.ceil(Math.random()*6.0);
var randomnumber2=Math.ceil(Math.random()*6.0);
var image1=document.querySelector(".img1");
image1.setAttribute("src","images/dice"+randomnumber1+".png");
var image2=document.querySelector(".img2");
image2.setAttribute("src","images/dice"+randomnumber2+".png");

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomnumber1===randomnumber2)
{
  document.querySelector("h1").innerHTML="Draw";
}
else
{
  document.querySelector("h1").innerHTML="Player2 Wins";
}
