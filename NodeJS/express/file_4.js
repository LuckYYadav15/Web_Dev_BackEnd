// query request

const express = require('express');
const app = express();


//web address: http://localhost:5000/api/v1/query?name=cena&id=15
//http://localhost:5000/api/v1/query?search=a&limit=2

// app.get('/api/v1/query', (req, res) => {
//     console.log(req.query);
//     res.send("hello world")
// })



// web address: http://localhost:5000/api/v1/query?limit=2
// http://localhost:5000/api/v1/query?search=a
// http://localhost:5000/api/v1/query?search=a&limit=1

const {products} = require('./data');

app.get('/api/v1/query',(req, res) =>{
    const {search, limit} = req.query;
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if (sortedProducts.length < 1) {
        //res.status(200).send("no products matched to your search");
        res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})
app.listen(5000, () => {
    console.log("Listening on port 5000")
})