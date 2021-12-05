const rootDir = require('./utils/local_path')

const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views'); 

const adminData = require('./routes/admin_1');

const shopRouters = require('./routes/shop_1');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);

app.use(shopRouters);

app.use((req, res, next) =>{

    res.status(404).render('page-not-found',{pageTitle: 'Page Not Found'});
})

app.listen(3000);