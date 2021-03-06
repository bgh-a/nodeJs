//引入所需要的插件
var express = require('express');
var ejs = require('ejs');
//为express设置接受参数
var app = express();
app.use(express.static('public'));

//识别ejs代码
app.set('view engine','ejs');
//识别css样式,不引入将不知道外部样式表
app.use(express.static('public'));
var data={
  name : '侯阿康',
  sex : '男',
  content : '参数,可以更改'
};
//交互方式
app.get('/',function (req, res) {
    res.render(__dirname+'/public/akang.ejs',data)
});

app.listen(3000);
//另外一种方式:
// app.get('/:id',function (req, res) {
//     res.render('parfile',{person:req.params.id});
// });
//监听 app.listen(3000);