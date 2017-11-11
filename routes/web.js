var express = require("express");
var func = require("./../config/func");
var csrf = require("csurf");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var validator = require("express-validator");
var passportlocal = require("passport-local");
var router = express.Router();
var bcrypt   = require('bcrypt-nodejs');
var saltRounds = 10;
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'usama4slash@gmail.com',
        pass: 'usama4slash1234'
    }
});
var mysql = require("mysql");
var database_connection = require('./db_conn');
var connection = mysql.createConnection({
    host: "46.101.37.156",
    user: "sprout",
    password: "sprout12345",
    database: "sprout"
});
require("./../config/passport");
connection.connect(function (err) {
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});
router.get('/yo', function(req, res, next){
    connection.query("INSERT INTO test (name, age, email) VALUES ('Company Inc','545', 'Highway 37')") ;
});
router.get('/clear', function (req, res, next) {
    connection.query('INSERT INTO `user`(`username`) VALUES ("hassan")', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});

        else {
            console.log(err);
            res.send("Something goes wrong!");
        }
    });
});






/*router.get('/', function (req, res, next) {
    var cookie = req.cookies.remember;
    if(typeof cookie === "undefined"){
        res.cookie('remember', "setTheCookieValue", { maxAge: (365*24*60*60*1000), httpOnly: true });
        res.send("Set Cookie ---- ");
    }else{
        console.log(req.cookies);
        res.send("Already in Cookie ---- ");
    }
});

router.get('/clear', function(req, res, next){
    var cookie = req.cookies.remember;
    if(typeof cookie === "undefined"){
        console.log(req.cookies);
        res.send("Cookie is not Set");
    }else{
        console.log(req.cookies);
        res.cookie('remember', '', {expires: new Date(0)});
        res.send("Cookie is clear");
    }
});*/

router.get('/forgot_password', function (req, res, next) {
    var mailOptions = {
        from: '<no-reply@gmail.com>', // sender address
        to: '6737pafkiet@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?'//, // plain text body
        //html: '<b>Hello world ?</b>' // html body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err);
            res.send("Something gose wrong!");
        }
        else {
            res.send("Message "+info.messageId+" sent: "+info.response);

        }

    });
    //  res.render('user/forgot_password', {title: 'Forgot Password', csrfToken: req.csrfToken(), emailSend: true});
});

// npm run build && npm run build_accounting && npm run build_attendance && npm run build_calendar && npm run build_dashboards && npm run build_discuess && npm run build_employees && npm run build_expenses && npm run build_inventory && npm run build_leaves && npm run build_maintenance && npm run build_manufacturing && npm run build_notes && npm run build_pointofsale && npm run build_projects && npm run build_purchase && npm run build_recruitment && npm run build_repairs && npm run build_sales && npm run build_timesheet && build_contactnp
// mkdir Setting Accounting Attendance Calendar Dashboards Discuess Employees Expenses Inventory Leaves Maintenance Manufacturing Notes Pointofsale Projects Purchase Recruitment Repairs Sales Timesheet




// ---------------- ******************* ------------------------------ ************************** ------------------------------
// Azeem Ullah's Code to:
// 1. signin
// 2. session
// 3. privilege authentication
// 4. root redirect


// Destroys session
    router.get('/logout', function(req, res){
        req.session.destroy();
        req.logout();
        res.redirect('/signin');
    });


// Creates session and do the following:
// checks allowed apps of requested company
router.post('/create-session', function(req, res){
    req.session.db_name = req.body.db_name;
    global.connection = database_connection.connection(req.session.db_name);
    global.connection.query("select application_name from sprout_users.companies_allowed_apps where database_name ='"+req.session.db_name+"'", function (error, results) {
        if (error) {
            res.status(500).json({status: "error", message: "Error in database query while creating session."});
        }
        else{
            if(results.length > 0){
                req.session.allowed_apps = results;
                // console.log(req.session.allowed_apps[1].application_name);
                // console.log(req.session.allowed_apps.length);
                res.status(200).json("ok");
            }
            else{
                res.status(110).json({status: "error", message: "No applications registered found."});
            }
        }
        //res.json({status: "error", message: "An unidentidied error occured."});
    });
});


// signin page render
// uses csurf npm pakage and passes a csrf value generated at random
router.get('/signin', csrf(), function(req, res){
    res.render('login/index',{'message' :req.flash('message'), csrf: req.csrfToken()});
});

