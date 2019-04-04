var path = require('path');

// 解析当前目录
var workDir = path.resolve('');
// console.log(workDir);
// 组合完整的文件路径：当前的目录+'pub'+'index.html'

var filePath = path.join(workDir,'pub','index');
 console.log(filePath);
