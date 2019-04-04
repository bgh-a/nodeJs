var http = require("http");
var fs   = require('fs');

var server = http.createServer((req,res)=>{
    if(req.url == '/haha'){
        fs.readFile('./haha.html',function(err,data){
            res.end(data);
        })
    }else if(req.url == '/nizi.gif'){
        fs.readFile('./nizi.gif',function(err,data){
            res.end(data);
        })
    }
});

server.listen(3000);
console.log("服务器已经运行在3000端口");
