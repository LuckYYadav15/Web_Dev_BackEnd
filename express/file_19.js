// Route Params :- used to iterate mutilple files to open as in file_19
// if shows error then copy the "express" folder on desktop to run the file


const express = require('express');
const app = express();

const {products} = require('./data');


app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href = "/api/products"> products</a>');
})


app.get('/api/products', (req, res)=>{
    const newProducts = products.map((products) =>{
        const {id, name, image} = products;
        return{id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res)=>{
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    // default case
    if (!singleProduct) {
        return res.status(404).send("Product Does Not Exist.")
    }
    res.json(singleProduct)
})

// nesting things with review and review id
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send("This is a review........")
})



app.listen(5000, () =>{
    console.log("Server is listerning  on port 5000");
})