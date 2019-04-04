var http = require("http");

var server = http.createServer(function(req,res){
	//来一个访问者，就随机一个数字
	var num = parseInt(Math.random() * 10000);
	//如果随机到了6666，则主动抛出错误
	if(num === 6666){
		throw new Error("错误！6666出现了！这个人的IP地址是" + req.connection.remoteAddress);
	}

	res.end("你的数字是" + num);
});


server.listen(3000);
console.log("服务器已经运行在3000端口");