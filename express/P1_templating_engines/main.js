// to be used with (admin_1 and shop_1) from Routes folder
const rootDir = require('./utils/local_path')

const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

//tempelating engines: 1.ejs  2. pug  3. express-handlebars

app.set('view engine', 'pug');
app.set('views', 'views');  // where to find the templates

const adminData = require('./routes/admin_1');

const shopRouters = require('./routes/shop_1');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));
// use /admin/add-product on browser

app.use('/admin',adminData.routes);

app.use(shopRouters);

app.use((req, res, next) =>{

    //res.status(404).sendFile(path.join(rootDir,'views','page-not-found.html'));

    res.status(404).render('page-not-found',{pageTitle: 'Page Not Found'});
})

app.listen(3000);