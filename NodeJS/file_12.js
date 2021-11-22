// Events
const EventEmitter = require('events');
const customFEmitter = new EventEmitter();     // object
// on - listern for an event
// emit = emit an event

customFEmitter.on('response',(nameas, id)=>{
    console.log(`data received ${nameas} with id number ${id}`)
});

customFEmitter.on('response',()=>{
    console.log("data received for second time")
});

customFEmitter.emit('response', "Sumon", 33);


// Events in server
const http = require('http');
// using event emitter API
const server = http.createServer();
//emits request event
// subscribe it / listern for it / respond tto it

server.on('request', (req, res) =>{
    res.end('Welcome......');
})

server.listen(5000);