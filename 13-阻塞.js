var fs = require("fs");

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log("程序执行结束！");