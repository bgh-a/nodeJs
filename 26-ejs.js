var express = require("express");
var app = express();
// 设置默认的模板引擎，此时express将帮你引入ejs、
app.set("view engine","ejs");

app.get('/',function(req,res){
    res.render("shouye",{
        "dongxi":"八部手机",
        "qian":1000*8
    });
});

app.listen(3000);