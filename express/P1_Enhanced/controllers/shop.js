const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { prods: products, pageTitle: 'All Products', path: '/products', hasProducts: products.length > 0, activeShop: true, productCSS: true });
    });
};

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products) => {
        res.render('shop/index', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true });
    });
};

exports.getCart = (req, res, next)=>{
    Product.fetchAll((products) => {
        res.render('shop/cart', { prods: products, pageTitle: 'Your Cart', path: '/cart', hasProducts: products.length > 0, activeShop: true, productCSS: true });
    });
};

exports.getOrders = (req, res, next)=>{
    Product.fetchAll((products) => {
        res.render('shop/orders', { prods: products, pageTitle: 'Your Orders', path: '/orders', hasProducts: products.length > 0, activeShop: true, productCSS: true });
    });
};

exports.checkout = (req, res, next)=>{
    Product.fetchAll((products) => {
        res.render('shop/checkout', { prods: products, pageTitle: 'Checkout', path: '/checkout', hasProducts: products.length > 0, activeShop: true, productCSS: true });
    });
};