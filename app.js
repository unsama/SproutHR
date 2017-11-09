var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");
var flash = require("connect-flash");
var validator = require("express-validator");
var history = require("connect-history-api-fallback");
//require("./config/passport");

var getCompanies = require('./routes/get_companies');
var userRoutes = require('./routes/user');
var webRoutes = require('./routes/web');
var webSetting = require('./routes/setting');
var webpurchase = require('./routes/purchase');
var webleaves = require('./routes/leaves');
var webrecruitment = require('./routes/recruitment');
//var apiRoutes = require('./routes/api');
var webEmployees = require('./routes/Employees');
var webcontact = require('./routes/contact');
var webattendance = require('./routes/attendance');
var compression = require('compression');

var app = express();
app.use(compression());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(validator());
app.use(cookieParser());
app.use(session({secret: "This is Sprout Secret!", resave: false, saveUninitialized: false}));
app.use(flash());
//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 86400000*365 }));

/*app.use(function(req, res, next){
 res.locals.login = req.isAuthenticated();
 if(req.isAuthenticated()){
 res.locals.full_name = req.user.full_name;
 }
 next();
 });*/


//AZEEM ULLAH's CODE
var connectRoutes = require('./routes/connect-4Slash');
var crypto   = require('crypto');
//var csrf = require('csurf');
/* Login script */

var sess  = require('express-session');
var Store = require('express-session').Store;
var BetterMemoryStore = require('./config/memory');
var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

app.use(sess({
    name: 'JSESSION',
    secret: 'MYSECRETISVERYSECRET',
    store:  store,
    resave: true,
    saveUninitialized: true,
    maxAge: 200000000
}));
app.use(validator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.'), root = namespace.shift(), formParam = root;
        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));
app.use(flash());

var connection = require('./routes/db_conn');
app.use('/get-companies', getCompanies);
app.use('/', webRoutes);
app.use('/connect-4slash', connectRoutes);
//ENDS HERE
app.use('/user', userRoutes);
app.use('/contact', webcontact);
app.use('/attendance', webattendance);
app.use('/employees', webEmployees);

app.use(history({
    rewrites: [
        { from: /\/sales/, to: '/sales'},
        { from: /\/contact/, to: '/contact'},
        { from: /\/attendance/, to: '/attendance'},
        { from: /\/purchase/, to: '/purchase'},
        { from: /\/employees/, to: '/employees'},
        { from: /\/accounting/, to: '/accounting'},
        { from: /\/calendar/, to: '/calendar'},
        { from: /\/timesheet/, to: '/timesheet'},
        { from: /\/notes/, to: '/notes'},
        { from: /\/pointofsale/, to: '/pointofsale'},
        { from: /\/repairs/, to: '/repairs'},
        { from: /\/manufacturing/, to: '/manufacturing'},
        { from: /\/inventory/, to: '/inventory'},
        { from: /\/expenses/, to: '/expenses'},
        { from: /\/maintenance/, to: '/maintenance'},
        { from: /\/recruitment/, to: '/recruitment'},
        { from: /\/signup/, to: '/signup'},
        { from: /\/discuess/, to: '/discuess'},
        { from: /\/dashboards/, to: '/dashboards'},
        { from: /\/leaves/, to: '/leaves'},
        { from: /\/test/, to: '/test'},
        { from: /\/projects/, to: '/projects'},
        { from: /\/setting/, to: '/setting'},
        { from: /\/forgot_password/, to: '/forgot_password'},
        { from: /\/email_temp/, to: '/email_temp'},
        { from: /\/password/, to: '/password'},
        { from: /\/clear/, to: '/clear'},
        { from: /\/login/, to: '/login'},

    ]
}));

app.use('/setting', webSetting);
app.use('/purchase', webpurchase);
app.use('/leaves', webleaves);
app.use('/recruitment', webrecruitment);
//app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;


