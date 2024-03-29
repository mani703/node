var path = require('path');
console.log(path);
console.log(path.sep, path.delimiter);

var msg = 'c:\\windows\\..\\node\\.\\node20';
// msg = './ex01.js';
console.log(path.resolve('c:\\windows\\..\\node\\.\\node20'));
console.log(path.parse('c:\\windows\\..\\node\\.\\node20'));
console.log(path.format(path.parse(msg)));
console.log(path.isAbsolute(msg));
console.log(path.isAbsolute('./ex01.js'));
console.log('-----------------------------------');
console.log(path.basename(msg));
console.log(path.dirname(msg));
console.log(path.extname(msg));
console.log(path.relative(msg, 'c:\\'));