// using file path 
const path = require('path');

console.log(path.sep);
const module_path = path.join('Tutorial', '/file_1.js');

console.log(module_path);
//console.log("getting updated frequently");

const module_absolute_path = path.resolve(__dirname, 'Tutorial', '/file_1.js');
console.log(module_absolute_path);
