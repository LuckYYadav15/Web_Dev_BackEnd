// importing funcions from other file

const data = require("./file_1");
const fun_r = require("./file_2")
fun_r("Kattapa");
fun_r(data.roll);
fun_r(data.rahul);
console.log(data);
console.log("This output is from file_4");
const data = require('./file_4');
console.log(data);
