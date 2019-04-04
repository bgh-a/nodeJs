// 导入http模块
var http = require('http');

// 创建http server，并传入回调函数
var server = http.createServer(function(request,response){
    // 回调函数接受request和response对象
    // 获得http请求的method和url
    console.log(request.method+ ':'+request.url);
    // 将HTTP响应200写入response，同时设置Content-Type：text/html;
    response.writeHead(200,{'Content-Type':'text/html'});
    // 将Http响应的HTML内容写入response
    response.end("<h1>hello world</h1>")
});


// 让服务器监听9999d端口
server.listen(9999);


console.log("服务器是")