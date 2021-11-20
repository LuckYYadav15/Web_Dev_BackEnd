// Project-1

const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homepage = readFileSync('./content/nav-bar/index.html');
const homestyle = readFileSync('./content/nav-bar/styles.css');
const homelogo = readFileSync('./content/nav-bar/logo.svg');
const homelogic = readFileSync('./content/nav-bar/browser-app.js');
const server = http.createServer((req, res) => {
    console.log(req.url);
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
    // styles
    else if (url === '/styles.css') 
    {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homestyle);
        res.end();
    }
    // image/ logo

    else if (url === '/logo.svg') 
    {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(homelogo);
        res.end();
    }
    // logic
    else if (url === '/browser-app.js') 
    {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homelogic);
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