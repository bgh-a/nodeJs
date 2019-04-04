// 读取内置模块http，这个模块开发服务器用的
var http = require("http");

// 创建一个服务器
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end("<h1>好高兴啊，找到了node的讲义了"+(2+6)+"Plus,我真的是很开心啊！</h1>");
});


// 监听
server.listen(3000);
console.log("服务器开始运行")