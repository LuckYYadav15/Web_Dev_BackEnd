const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/local_path')

// thid address is to be passed in browser to access this page and for this route function it is mentioned in app.js file line:
// admin/add-product  => GET
router.get('/add-product',(req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// admin/add-product => POST
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;