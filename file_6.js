// Read and write file
const {readFileSync, writeFileSync, chownSync} = require('fs');

const first = readFileSync('./content/c_file_1.txt','utf-8');
const second = readFileSync('./content/c_file_2.txt', 'utf-8');
console.log(first, second);

writeFileSync('./content/c_file_3.txt', `Content of c_file_3 goes here`);
writeFileSync('./content/c_file_3.txt', ` This content is being appended to file.`, {flag: 'a'});
const third = readFileSync('./content/c_file_3.txt','utf-8');
console.log(third);