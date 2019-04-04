var express = require("express");
var app = express();

app.get("/",function(req,res){
	res.send("侯阿康");
});

app.listen(3000);