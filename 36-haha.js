var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send();
})
app.get('/ha',function(req,res){
    res.sendFile(__dirname+"/public/haha.html");
});


app.listen(3000);