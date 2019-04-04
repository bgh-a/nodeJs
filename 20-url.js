var http = require('http');

var fs = require('fs');
var url = require('url');


var server = http.createServer((req,res)=>{
    // 转为对象
    var urljson = url.parse(req.url,true);
    console.log(urljson);
    res.end();
})
server.listen(3000);
console.log("服务器已经运行在3000端口");
