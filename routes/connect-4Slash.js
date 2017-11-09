/**
 * Created by 4slashmac on 5/26/17.
 */
var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var validator = require("express-validator");
var passportlocal = require("passport-local");

var router = new express.Router();
var bcrypt   = require('bcrypt-nodejs');
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
//
// var execsql = require('execsql');
//     var dbConfig = {
//         host: "46.101.37.156",
//         port: 81,
//         user: "sprout",
//         password: "sprout12345"
//
//     };
//     var sql = 'use abcd;';
//     var sqlFile = "public/database" + '/sprout-most-recent.sql';
//

//
// const importer = require('node-mysql-importer');
//
// importer.config({
//     'host': "46.101.37.156",
//     'user': "sprout",
//     'password': "sprout12345",
//     'database': 'abcd'
// });
//

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

    return year + "" + month + "" + day + "" + hour + "" + min + "" + sec;

}




function puts(error, stdout, stderr) {
    var a = stdout;
    console.log(a.length);
}



var authentication = function(req, res, next) {
    //console.log(req.session.db_name);
    if (req.token == 'abcdefgh') {
        next();
    }
    else {
        res.status(401).send({message: 'Unauthorized Access. This attempt will be reported.'});
    }
};




router.post("/", function(req, res){
    //console.log(req);
    // console.log(req);



    var companyNamePrefix = 'sprout';
    // var a = exec("ls -la", (err, stdout, stderr));

    var fullName = req.body.full_name;
    var password = req.body.password;
    var adminEmail = req.body.admin_email;
    var companyName = req.body.company_name;
    var country = req.body.country;
    //  var userNumber = req.body.user_number;
    var phoneNumber = req.body.phone_number;
    //  var pakageType = req.body.pakage_type;
    var createdAt = req.body.created_at;
    var allowed_apps = req.body.allowed_apps;
    var allowed_users = req.body.allowed_users;
    companyName = companyName.replace(' ', '');
    // --- NOT OF OUR USE ---
    // var totalAmount = req.body.total_amount;
    // var createdAt = req.body.created_at;



console.log(req.body);

    /*
     ssh
     .exec('cd; mysql -u sprout -psprout12345;', {
     out: console.log.bind(console)
     })
     .exec('ls', {
     out: console.log.bind(console)
     })
     .exec('echo "awesome!"', {
     out: console.log.bind(console)
     })
     .start();

     */



    var newFileName ='';
    var db_name = '';


    async.waterfall(
        [
            function(callback) {
                req.assert('full_name', "Name is invalid!").notEmpty();
                req.assert('password', "Password is invalid!").notEmpty();
                req.assert('admin_email', "Email is invalid!").notEmpty().isEmail();
                req.assert('company_name', "Company name is invalid!").notEmpty();
                req.assert('country', "Country is invalid!").notEmpty().isAlpha();
                //req.assert('country', "Country is invalid!").notEmpty().isAlpha();
                req.assert('phone_number', "Phone Number is invalid!").notEmpty();
                req.assert('created_at', "Created at is invalid!").notEmpty().isDate();


                req.getValidationResult().then(function(result){
                    if (!result.isEmpty()) {
                        return res.status(400).json({
                            status: "error",
                            msg: "validation errors",
                            details: util.inspect(result.array()).replace(/\n/g, "")
                        });
                    }
                    else{
                        callback(null);
                    }
                    //return res.json(util.inspect(result.array()));
                });


            },

            function(callback) {
                newFileName = getDateTime() + "_" + randomstring.generate(10);
                db_name = companyNamePrefix + "_" + companyName + newFileName;
                // console.log(db_name);
                callback(null);

            },


            function(callback) {
                var ssh = new SSH({
                    host: '46.101.37.156',
                    user: 'sprout',
                    pass: '4slash1234'
                });

                //console.log("1");

                ssh.exec('mysql -u sprout -psprout12345 -e "create database '+ db_name +'"; ' +
                    'mysql -u sprout -psprout12345 '+ db_name +' < ~/db_backups/sprout_11072017.sql', {
                    exit: function(code) {
                        if (code == 0){
                            callback(null);
                        }
                        else if(code == 1){
                            callback(null);
                        }
                        else if(code == 2){
                            return res.status(500).json({ status: 'Error', message: 'Error while connecting to physical server via SSH.'});
                        }
                    }

                }).start();

                // ssh.exec('exit');
                //callback(null);
            },

            function(callback) {
                //console.log("2");
                //db_name = "sprout_a20170617140919_FcVgMUhLIA";
                var connection = mysql.createConnection({
                    host: "46.101.37.156",
                    user: "sprout",
                    password: "sprout12345",
                    database: db_name
                });

                connection.connect(function (err) {
                    if(err){
                        return res.status(500).json({ status: 'Error', message: 'Error connecting to database.'});
                    }
                    console.log("connected as id "+ connection.threadId + " for sprout 4slash connection." );
                });

                callback(null,connection);
            },

            function(connection,callback) {
                //console.log("3");
                connection.query("INSERT INTO `"+db_name+"`.`country` " +
                    "( `id` , `country_name`) " +
                    "VALUES ( NULL , '"+country+"')" , function (error, result1) {
                    if(error){
                        return res.json({ status: 'Error', message: 'Error inserting into database. '});
                    }
                    callback(null,result1.insertId,connection);
                });

                //callback(null, "Done!");
            },

            function(countryId, connection, callback) {
                // console.log("4");
                connection.query("INSERT INTO `"+db_name+"`.`users_company` " +
                    "( `id` , `company_name` , `email` , `type`) " +
                    "VALUES ( NULL , '"+companyName+"', '"+adminEmail+"', 'base')"
                    , function (error,result2) {
                        if(error) {
                            return res.status(500).json({ status: 'Error', message: 'Error inserting into database. '});
                        }
                    });

                callback(null,countryId,connection);

            },

            function(countryId, connection, callback) {
                connection.query("INSERT INTO `"+db_name+"`.`user` " +
                    "( `id` , `username` , `email` , `password` , `phone_no` , `country_id` , `created_at` , `type`, `status`) " +
                    "VALUES ( NULL , '"+fullName+"', '"+adminEmail+"', '"+password+"', '"+ phoneNumber +"', '"+ countryId +"' , '"+createdAt+"', 'admin','active')"
                    , function (error) {
                        if(error){
                            return res.status(500).json({ status: 'Error', message: 'Error inserting into database. '});
                        }

                        callback(null,connection);
                    });

                //callback(null, "Done!");

            },

            function(connection, callback) {
                connection.query("INSERT INTO `sprout_users`.`companies_data` " +
                    "( `company_name` , `data_allowed` , `data_consumed`,`number_of_users`)" +
                    "VALUES ( '"+db_name+"', '1000000000', '0','"+allowed_users+"')" , function (error) {
                    if(error){
                        return res.status(500).json({ status: 'Error', message: 'Error inserting into database. '});
                    }

                    callback(null,connection);
                });

                //callback(null, "Done!");

            },

            function(connection, callback) {
                allowed_apps.forEach(function(entry) {
                    connection.query("INSERT INTO `sprout_users`.`companies_allowed_apps` (`database_name`, `application_name`) VALUES ('"+db_name+"', '"+entry+"');" , function (error) {
                        if(error){
                            return res.status(500).send({ error: "Error while inserting user: ", details: error});
                        }

                    });
                    //console.log(entry);
                });
                connection.end();
                callback(null,"Done!");
            }
            //callback(null, "Done!");
        ],
        function (err, results) {
            //console.log("error:" +err);
            if(results == "Done!") {
                return res.status(200).json({status: 'ok', message: 'Database Created.'});
            }
            else{
                return res.status(500).json({ status: 'Error', message: 'An unidentified error occured.'});
            }
        }
    );












    /*
     async.parallel([
     function(callback){
     connection.query("INSERT INTO `"+db_name+"`.`user` " +
     "( `id` , `username` , `email` , `password` , `phone_no` , `country_id` , `created_at` , `type` , `sprout_users_access_rights_id` , `language` , `timezone` , `notification` , `alias_id` , `signature` , `refresh_token` , `user_token` , `token_validity` , `last_synchro` , `calander_id` , `barcode` , `security_pin` , `status` , `general_settings_id` ) " +
     "VALUES ( NULL , '"+fullName+"', '"+adminEmail+"', '"+password+"', '"+ phoneNumber +"', '"+** TBD ** +"' , '"+createdAt+"', 'admin', NULL , '', '', '', NULL , '', '', '', NULL , NULL , '', '', '', '', NULL"
     , function (error, result1) {
     callback(error,result1)
     });
     },
     function(callback){
     connection.query("select id, state_name from country_states", function (error, result2) {
     callback(error,result2)
     });
     },
     function(callback){
     connection.query("select id, currency from currency", function (error, result3) {
     callback(error,result3)
     });
     },
     function(callback){
     connection.query("select id, company_name from users_company", function (error, result4) {
     callback(error,result4)
     });
     },


     ],function(err,results){
     if(err){
     res.json({"status": "failed", "message": error.message})
     }else{
     res.send(JSON.stringify(results));
     }
     })

     */

    /*

     ssh.exec('ls', {
     out: function(stdout) {
     console.log(stdout);
     },
     err: function(stderr) {
     console.log(stderr); // this-does-not-exist: command not found
     }
     }).start();
     */





    /*
     exec("ssh sprout@46.101.37.156", function (error, stdout, stderr) {
     if(stderr != '')
     console.log("SSH Connected!");
     else
     console.log('stdout: ' + stdout);

     if (error !== null) {
     console.log('exec error: ' + error);
     }

     });
     */

    //console.log(a.length);


// To create dump file; will not be used as we have already created one dump file and will use it every time for the sake of efficiency and speed.
// How ever if structure of database is changed; dump will also need an update.
    /*



     exec("mysqldump -d -u sprout -psprout12345 sprout > ~/db_backups/"+newFileName+".sql", function (error, stdout, stderr) {
     if(stderr != '')
     console.log("MySql Connected!");
     else
     console.log('stdout: ' + stdout);

     if (error !== null) {
     console.log('exec error: ' + error);
     }

     });

     */
    /*

     exec("mysql -u sprout -psprout12345", function (error, stdout, stderr) {
     if(stderr != '')
     console.log("MySql Connected!");
     else
     console.log('stdout: ' + stdout);

     if (error !== null) {
     console.log('exec error: ' + error);
     }

     });

     var newFileName = getDateTime();
     var db_name = companyName + newFileName
     console.log(db_name);

     exec("create database "+ db_name +";", function (error, stdout, stderr) {
     if(stderr != '')
     console.log("Database Created!");
     else
     console.log('stdout: ' + stdout);

     if (error !== null) {
     console.log('exec error: ' + error);
     }

     });

     exec("exit", function (error, stdout, stderr) {
     if(stderr != '')
     console.log("MySql Disconnected!");
     else
     console.log('stdout: ' + stdout);

     if (error !== null) {
     console.log('exec error: ' + error);
     }

     });

     exec("mysql -u sprout -psprout12345 "+ db_name +" < ~/db_backups/sprout_11062017.sql", function (error, stdout, stderr) {
     if(stderr != '')
     console.log("DB Imported!");
     else
     console.log('stdout: ' + stdout);

     if (error !== null) {
     console.log('exec error: ' + error);
     }

     });

     exec("exit", function (error, stdout, stderr) {
     if(stderr != '')
     console.log("Exit-ed SSH!");
     else
     console.log('stdout: ' + stdout);

     if (error !== null) {
     console.log('exec error: ' + error);
     }

     });
     */

    // var dbName = "abcd";
    // var sql = 'CREATE DATABASE ' + dbName;
    //
    //
    // connection2.query(sql, function (error, results) {
    //     if (error) res.json({"status": "failed", "message": error.message});
    //     else res.send(JSON.stringify({ results }));
    // });
    //
    //
    // sql = fs.readFileSync('public/database/sprout-most-recent.sql').toString();
    //
    // connection2.query(sql, function (error, results, fields) {
    //     if (error) res.json({"status": "failed", "message": error.message});
    //     else res.send(JSON.stringify({ results }));
    // });

    //res.send(sql);




    // async.waterfall(
    //     [
    //         function(callback) {
    //             console.log("I am here!");
    //             var dbName = "abcd";
    //             var sql = '';
    //
    //             var connection = mysql.createConnection({multipleStatements: true});
    //             var connection = mysql.createConnection({
    //                 host: "46.101.37.156",
    //                 user: "sprout",
    //                 password: "sprout12345",
    //                 database: "abcd"
    //             });
    //
    //             // var sql = 'CREATE DATABASE ' + dbName;
    //             // connection.query(sql, function (error) {
    //             //              if (error) res.json({"status": "failed", "message": error.message});
    //             //              else callback(null,sql,dbName);
    //             // });
    //             callback(null,sql,dbName,connection);
    //         },
    //
    //         function(sql, dbName, connection, callback) {
    //             console.log("I am here!");
    //             sql += fs.readFileSync('public/database/sprout-most-recent.sql').toString();
    //             connection.query(sql, function (error) {
    //                     if (error) res.json({"status": "failed", "message": error.message});
    //                     else callback(null, "Done!");
    //             });
    //
    //
    //         }
    //     ],
    //     function (err, responsa) {
    //         console.log(responsa);
    //         // Node.js and JavaScript Rock!
    //     }
    // );


    // execsql.config(dbConfig)
    //     .exec(sql)
    //     .execFile(sqlFile, function (err, results) {
    //         if (err) throw err;
    //         console.log(results);
    //     })
    //     .end();





    // importer.importSQL('public/database/sprout-most-recent.sql').then( () => {
    //     console.log('all statements have been executed')
    // }).catch( err => {
    //     console.log(`error: ${err}`)
    // })


});








module.exports = router;