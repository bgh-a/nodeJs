var http = require("http");

var server = http.createServer(function(request,response){
    // 发送http头部
    // http状态值:200:ok
    response.writeHead(200,{'Content-Type':'text/html'});

    // 发送响应数据"Hello World"
    response.end("Hello World");

});
server.listen(9090);


// 终端打印如下信息
console.log("服务器正在运行")