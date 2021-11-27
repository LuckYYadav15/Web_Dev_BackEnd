// to be used with (admin_1 and shop_1) from Routes folder
const rootDir = require('./utils/local_path')

const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin_1');

const shopRouters = require('./routes/shop_1');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));
// use /admin/add-product on browser
app.use('/admin',adminRoutes);

app.use(shopRouters);

app.use((req, res, next) =>{
    //res.status(404).sendFile(path.join(__dirname,'../','views','page-not-found.html'));

    res.status(404).sendFile(path.join(rootDir,'views','page-not-found.html'));
})

app.listen(3000);