var express = require("express");
var app = express();

//路由清单，术语叫做“中间件”
app.get("/",function(req,res){
	res.send("我是首页");
});

app.get("/music",function(req,res){
	res.send("音乐频道");
});

app.get("/news",function(req,res){
	res.send("新闻频道");
});

app.get("/student/:xuehao",function(req,res){
	res.send("学生频道，学号" + req.params.xuehao);
});

app.get("*",function(req,res){
	res.send("页面不存在");
});

//监听
app.listen(3000);