// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var passport = require("passport");
// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
// var dbconfig = require('./database');
// var connection = mysql.createConnection(dbconfig.connection);
//
// connection.query('USE ' + dbconfig.database);
// var mysql = require("mysql");
//var mysql = require("mysql");


// expose this function to our app using module.exports

/*
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM user WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    //
    // passport.use(
    //     'local-signup',
    //     new LocalStrategy({
    //             // by default, local strategy uses username and password, we will override with email
    //             emailField : 'email',
    //             passwordField : 'password',
    //             passReqToCallback : true // allows us to pass back the entire request to the callback
    //         },
    //         function(req, email, password, done) {
    //             // find a user whose email is the same as the forms email
    //             // we are checking to see if the user trying to login already exists
    //             connection.query("SELECT * FROM user WHERE email = ?",[email], function(err, rows) {
    //                 if (err)
    //                     return done(err);
    //                 if (rows.length) {
    //                     return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
    //                 } else {
    //                     // if there is no user with that username
    //                     // create the user
    //                     var newUserMysql = {
    //                         username: username,
    //                         password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
    //                     };
    //
    //                     var insertQuery = "INSERT INTO user ( email, password ) values (?,?)";
    //
    //                     connection.query(insertQuery,[newUserMysql.username, newUserMysql.password],function(err, rows) {
    //                         newUserMysql.id = rows.insertId;
    //
    //                         return done(null, newUserMysql);
    //                     });
    //                 }
    //             });
    //         })
    // );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField : 'email',
                passwordField : 'password',
                passReqToCallback : true // allows us to pass back the entire request to the callback
            },
            function(req, email, password, done) { // callback with email and password from our form
                connection.query("SELECT * FROM user WHERE email = ?",[email], function(err, rows){
                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                    }

                    // if the user is found but the password is wrong
                    if (!bcrypt.compareSync(password, rows[0].password)) {
                        console.log('Password wrong in pasport');
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                    }
                    // all is well, return successful user
                    return done(null, rows[0]);
                });
            })
    );
    */

    passport.use('local', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true //passback entire req to call back
        } , function (req, username, password, done){
            var connection = mysql.createConnection({
                host: "46.101.37.156",
                user: "sprout",
                password: "sprout12345",
            });

            connection.connect(function (err) {
                if(err){
                    console.error('error connecting: ' + err.stack);
                    return;
                }
                console.log("connected passport.js as id  "+ connection.threadId);
            });

            // console.log(username+' = '+ password);
            //console.log(req.query.database);
            if(!username || !password ) { return done(null, false, req.flash('message','All fields are required.')); }
            var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
            connection.query("select u.* from sprout_users.users u where email = ?", [username], function(err, rows){
                if (err) return done(req.flash('message',err));

                if(!rows.length){ return done(null, false, req.flash('message','Invalid username or password.')); }
                //console.log("a" + rows[0].email);
                salt = salt+''+password;
                //var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
                //var dbPassword  = rows[0].password;
                //console.log("a" + dbPassword);
                if(!bcrypt.compareSync(password, rows[0].password)){
                    return done(null, false, req.flash('message','Invalid username or password.'));
                }
                return done(null, rows[0]);
            });

            connection.end();
        }
    ));

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        connection.query("select * from sprout_users.users where id = "+ id, function (err, rows){
            done(err, rows[0]);
        });
    });


