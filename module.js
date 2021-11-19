// Os library
const os = require('os')

// current user
const user = os.userInfo();
console.log(user)

// returns sustem uptime in seconds
console.log(`system uptime is ${os.uptime()} seconds`)

const funOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(), 
    freemem: os.freemem(),
}

console.log(funOs);