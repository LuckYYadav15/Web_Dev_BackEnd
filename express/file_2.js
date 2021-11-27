// API Vs SSR
// API-json -> javascript object notation  {RES.JSON()}
// SSR-template -> send tempelate  {RES.RENDER()}
// if shows error then copy the "express" folder on desktop to run the file

const express = require('express');
const app = express();

const {products} = require('./data');

// app.get('/', (req, res)=>{
//     res.json({name: 'janam'}, {name: 'jaadu'})
// })

// app.get('/', (req, res)=>{
//     res.json(products);
// })

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href = "/api/products"> products</a>');
})
// to setup get request for /api/products resource in this function it just shows the id, image ane name not the entire discription so it looks good

app.get('/api/products', (req, res)=>{
    const newProducts = products.map((products) =>{
        const {id, name, image} = products;
        return{id, name, image}
    })
    res.json(newProducts)
})

// now to get discription of produc 1
app.get('/api/products/1', (req, res)=>{
    const singleProduct = products.find((product) => product.id ===1)
    res.json(singleProduct)
})

// discription of product 2
app.get('/api/products/2', (req, res)=>{
    const singleProduct = products.find((product) => product.id ===2)
    res.json(singleProduct)
})


// discription of product 3
app.get('/api/products/3', (req, res)=>{
    const singleProduct = products.find((product) => product.id ===3)
    res.json(singleProduct)
})


// discription of product 4
app.get('/api/products/4', (req, res)=>{
    const singleProduct = products.find((product) => product.id ===4)
    res.json(singleProduct)
})




app.listen(5000, () =>{
    console.log("Server is listerning  on port 5000");
})