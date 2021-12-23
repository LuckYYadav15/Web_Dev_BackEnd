const path = require('path');

const express = require('express');

const rootDir = require('../utils/local_path')

const router = express.Router();

router.get('/',(req, res, next) => {
    // without use of local_path file
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;