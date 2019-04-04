//引入mongodb
var MongoClient = require('mongodb').MongoClient;

//mongodb的端口号和数据库名字，如果数据库不存在会被创建
var dburl = 'mongodb://localhost:27017/student';

//链接数据库
MongoClient.connect(dburl, function(err, db) {
	if(err){
		console.log("错误！数据库没有链接成功！");
		console.log("你mongod了么？请使用mongod --dbpath 先开机！");
		return;
	}

	console.log("数据库连接成功");

	//对数据库的所有操作，写这里！
	//对数据库的所有操作，写这里！
	//对数据库的所有操作，写这里！
	//对数据库的所有操作，写这里！
	//对数据库的所有操作，写这里！
});