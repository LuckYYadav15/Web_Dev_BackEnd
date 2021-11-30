// uses other two files(admin.js and shop.js) from Routes folder 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');

const shopRouters = require('./routes/shop');
app.use(bodyParser.urlencoded({extended:false}));
// use /admin/add-product on browser
app.use('/admin',adminRoutes);
app.use(shopRouters);

app.use((req, res, next) =>{
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(3000);