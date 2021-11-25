// synchorous and Asynchorous methods
// promises

const fetchdata = callback =>{
    setTimeout(() => {
        callback("Done!")
    }, 2000);
}

setTimeout(() => {
    console.log("Timer is done.");
    fetchdata(text => {
        console.log(text);
    })
}, 2000);

console.log("hello");
console.log("hi")