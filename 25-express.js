var express = require("express");
var app = express();

//路由清单，术语叫做“中间件”
app.get("/",function(req,res){
    // res常用的函数是send和sendFile，  sendFile表示发送一个页面给用户
    // 注意，必须使用绝对路径当参数
    // __dirname表示当前这个js文件的绝对路径
    res.sendFile(__dirname+"/haha.html");
});

//路由清单，术语叫做“中间件”
app.get("/nizi.gif",function(req,res){
    // res常用的函数是send和sendFile，  sendFile表示发送一个页面给用户
    // 注意，必须使用绝对路径当参数
    // __dirname表示当前这个js文件的绝对路径
    res.sendFile(__dirname+"/nizi.gif");
});


//监听
app.listen(3000);
