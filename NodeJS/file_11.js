// doing multiple tasks

const { readFile } = require('fs')

const getText = (path) => {
    // promise funtion
    return new Promise((resolve, reject) => {
        readFile('./content/c_file_1.txt', 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

getText('./content/c_file_1.txt').then((result) => console.log(result)).catch((err) => console.log(err))