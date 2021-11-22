// JS is synchronous and single threaded 


// console.log('first task')
// console.time()
// for(let i = 0; i< 1000000; i++)
// {
//     const h1 = document.querySelector('h1')
//     h1.textContent = 'Hey there how are you'
// }

// console.timeEnd()
// console.log('next task')

//Offload
console.log('first task')
setTimeout(() => {
    console.log('second task')
}, 0)
// behaves differently if 0 is replaced by 2000

console.log('next task')

setInterval(() => {
    console.log("I will run first.")
}, 2000);

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("request event")
    res.end("Hello World")
})

server.listen(5000, () =>{
    console.log('Server is listerning on port : 5000.......')
})