// building servers
// express.js
const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homepage = readFileSync('./content/1_home_page.html');
const server = http.createServer((req, res) => {
    // console.log('user hit the server');
    // res.end('all files have been sent sucessfully.');
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url;

    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homepage);
        res.end();
    }
    // about page
    else if (url === '/about') 
    {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About page </h1>');
        res.end();
    }
    // error (404)
    else
    {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page not found </h1>');
        res.end();

    }


})

server.listen(5000);