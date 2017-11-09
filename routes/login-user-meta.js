/**
 * Created by 4slashmac on 6/17/17.
 */
/**
 * Created by 4slashmac on 5/26/17.
 */

// REQUIRMENTS CHANGED. THIS FILE IS NO LONGER IN USE.


var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var validator = require("express-validator");
var passportlocal = require("passport-local");

var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var saltRounds = 10;
var nodemailer = require("nodemailer");

var mysql = require("mysql");

var fs = require('fs');
var async = require('async');


var mysql = require("mysql");


//var sys = require('sys');
//var exec = require('child_process').exec;

var util = require('util');

var SSH = require('simple-ssh');

var randomstring = require("randomstring");
//var Connection  = require('ssh2');
var mysql = require("mysql");
var async = require('async');


router.post("/", function (req, res) {
    //console.log(req.query.email);
    var resultant = [];
    //console.log(req.body.email);
    //console.log(req);
    var loginEmail = req.body.email;
    //var loginPassword = req.body.password;

    var connection = mysql.createConnection({
        host: "46.101.37.156",
        user: "sprout",
        password: "sprout12345"
    });

    connection.connect(function (err) {
        if (err) {
            res.status(500).send({ error: 'Error Connecting to database.', details: err});
            return;
        }
        else {
            connection.query("SELECT `SCHEMA_NAME` FROM  `INFORMATION_SCHEMA`.`SCHEMATA` WHERE  `SCHEMA_NAME` LIKE  '%sprout_%'"
                , function (error, result1) {
                    if (error) {
                        res.status(500).send({ error: 'Error while getting user-database metadata.', details: error});
                    }
                    else {
                        var count = result1.length;
                        result1.forEach(function (entry) {
                            connection.query("select '"+entry.SCHEMA_NAME+"' as schema_name,u.email,u.type as user_type,u.status,uc.company_name, uc.image_url, uc.type as company_type " +
                                "from " + entry.SCHEMA_NAME + ".user u, " + entry.SCHEMA_NAME + ".users_company uc " +
                                "where u.email='" + loginEmail + "' and uc.type = 'base';"
                                , function (error, result2) {
                                    if (error) {
                                        res.status(500).send({ error: 'Error while searching in databases.', details: error});
                                    }
                                    else {
                                        if (result2 != '') {
                                            resultant.push(result2);
                                        }
                                        count--;
                                        if(count == 0) res.send(resultant);
                                    }
                                });
                        });



                    }

                });

        }


    });



/*

    async.waterfall(
        [
            function(callback) {
                connection.query("SELECT `SCHEMA_NAME` FROM  `INFORMATION_SCHEMA`.`SCHEMATA` WHERE  `SCHEMA_NAME` LIKE  '%sprout_%'"
                    , function (error, res) {
                        if (error) {
                            res.status(500).send({ error: 'Error while getting user-database metadata.', details: error});
                        }
                        else {
                            callback(null, res);
                        }
                    });
            },
            function(res, callback) {
                res.forEach(function (entry) {
                    connection.query("select u.email,u.type as user_type,u.status,uc.company_name,uc.type as company_type " +
                        "from " + entry.SCHEMA_NAME + ".user u, " + entry.SCHEMA_NAME + ".users_company uc " +
                        "where u.email='" + loginEmail + "' and uc.type = 'base';"
                        , function (error, result) {
                            if (error) {
                                res.status(500).send({ error: 'Error while searching in databases.', details: error});
                            }
                            else {
                                resultant.push(result);
                            }
                        });
                });
                callback(null, resultant);
            }
        ],
        function (err, result) {
            res.send(result);
        }
    );
*/











});

module.exports = router;