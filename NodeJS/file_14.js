// running data files of size in Mb on server

// const { writeFileSync } = require('fs');
// for(let i = 0; i<100000; i++)
// {
//     writeFileSync('./content/c_bigfile.txt', `this is a big file ${i}\n`, {flag: 'a'});
// }

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    // with this code.(without stream method) we are getting Content-Length: 3490230 which is too large..

    // const text = fs.readFileSync('./content/c_bigfile.txt', 'utf-8');
    // res.end(text);          // to print the outcome


    // stream method
    const fileStream = fs.createReadStream('./content/c_bigfile.txt', 'utf-8');
    fileStream.on('open',() => {
        fileStream.pipe(res); // to print
    })
    fileStream.on('error',(err)=> {
        res.end(err);
    })
})
.listen(5000)

// end of section(1. done with node fundamentals 2. next stop creating servers.)