// home and about section
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/')
    {
        res.end('Hello World, This is our Homepage.');
    }
    if(req.url === '/about')
    {
        res.end("This is our about section and you'll know about us.")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href = "/">Back to home page </a>
    `)
})

server.listen(5000)