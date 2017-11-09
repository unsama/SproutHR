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


module.exports = router;