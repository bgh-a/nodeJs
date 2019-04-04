var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("xuesheng");
    dbo.collection("quanzhan").updateOne(
        {"name":"菜鸟工具"},{$set : {"url":"houakang"}
  ,function(err,r){
          //回调函数
          if(err){
              console.log("查询数据失败！");
              return;
          }
  
          console.log("成功");
  
          //关闭数据库
          db.close();
      }
    });
    });