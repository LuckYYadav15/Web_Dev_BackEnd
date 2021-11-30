const express = require('express');

const router = express.Router();
// thid address is to be passed in browser to access this page and for this route function it is mentioned in app.js file line:
// admin/add-product  => GET
router.get('/add-product',(req, res, next) => {
    res.send('<form action ="/admin/product" method = "POST" ><input type = "text" name = "title"><button type= "submit">Add Product</button></form>')
});

// admin/add-product => POST
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;