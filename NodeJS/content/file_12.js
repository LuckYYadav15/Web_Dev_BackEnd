// doing multiple tasks with better syntex than in file_11

// const { readFile , writeFile} = require('fs')

// const util = require('util');

// const readFilePromise = util.promisify(readFile); // does same thing as promise funtin below....
// const writeFilePromise = util.promisify(writeFile); // to write file
// use readFilePromise in place of readfile in try method


const {readFile, writeFile} = require('fs').promises

// try and catch block....
const start = async () => {
    try {
        const first = await readFile('./content/c_file_1.txt', 'utf-8');
        const second = await readFile('./content/c_file_2.txt', 'utf-8');
        await writeFile('./content/c_file_4.txt', " This text is created by file_12.");// overwriting
        await writeFile('./content/c_file_4.txt', " This text is added by file_12 as we used flag : a.",{flag: 'a'}); // adds to existing file content

        console.log(first, second);
    } catch (error) {
        console.log(error)
    }

}

start();