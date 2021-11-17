// syncronus Read and Write
const { readFile, writeFie} = require('fs');
readFile('./content/c_file_1.txt', 'utf8', (err, result) =>
{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result);
})