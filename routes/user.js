var express = require("express");
var router = express.Router();
var func = require("../config/func");
var passport = require("passport");
var csrf = require("csurf");
csrfProtection = csrf();
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: 'mail.4slash.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'no-reply@4slash.com',
        pass: 'Nor123_'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});
router.use(csrfProtection);

router.get('/logout', func.isLoggedIn, function(req, res, next){
    req.logout();
    res.redirect('/user/login');
});

router.get('/login', func.notLoggedIn, function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/login', {title: 'Login', csrfToken: req.csrfToken(), messages: messages});
});

router.post('/login', func.notLoggedIn, passport.authenticate('local.login', {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true
}));

router.get('/forgot_password', func.notLoggedIn, function (req, res, next) {
    res.render('user/forgot_password', {title: 'Forgot Password', csrfToken: req.csrfToken(), emailSend: false});
});

router.post('/forgot_password', func.notLoggedIn, function (req, res, next) {
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
        res.send("Message "+info.messageId+" sent: "+info.response);
    });
  //  res.render('user/forgot_password', {title: 'Forgot Password', csrfToken: req.csrfToken(), emailSend: true});
});

module.exports = router;