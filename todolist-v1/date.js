exports.getdate=function ()
{
var today=new Date();
var options={
  weekday:"long",
  day:"numeric",
  month:"long"
}
var currentday=today.toLocaleDateString("en-US",options);
return currentday;
}
