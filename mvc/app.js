var express = require("express");
var app = express();
var formidable = require("formidable");
var fs = require("fs");

// 当有人用post请求访问/baocun 的时候做的事情
app.post("/baocun",function(req,res){
    var form = new formidable.IncomingForm();
    // 识别表单，用的是formidable插件
    form.parse(req,function(err,fields){
        console.log(fields);

        //写入文件，writeFile()表示覆盖文件，appendFile表示追击爱文件
        fs.appendFile("./public/nice.txt",JSON.stringify(fields),function(err){
            if(err){
                res.send("-1");
            }else{
                res.send("1")
            }
        })
    })
});

app.use(express.static("public"));
app.listen(3000);
console.log("系统正在运行");