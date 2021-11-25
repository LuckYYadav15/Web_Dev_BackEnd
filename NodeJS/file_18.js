const fetchdata = callback => {
    const promise = new Promise((req, res) =>{
        setTimeout(() => {
            req("Done!!")
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log("timer is done.");
    fetchdata().then(text => {
        console.log(text);
        return fetchdata()// to be used for the next call
    })
    .then(text2 =>{
        console.log(text2);
    });
    
}, 2000);

console.log("hello");
console.log("hi")