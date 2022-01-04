const cookieParser = require('cookie-parser');

exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req.get('Cookie').split('=')[1] === 'true';
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        // isAuthenticated: isLoggedIn
        isAuthenticated: false
    });
};
exports.postLogin = (req, res, next) => {
    //res.cookie("loggedIn", 'true');
    req.session.isLoggedIn = true;
    res.redirect('/');
};