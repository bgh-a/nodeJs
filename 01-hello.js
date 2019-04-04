'use strict';

var s = 'Hello';

function greet(name){
    console.log(s+','+name+'!');

}
//在这个规范下，每个.js文件都是一个模块，他们内部各自使用的变量名和函数名都互不冲突，例如，hello.js和main.js都申明了全局变量var s = "xxxx",但互不影响
module.exports = greet;