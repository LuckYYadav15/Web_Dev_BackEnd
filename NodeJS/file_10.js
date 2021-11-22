// Blocking code
// we should use asynchronous method...........
const http = require('http')

const server = http.createServer((req, res) => { 
    if(req.url === '/')
    {
        res.end("Home page");
    }
    if(req.url === '/about')
    {
        // Blocking Code
        for(let i = 0; i < 1000; i++)
        {
            for (let j = 0; j < 1000; j++)      
            {
            console.log(`${i} ${j}`) 
            }
        }
        res.end("About page");
    }
    if(req.url === '/info')
    {
        res.end("Information page");
    }
    res.end("Error")
})