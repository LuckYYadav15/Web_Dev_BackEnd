const path = require('path');

const express = require('express');

const rootDir = require('../utils/local_path')

const adminData = require('./admin_1');

const router = express.Router();

router.get('/',(req, res, next) => {
    const products = adminData.products;
    console.log('shop.js',adminData.products);
    //sending to html file
    // res.sendFile(path.join(rootDir,'views','shop.html'));

    // sending to pug file
    res.render('shop',{prods: products, docTitle: 'Shop'});   // shop.pug
});

module.exports = router;