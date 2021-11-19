const {readFile, writeFile} = require('fs')

console.log("start.");
readFile('./content/c_file_1.txt','utf-8', (err, result)=>
{
    if(err){(paremeter) ;err: NodeJS.Exception
    console.log(err);
    return
}
const first = result
readFile('./content/c_file_2.txt','utf-8',(err,result) =>{
    if(err)
    {
        console.log(err);
        return;
    }
    const second = result;
    writeFile('./content/c_file_3.txt',". Asynchorous approach", (err, result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        console.log('done with the task.')
    })
})
})
console.log('starting new task............')