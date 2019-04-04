var fs = require('fs');

fs.readFile('nizi.gif',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        var text = data.toString('utf-8');
        var buf = Buffer.from(text,'utf-8');
        console.log(buf);
        console.log(text);
        console.log(data.length+'bytes');
    }
})