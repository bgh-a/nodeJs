var http = require('http');
var fs = require('fs');
var url = require('path');
var querystring = require('querystring');


http.createServer((req,res)=>{
    // 转为对象，将rul字符串变为Json对象

    // res.end(req.url);
    var urljson = url.parse(req.url);

    // 得到文件路径
    var pathname = urljson.pathname;
    
}).listen(3000)