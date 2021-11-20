// streams : writeable, readable, duplex, transform
// earlier we used const to read files but if files are too large than a const value cannot read it, for that we need stream

// const { writeFileSync } = require('fs');
// for(let i = 0; i<10000; i++)
// {
//     writeFileSync('./content/c_bigfile.txt', `this is a big file ${i}\n`, {flag: 'a'});
// }


const {createReadStream} = require('fs');

const stream = createReadStream('./content/c_bigfile.txt');
// to edit amount of data to be read default: 64kb, changed to 90kb
//const stream = createReadStream('./content/c_bigfile.txt', {highWaterMark: 90000, encoding: 'utf8',});// reads 90kb of data


stream.on('data', (result) => {
    console.log(result);
})

// checks for error
stream.on('data', (err) => console.log(err));