// signin varification
// csrf varification
// passport.js npm pakage is used
// local starategy is used in passport.js
router.post('/signin', csrf(), function(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        if(error) {
            return res.status(500).json("an error occured");
        }
        if(!user) {
            return res.status(401).json("Crediantials Invalid");
        }
        req.session.user_details = user;
        req.session.username = req.body.username;
        res.status(200).json(user.id);
    })(req, res, next);
});

// route directory redirect
// if user is signed in ie. session is created then redirect to settings dashboard
// if user is not signed in then redirect to signin page
router.get('/', function(req, res, next){
    if(typeof req.session.db_name == 'undefined'){
        res.writeHead(302, {
            'Location': 'signin'
            //add other headers here...
        });
        res.end();
        //window.location = "signin";
    }
    else{
        res.writeHead(302, {
            'Location': 'Setting'
            //add other headers here...
        });
        res.end();
    }
    //res.render('modules/Setting', {title: 'Sprout'});
});

//global temp variable to store allowed apps list
var app_list = [];


// middleware to check all rules and authenticate user or block user.
var privilegeAuthentication = function(req, res, next) {
    //console.log(req.session.db_name);
//return true;
    if(typeof req.session.db_name == 'undefined')
        return res.render('./../views/errors/503.jade');    // 'Service Unavailable 503
    else {
        global.connection.query("select * from user where email= '"+req.session.user_details.email+"'", function (error, results) {
            if (error) {
                console.log(error);
                return res.render('./../views/errors/503.jade');
            }
            else{

                if(results.length > 0) {

                    console.log("results:" + results.length);
                    global.connection.query("select database_name from sprout_users.users_companies where user_id = (select id from sprout_users.users where email = '"+req.session.user_details.email+"' and password = '"+req.session.user_details.password+"') and status='active'", function (error2, results2) {
                        if (error2) {
                            console.log(error2);
                            return res.render('./../views/errors/503.jade');
                        }
                        else{
                            //console.log(results2);
                            if(results2.length > 0) {
                                var str = JSON.stringify(results2);
                                rows = JSON.parse(str);
                                toReturn = false;
                                rows.forEach(function(element) {
                                    if(element.database_name === req.session.db_name && toReturn === false){
                                        toReturn = true;
                                    }
                                });
                                if(toReturn == true){
                                    //console.log("Check notes in privilegeAuthentication");
                                    // create-session k route ma uth k aye ga data from central database and req.session.allowed_apps ma jaye ga.
                                    //request ko process krna hai-- js link pe ja raha hai user wo nikalo
                                    //session sa uthao allowed_apps
                                    // match kro k allowed hai k nahe wo link jahan use jana hai
                                    // agar nahe allow toh toReturn will be false else true.
                                    //all cleared

                                    /*req.session.allowed_apps.forEach(function(entry) {
                                     if(req.originalUrl)
                                     });*/
                                    var str = JSON.stringify(req.session.allowed_apps);
                                    app_list = [];
                                    rows = JSON.parse(str);
                                    rows.forEach(function(element) {
                                        app_list.push(element.application_name);
                                    });
                                    if(app_list.includes(req.originalUrl.replace('/', ''))){
                                        toReturn = true;
                                    }
                                    else{
                                        toReturn = false;
                                    }
                                    //console.log(req.originalUrl.replace('/', ''));
                                    //console.log(app_list);
                                    //console.log("Found: " + found);
                                }
                                //if(results2.indexOf(req.session.db_name) > -1){
                                //console.log(rows[0].database_name);
                                //console.log(rows.indexOf((req.session.db_name)));
                                if(toReturn == true){
                                    next();
                                }
                                else return res.render('./../views/errors/503.jade');
                                //}
                            }
                            else {console.log("no database found.");
                                return res.render('./../views/errors/503.jade');}
                        }
                    });
                    //next();
                }
                else {
                    console.log("i am here");
                    return res.render('./../views/errors/503.jade');
                }
            }
        });
    }
    /*else{
     if(req.route.path.replace('/','') === "Setting"){
     console.log("abc");
     // either do next() if allowed or do return res.render('./../views/errors/503.jade');
     }
     else if(req.route.path.replace('/','')){
     console.log("abcd");
     }else {
     next();
     }
     }
     */
next();
};
router.get("/sales", function(req, res, next){
    res.render('modules/sales', {title: 'Sprout'});
});
router.get("/accounting",function(req, res, next){
    res.render('modules/accounting', {title: 'Sprout'});
});
router.get("/calendar",function(req, res, next){
    res.render('modules/calendar', {title: 'Sprout'});
});
router.get("/dashboards",function(req, res, next){
    res.render('modules/Dashboards', {title: 'Sprout'});
});
router.get("/expenses", function(req, res, next){
    res.render('modules/Expenses', {title: 'Sprout'});
});
router.get("/maintenance", function(req, res, next){
    res.render('modules/Maintenance', {title: 'Sprout'});
});
router.get("/timesheet",function(req, res, next){
    res.render('modules/timesheet', {title: 'Sprout'});
});
router.get("/notes", function(req, res, next){
    res.render('modules/notes', {title: 'Sprout'});
});
router.get("/repairs",function(req, res, next){
    res.render('modules/repairs', {title: 'Sprout'});
});
router.get("/inventory",function(req, res, next){
    res.render('modules/inventory', {title: 'Sprout'});
});
router.get("/manufacturing", function(req, res, next){
    res.render('modules/manufacturing', {title: 'Sprout'});
});
router.get("/leaves", function(req, res, next){
    res.render('modules/leaves', {title: 'Sprout'});
});
router.get("/leaves/*", function(req, res, next){
    res.render('modules/leaves', {title: 'Sprout'});
});
router.get("/employees",function(req, res, next){
    res.render('modules/employees', {title: 'Sprout'});
});
router.get("/employees/*",function(req, res, next){
    res.render('modules/employees', {title: 'Sprout'});
});
router.get("/projects", function(req, res, next){
    res.render('modules/projects', {title: 'Sprout'});
});
router.get("/attendance",function(req, res, next){
    res.render('modules/attendance', {title: 'Sprout'});
});
router.get("/attendance/*", function(req, res, next){
    res.render('modules/attendance', {title: 'Sprout'});
});
router.get("/test", function(req, res, next){
    res.render('modules/test', {title: 'Sprout'});
});
router.get("/recruitment", function(req, res, next){
    res.render('modules/recruitment', {title: 'Sprout'});
});
router.get("/recruitment/*", function(req, res, next){
    res.render('modules/recruitment', {title: 'Sprout'});
});
router.get("/setting", function(req, res, next){
    res.render('modules/Setting', {title: 'Sprout'});
});
router.get("/setting/*", function(req, res, next){
    res.render('modules/Setting', {title: 'Sprout'});
});
router.get("/discuess", function(req, res, next){
    res.render('modules/discuess', {title: 'Sprout'});
});
router.get("/purchase", function(req, res, next){
    res.render('modules/purchase', {title: 'Sprout'});
});
router.get("/purchase/*", function(req, res, next){
    res.render('modules/purchase', {title: 'Sprout'});
});
router.get("/pointofsale", function(req, res, next){
    res.render('modules/Pointofsale', {title: 'Sprout'});
});
router.get("/contact", function(req, res, next){
    res.render('modules/contact', {title: 'Sprout'});
});
router.get("/contact/*", function(req, res, next){
    res.render('modules/contact', {title: 'Sprout'});
});
router.get("/welcome", function(req, res, next){
    res.render('modules/welcome', {title: 'Sprout'});
});
//add users
router.post('/add_user', function (req, res, next) {
    // connection.query('INSERT INTO `user`(`username`, `email`,`company_name`,`current_company`) VALUES ("'+req.body.username+'","'+req.body.email+'","'+req.body.company_name+'","'+req.body.current_company+'")', function (error, results, fields) {
    //     if (error) res.json({"status": "failed", "message": error.message});
    //
    //     else {
    //         console.log(err);
    //         res.send("query 1 error");
    //     }
    // });
    connection.query('INSERT INTO `users_access_rights`(`sales`,`project`,`inventory`,`manufacturing`,`accounting`,`purchases`,`recruitment`,`expenses`,`timesheets`,`attandance`,`fleet`,`mass_mailing`,`pos`,`administration`) ' +
        'VALUES ("'+req.body.sales+'","'+req.body.project+'","'+req.body.inventory+'","'+req.body.manufacturing+'","'+req.body.accounting+'","'+req.body.purchases+'","'+req.body.recruitment+'","'+req.body.expenses+'","'+req.body.timesheets+'","'+req.body.attendance+'","'+req.body.fleet+'","'+req.body.massmailing+'","'+req.body.pointofsale+'","'+req.body.administration+'")', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// get user
router.get('/get_user', function (req, res, next) {
    connection.query('SELECT `username`, `email`, `language`, `timezone` FROM `user`)', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});

router.get('/signup', function(req, res, next){
    res.render('registration', {title: 'Sprout', success: req.session.success, errors: req.session.errors});
    req.session.error = null ;
});

router.post('/check', function(req, res, next){
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var datetime = getDateTime();
    var token = bcrypt.hashSync(datetime, salt);
    var status = "inactive";
    req.check('username', 'Invalid username').notEmpty();
    req.check('email', 'Invalid email address').isEmail();
    req.check('company_name', 'Invalid company name').notEmpty();
    req.check('phone_no', 'Invalid phone number').isInt();
    req.check('country', 'Invalid country').notEmpty();
    var html = "";

    var errors = req.validationErrors();
    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/signup')
    }else{
        res.render('email_template',{token:token}, function (err, output)
        {
            html =  output ;
        });
        var mailOptions = {
            from: '<no-reply@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: 'Hello USama ✔', // Subject line
            html: html // html body
        };
        // res.json(req.body);
        connection.query('INSERT INTO `user`(`username`, `email`,`company_name`,`phone_no`,`country`,`user_token`,`status`,`created_at`) VALUES ("'+req.body.username+'","'+req.body.email+'","'+req.body.company_name+'","'+req.body.phone_no+'","'+req.body.country+'","'+token+'","'+status+'","'+datetime+'")', function (error, results, fields) {
            if (error) res.json({"status": "failed", "message": error.message});

            transporter.sendMail(mailOptions, function (err, info) {
                if(err){
                    console.log(err);
                    res.send("Something goes wrong!");
                }
                else {
                    res.render('registration');
                }

            });
        });
        //req.session.success = true;
    }

});

router.post('/check', function(req, res, next){
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var datetime = getDateTime();
    var token = bcrypt.hashSync(datetime, salt);
    var status = "inactive";
    req.check('username', 'Invalid username').notEmpty();
    req.check('email', 'Invalid email address').isEmail();
    req.check('company_name', 'Invalid company name').notEmpty();
    req.check('phone_no', 'Invalid phone number').isInt();
    req.check('country', 'Invalid country').notEmpty();
    var html = "";

    var errors = req.validationErrors();
    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/signup')
    }else{
        res.render('email_template',{token:token}, function (err, output)
        {
            html =  output ;
        });
        var mailOptions = {
            from: '<no-reply@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: 'Hello USama ✔', // Subject line
            html: html // html body
        };
        // res.json(req.body);
        //req.session.success = true;
    }

});
/*router.get('/', function(req, res, next){
    res.render('index', {title: 'Sprout'});
});*/



router.get('/email_temp', function(req, res, next){
    res.render('email_template', {title: 'Sprout'});
});
router.get('/dashboard', func.isLoggedIn, function(req, res, next){
    res.render('dashboard', {title: 'Sprout'});
});

router.get('/login',func.notLoggedIn, function(req, res, next){
    // if(req["sessions"].hasOwnProperty("flash"))
        console.log(req);
    res.render('login', {title: 'Sprout'});
});

// process the login form
router.post('/sign', passport.authenticate('local-login', {
        successRedirect : '/dashboard', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


router.get('/password', function(req, res, next){
    var token = req.query.token;
    var errors = req.session.errors;
    req.session.error = null ;
    res.render('password', {title: 'Sprout' , success: req.session.success, errors: errors, token: token});

});
router.post('/password', function(req, res, next){
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var token = req.body._token;
    // req.check('email', 'Invalid email address').isEmail();
    req.check('password', 'Password not matched!').isLength({min: 6}).withMessage("Password is too short!").equals(req.body.confirmpass);

    var errors = req.validationErrors();
    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        res.redirect("password?token="+token);
    }else{
        connection.query('UPDATE user SET password = "'+hash+'", status = "Active" WHERE user_token = "'+token+'"'  , function (error, results, fields) {
            if (error) res.send("failed: "+error.message);
            res.redirect('/dashboard')
        });
        //req.session.success = true;
    }

});



module.exports = router;

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}