var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");

var server = http.createServer(function(req,res){
    // 得到用户读取什么，比如用户输入http://127.0.0.1/myweb/0.jpg
    var pathname = url.parse(req.url).pathname;
    // 真的读取这个文件
    // 此时就要真的去读取myweb中的0.jpg文件
    fs.readFile('./myweb/'+pathname,function(err,data){
        if(err){
            res.end("没有这个文件");
            return;
        }
        res.end(data);
    })
});
server.listen(3000);

console.log("服务器已经启动");``