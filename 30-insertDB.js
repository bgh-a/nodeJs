//引入mongodb
var MongoClient = require('mongodb').MongoClient;

//mongodb的端口号和数据库名字，如果数据库不存在会被创建
var dburl = 'mongodb://localhost:27017/';

//链接数据库
MongoClient.connect(dburl,{ useNewUrlParser: true }, function(err, db) {
	if(err){
		console.log("错误！数据库没有链接成功！");
		console.log("你mongod了么？请使用mongod --dbpath 先开机！");
		return;
	}

	console.log("数据库连接成功");
	var dbo = db.db("xuesheng");

	//插入数据的标准写法：
	dbo.collection("quanzhan").insertOne(
		{
			"xingming": "刘备",
			"nianling": 12,
			"xingbie" : "男"
		},
		function(err,r){
			//回调函数
			if(err){
				console.log("插入数据失败！");
				return;
			}

			//r是所有的数据库变动信息，常用的r.insertedCount表示插入的条目数量
			console.log("成功插入了" + r.insertedCount + "条数据");

			//关闭数据库
			db.close();
		}
	)
});