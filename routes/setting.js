var express = require("express");
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

var async = require('async');        //azeem ullah's commit
var multer  = require('multer');
var path = require('path');
const fs = require('fs');


var dbName = "sprout";

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'usama4slash@gmail.com',
        pass: 'usama4slash1234'
    }
});
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "46.101.37.156",
    user: "sprout",
    password: "sprout12345",
    database: "sprout"
});
connection.connect(function (err) {
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});
router.post("/inviteuser", function (req, res, next) {
    console.log(req.body.mailer_t);
    var html = "";
    var mailOptions = {
        from: '<no-reply@gmail.com>', // sender address
        to: req.body.mailer_t , // list of receivers
        subject: 'Hello USama âœ”', // Subject line
        html: html // html body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.send("Something goes wrong!");
        }
        else {

            //console.log(req.body.email);
            //res.render('registration');
        }
    });
});
router.get('/testsmtp', function (req, res, next) {
    var description = "";
    var priority = "";
    var smtp_server = "";
    var smtp_port = "";
    var connection_security = "";
    var username = "";
    var password = "";
    console.log(req);
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'usama4slash@gmail.com',
            pass: 'usama4slash1234'

        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo ðŸ‘»" <foo@blurdybloop.com>', // sender address
        to: 'theazeemullah@gmail.com', // list of receivers
        subject: 'Hello âœ”', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({status:"error",msg:"failed ho gaya"});
        }
        else {
            res.json({status:"success",msg:"passs ho gaya"});
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

});
//-----Azeem Ullah - Settings/create-company
router.get("/create-company/get-meta", function(req, res, next){

    async.parallel([
        function(callback){
            connection.query("select id, country_name from country", function (error, result1) {
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
});
router.get("/create-company/get-meta/given-country/:country_id", function(req, res, next){
    console.log("id is:"+req);
    connection.query("select id, state_name from country_states where country_id = '"+req.params.country_id+"'", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else res.send(JSON.stringify(results));
    });
});
router.post("/create-company", function(req, res, next){
    console.log(req.body.companyStateId);
    var query = "INSERT INTO `users_company` (`id`, `company_name`, `tag_line`, `street_one`, `street_two`, `city`, `state_id`, `zip`, `country_id`, `website`, `phone`, `fax`, `email`, `tax_id`, `current_registry`, `currency_id`, `type`, `parent_company_id`, `image_url`)" +
        " VALUES (NULL, '"+req.body.companyName+"', '"+req.body.companyTagline+"', '"+req.body.companyStreetOne+"', '"+req.body.companyStreetTwo+"', '"+req.body.companyCity+"', '"+req.body.companyStateId+"', '"+req.body.companyZip+"', '"+req.body.companyCountryId+"', '"+req.body.companyWebsite+"', '"+req.body.companyPhone+"', '"+req.body.companyFax+"', '"+req.body.companyEmail+"', '"+req.body.companyTaxID+"', '"+req.body.companyRegistry+"', '"+req.body.companyCurrencyId+"', 'branch', '"+req.body.companyParentCompanyId+"', '"+req.body.image_url+"')";
    connection.query(query, function (error, results, fields) {

        if (error) res.json({"status": "failed", "message": error.message});
        else res.send(JSON.stringify({ results }));
    });
});

/**************************************************company and generalSettings work******************************/

//companyinfo
router.post('/company_info', function (req, res, next) {
    connection.query('SELECT * FROM `users_company` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/usaa', function (req, res, next) {

    connection.query('SELECT * FROM users_company WHERE id = ( SELECT max( id ) FROM users_company WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
//outgoing info
router.post('/outgoinginfo', function (req, res, next) {
    connection.query('SELECT * FROM `outgoing_email_server` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//incoming info
router.post('/incominginfo', function (req, res, next) {
    connection.query('SELECT * FROM `incoming_email_server` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//internal header info
router.post('/internalheaderinfo', function (req, res, next) {
    console.log(req.body);
    connection.query('SELECT * FROM `views` WHERE `type`= "'+req.body.type+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//external header info
router.post('/externalheaderinfo', function (req, res, next) {
    console.log(req.body);
    connection.query('SELECT * FROM `views` WHERE `type`= "'+req.body.type+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//external footer
router.post('/externalfooterinfo', function (req, res, next) {
    console.log(req.body);
    connection.query('SELECT * FROM `views` WHERE `type`= "'+req.body.type+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//companyTable
router.post('/companytable', function (req, res, next) {
    connection.query('SELECT * FROM `users_company` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//outgoing Table
router.post('/outgoingtable', function (req, res, next) {
    connection.query('SELECT * FROM `outgoing_email_server` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            console.log(error);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//incoming table
router.post('/incomingtable', function (req, res, next) {
    connection.query('SELECT * FROM `incoming_email_server` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//generalSetting
router.post('/general', function (req, res, next) {

    connection.query('INSERT INTO `general_settings`(`alias_domain`,`portal_access`,`authentication`,`import_export`,`multi_company`,`multi_currency`,`inter_company`,`shared_partners`,`shared_products`,`gdrive`) VALUES ("'+req.body.aliasdomain+'","'+req.body.portalaccess+'","'+req.body.authencation+'","'+req.body.importexport+'","'+req.body.multicompany+'","'+req.body.multicurrency+'","'+req.body.intercompany+'","'+req.body.sharepartners+'","'+req.body.shareproducts+'","'+req.body.googledrive+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
    });
});
//generalsetting paper format
router.post('/paperformat', function (req, res, next) {

    connection.query('INSERT INTO `paper_format`(`name`,`size`,`orientation`,`top_margin`,`bottom_margin`,`left_margin`,`right_margin`,`display_header`,`header_spacing`,`dpi`) VALUES ("'+req.body.name+'","'+req.body.paper_size+'","'+req.body.orientation_1+'","'+req.body.top_margin+'","'+req.body.bottom_margin+'","'+req.body.left_margin+'","'+req.body.right_margin+'","'+req.body.display_header+'","'+req.body.header_spacing+'","'+req.body.output_dpi+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//Outgoing Mail Server
router.post('/outgoingmail', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `outgoing_email_server`(`description`,`priority`,`smtp_server`,`smtp_port`,`connection_security`,`username`,`password`) VALUES ("'+req.body.descriptio_n+'","'+req.body.priorit_y+'","'+req.body.smtpserver+'","'+req.body.smtpport+'","'+req.body.connectionsecurity+'","'+req.body.usernam_e+'","'+req.body.passwor_d+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
    });
});
//external layout header
router.post('/externalheader', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `views`(`name`,`view_type`,`model`,`sequence`,`active`,`archicture`,`type`) VALUES ("'+req.body.viewname+'","'+req.body.viewtype+'","'+req.body.model+'","'+req.body.sequence+'","'+req.body.active+'","'+req.body.ckeditor_value+'","externalheader")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//external footer
router.post('/externalfooter', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `views`(`name`,`view_type`,`model`,`sequence`,`active`,`archicture`,`type`) VALUES ("'+req.body.viewname+'","'+req.body.viewtype+'","'+req.body.model+'","'+req.body.sequence+'","'+req.body.active+'","'+req.body.ckeditor_value+'","externalfooter")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//internal footer
router.post('/internalfooter', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `views`(`name`,`view_type`,`model`,`sequence`,`active`,`archicture`,`type`) VALUES ("'+req.body.viewname+'","'+req.body.viewtype+'","'+req.body.model+'","'+req.body.sequence+'","'+req.body.active+'","'+req.body.ckeditor_value+'","internalheader")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//incoming mail
router.post('/incomingmail', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `incoming_email_server`(`name`,`server_type`,`server_name`,`port`,`ssl_tsl`,`username`,`password`,`status`) VALUES ("'+req.body.name+'","'+req.body.server_type+'","'+req.body.server_name+'","'+req.body.port+'","'+req.body.ssl+'","'+req.body.usernam_e+'","'+req.body.passwor_d+'","Not confirmed")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//usertemplate
router.post('/template', function (req, res, next) {
    if(!(req.body.template_active)){
        req.body.template_active=0;
    }
    connection.query('INSERT INTO `users_template`(`name`,`active`) VALUES ("'+req.body.template_name+'",'+req.body.template_active+')', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
// currency
router.post('/company_currency_name', function (req, res, next) {
    connection.query('SELECT * FROM currency', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// company update
router.post('/company_date_update', function (req, res , results) {
    console.log(req);
    connection.query('UPDATE users_company SET company_name = "'+req.body.company_name+'", tag_line = "'+req.body.tag_line+'", street_one = "'+req.body.street_one+'", street_two = "'+req.body.street_two+'", city = "'+req.body.city+'", state_id = "'+req.body.current_state_id+'", zip = "'+req.body.zip+'" , country_id = "'+req.body.country_id+'", website = "'+req.body.website+'", phone = "'+req.body.phone+'", fax = "'+req.body.fax+'", email = "'+req.body.email+'", tax_id = "'+req.body.tax_id+'", current_registry = "'+req.body.current_registry+'", currency_id = "'+req.body.currency_id+'", parent_company_id = "'+req.body.company_id+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (!error) {
            console.log(req.body.id);
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
//user company info
router.post('/delete_company_info', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `users_company` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_company_info_inside', function (req, res, next) {
    connection.query('DELETE FROM `users_company` WHERE id = "' +req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }else {
        }
        // res.redirect('setting/users')
        // console.log(results);
    });
    //console.log(req.body.delete_items);
});
// country states
router.post('/company_country_states', function (req, res, next) {
    connection.query('SELECT * FROM country_states', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//country name
router.post('/company_country_name', function (req, res, next) {
    connection.query('SELECT * FROM country', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//outgoint_edif_service
router.post('/outgoint_edif_service', function (req, res, next) {
    connection.query('SELECT `id`, `description`, `priority`, `smtp_server`, `smtp_port`, `connection_security`, `username`, `password` FROM `outgoing_email_server` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            console.log(result);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//outgoing_update
router.post('/outgoing_update', function (req, res, next) {
    console.log(req);
    connection.query('UPDATE `outgoing_email_server` SET `description`= "'+req.body.description_e+'",`priority`="'+req.body.priority_e+'",`smtp_server`="'+req.body.smtp_server_e+'",`smtp_port`="'+req.body.smtp_port_e+'",`connection_security` ="'+req.body.connection_security_e+'",`username`="'+req.body.username_e+'",`password`="'+req.body.password_e+'" WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            console.log(result);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//incoming_update
// router.post('/incoming_update', function (req, res, next) {
//     console.log(req);
//     connection.query('UPDATE `incoming_email_server` SET `description`= "'+req.body.description_e+'",`priority`="'+req.body.priority_e+'",`smtp_server`="'+req.body.smtp_server_e+'",`smtp_port`="'+req.body.smtp_port_e+'",`connection_security` ="'+req.body.connection_security_e+'",`username`="'+req.body.username_e+'",`password`="'+req.body.password_e+'" WHERE id = "'+req.body.id+'"', function (error, results, fields) {
//         if (!error) {
//             res.json({"status": "ok", "result": results});
//         } else {
//             console.log(result);
//             res.json({"status": "failed", "message": error.message});
//         }
//     });
// });
//incoming_edit_service
router.post('/incoming_edit_service', function (req, res, next) {
    connection.query('SELECT `name`, `server_type`, `last_fetched_date`, `server_name`, `port`, `ssl_tsl`, `username`, `password`, `action_id`, `status` FROM `incoming_email_server` WHERE "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            console.log(result);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//incoming_update
router.post('/incoming_update', function (req, res, next) {
    console.log(req);
    connection.query('UPDATE `incoming_email_server` SET `name`= "'+req.body.name+'",`server_type`="'+req.body.servertype+'",`server_name`="'+req.body.servername+'",`port`="'+req.body.port+'",`ssl_tsl`="'+req.body.ssl+'",`username`="'+req.body.username+'",`password`="'+req.body.password+'",`action_id`="'+req.body.newrecord+'",`status`="'+req.body.status+'" WHERE  "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            console.log(result);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//company pagination
router.post('/company_pagination', function (req, res, next) {
    console.log(req);

    connection.query('SELECT * FROM users_company WHERE id = ( SELECT MAX( id ) FROM users_company WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });

});
//delete outgoing
router.post('/delete_outgoing', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `outgoing_email_server` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_incoming', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `incoming_email_server` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_outgoing_inside', function (req, res, next) {
    connection.query('DELETE FROM `outgoing_email_server` WHERE id = "' +req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }else {
        }
        // res.redirect('setting/users')
        // console.log(results);
    });
    //console.log(req.body.delete_items);
});
router.post('/delete_incoming_inside', function (req, res, next) {
    connection.query('DELETE FROM `incoming_email_server` WHERE id = "' +req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }else {
        }
        // res.redirect('setting/users')
        // console.log(results);
    });
    //console.log(req.body.delete_items);
});
/**************************************************company and generalSettings work******************************/

/**************************************************user work******************************/
//create users
router.post('/add_user', function (req, res, next) {
    //console.log(req);
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var datetime = getDateTime();
    var token = bcrypt.hashSync(datetime, salt);
    var status = "inactive";
    var type = "user";
    var html = "";
    var errors = req.validationErrors();


    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/setting/usersoutcreate')
    }else {
        res.render('email_template', {token: token}, function (err, output) {
            html = output;
        });
        var mailOptions = {
            from: '<no-reply@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: 'Hello USama âœ”', // Subject line
            html: html // html body
        };
        connection.query('INSERT INTO `user`(`username`, `email`, `user_token`, `country_id`,`status`,`type`,`created_at`,`language`,`timezone`,`notification`,`alias_id`,`signature`,`barcode`,`security_pin`) ' +
            'VALUES ("' + req.body.username + '","' + req.body.email + '","' + token + '","' + req.body.country_id + '","' + status + '","' + type + '","' + datetime + '","' + req.body.language + '","' + req.body.timezone + '","' + req.body.emailmessages + '","' + req.body.alias + '","' + req.body.signature + '","' + req.body.barcode + '","' + req.body.security_pin + '")', function (error, results, fields) {

            if (error) {
                res.json({"status": "failed", "message": error.message});
            } else {
                connection.query('INSERT INTO `users_access_rights`(`current_company_id`, `sales`, `project`, `inventory`, `manufacturing`, `accounting`, `purchases`, `recruitment`, `expenses`, `timesheets`, `attandance`, `fleet`, `mass_mailing`, `pos`, `administration`,`employee`,`manager`,`equipment_manager`,`officer`, `user_id`) ' +
                    'VALUES ("' + req.body.current_company + '","' + req.body.sales + '","' + req.body.project + '","' + req.body.inventory + '","' + req.body.manufacturing + '","' + req.body.accounting + '","' + req.body.purchases + '","' + req.body.recruitment + '","' + req.body.expenses + '","' + req.body.timesheets + '","' + req.body.attendance + '","' + req.body.fleet + '","' + req.body.massmailing + '","' + req.body.pointofsale + '","' + req.body.administration + '","' + req.body.employee + '","' + req.body.manager + '","' + req.body.equipment_manager + '","' + req.body.officer + '",' + results.insertId + ')', function (error, results2, fields) {

                    if (!error) {
                        connection.query('INSERT INTO `users_allowed_company` (`company_id`, `user_id`) ' +
                            'VALUES ("' + req.body.current_company + '",' + results.insertId + ')', function (error, results, fields) {

                            if (error) {
                                res.json({"status": "failed", "message": error.message});
                            }else {
                                transporter.sendMail(mailOptions, function (err, info) {
                                    if (err) {
                                        console.log(err);
                                        res.send("Something goes wrong!");
                                    }
                                    else {
                                        console.log("successfull");
                                        //res.render('registration');
                                        res.json({"status": "ok", "result": results});
                                    }

                                });

                            }

                        });

                    } else {
                        //console.log("fail");
                        res.json({"status": "failed", "message": error.message});
                    }

                });
                // console.log(results.insertId);
                // res.json({"status": "failed", "results": results});
            }
        });
    }
});
//templateinfo
router.post('/templateinfo', function (req, res, next) {
    connection.query('SELECT * FROM `users_template` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//usertable
router.post('/usertable', function (req, res, next) {
    //console.log(req);
    connection.query('SELECT * FROM `user` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//user print alias value
router.post('/alias_value', function (req, res, next) {
    connection.query('SELECT * FROM `alias` WHERE `id`= "'+req.body.alias_id+'"', function (error, results, fields) {
        if (!error) {
            console.log(req.body);
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//user company id print
router.post('/comapny_id', function (req, res, next) {
    connection.query('SELECT * FROM `users_company` WHERE `id`= "'+req.body.alias_id+'"', function (error, results, fields) {
        if (!error) {
            console.log(req.body);
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// user info
router.post('/user_info', function (req, res, next) {
    connection.query('SELECT * FROM `user` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// user info 2
router.post('/user_info2', function (req, res, next) {
    connection.query('SELECT * FROM `users_access_rights` WHERE `user_id`= "'+req.body.id+'" ', function (error, results, fields) {
        if (!error) {
            console.log(req.body.id);
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// get user
router.post('/get_user', function (req, res, next) {
    connection.query('SELECT `username`, `email`, `language`, `timezone` FROM `user`)', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// user company id get
router.post('/source', function (req, res, next) {

    connection.query("select * from users_company", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
// alias id get
router.post('/get_alias', function (req, res, next) {

    connection.query("select * from alias", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
// country id get
router.post('/country_id', function (req, res, next) {

    connection.query("select * from country", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});

        }
    });
});
//user update select value
router.post('/user_data', function (req, res, next) {
    connection.query('SELECT user.id, users_access_rights.project, users_access_rights.sales , users_access_rights.project, users_access_rights.inventory, users_access_rights.manufacturing, users_access_rights.accounting, users_access_rights.purchases, users_access_rights.recruitment, users_access_rights.expenses , users_access_rights.timesheets , users_access_rights.attandance, users_access_rights.fleet , users_access_rights.mass_mailing, users_access_rights.pos , users_access_rights.administration, users_access_rights.employee, users_access_rights.manager, users_access_rights.equipment_manager, users_access_rights.officer   , user.username , user.email , user.created_at, user.created_at, user.language , user.timezone, user.alias_id, user.signature, user.barcode, user.security_pin FROM user , users_access_rights ,users_allowed_company WHERE user.id = "'+req.body.id+'" AND user.id = users_access_rights.user_id AND users_allowed_company.user_id = user.id', function (error, results, fields) {
        if (error){
            res.json({"status": "failed", "message": error.message});
        }
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});

        }
    });
});
// user count pagination
router.post('/user_count', function (req, res, next) {
    connection.query("select COUNT(*) as count from user", function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        } else{
            res.json({"status": "ok", "data": results});
        }
    });
});
//update user value
router.post('/update_user_value', function (req, res , results) {
    connection.query('UPDATE user SET username = "'+req.body.username+'", email = "'+req.body.email+'", language = "'+req.body.language+'", timezone = "'+req.body.timezone+'", alias_id = "'+req.body.alias_id+'", signature = "'+req.body.signature+'", barcode = "'+req.body.barcode+'" , security_pin = "'+req.body.security_pin+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "ok", "result": results});
        } else {
            connection.query('UPDATE users_access_rights SET sales = "'+req.body.sales+'", project = "'+req.body.project+'", inventory = "'+req.body.inventory+'", manufacturing = "'+req.body.manufacturing+'", accounting = "'+req.body.accounting+'", purchases = "'+req.body.purchases+'", recruitment = "'+req.body.recruitment+'" , expenses = "'+req.body.expenses+'", timesheets = "'+req.body.timesheets+'", attandance = "'+req.body.attandance+'", fleet = "'+req.body.fleet+'", mass_mailing = "'+req.body.mass_mailing+'", pos = "'+req.body.pos+'", administration = "'+req.body.administration+'" , employee = "'+req.body.employee+'" , manager = "'+req.body.manager+'" , equipment_manager = "'+req.body.equipment_manager+'" , officer = "'+req.body.officer+'", current_company_id = "'+req.body.current_company+'" WHERE user_id = "'+ req.body.id +'"', function (error, results, fields) {
                if (error) {
                    res.json({"status": "ok", "result": results});
                } else {
                    // connection.query('UPDATE users_allowed_company SET company_id = "'+req.body.company_name+'", WHERE user_id = "'+ req.body.id +'"', function (error, results, fields) {
                    //     if (error) {
                    //         res.json({"status": "ok", "result": results});
                    //     } else {
                    //         res.send("Something goes wrong!");
                    //     }
                    // });
                    res.send("Something goes wrong!");
                }
            });
        }
    });

});
//user active & inactive
router.post('/user_status', function (req, res, next) {
    console.log(req.body.id);
    var  status_update = 'active' ;
    var  status_update1 = 'inactive' ;
    var  status_change = req.body.status ;
    //console.log(status_change);

    connection.query('SELECT * FROM `user` WHERE id = "'+ req.body.id +'" ' , function (error, results1, fields) {
        if (!error) {
            results1.forEach(function (data) {
                if(data.status == "active"){
                    connection.query('UPDATE user SET status = "'+status_update1+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
                        if (error) {
                            res.json({"status": "ok", "result": results});
                        } else {
                            res.send("Something goes wrong!");
                        }
                    });

                }else{
                    connection.query('UPDATE user SET status = "'+status_update+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
                        if (error) {
                            res.json({"status": "ok", "result": results});
                        } else {
                            res.send("Something goes wrong!");
                        }
                    });
                }
            });

        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
// change password users
router.post('/change_pwd', function (req, res, next) {

    connection.query('select * from user where id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error){
            res.json({"status": "failed", "message": error.message});
        } else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/user_pwd_update', function (req, res, next) {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);

    connection.query('UPDATE user SET password = "'+hash+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        //console.log(hash);
        if (error) {
            res.json({"status": "failed", "message": error.message});
        } else{
            res.json({"status": "ok", "data": results});

        }
    });
});
//send resert pwd instruction
router.post('/send_resert_pwd_instruction', function (req, res, next) {

    var html = "";
    var mailOptions = {
        from: '<no-reply@gmail.com>', // sender address
        to: 'shahidhassan311@gmail.com' , // list of receivers
        subject: 'Hello USama âœ”', // Subject line
        html: html // html body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.send("Something goes wrong!");
        }
        else {
            //console.log(req.body.email);
            res.render('registration');
        }
    });
});
//user delete
router.post('/delete_users', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `user` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_users_inside', function (req, res, next) {
    connection.query('DELETE FROM `user` WHERE id = "' +req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }else {
        }
        // res.redirect('setting/users')
        // console.log(results);
    });
    //console.log(req.body.delete_items);
});
//user duplicate data
router.post('/duplicate_users', function (req, res, next) {
    connection.query('INSERT INTO `user` (`username`, `password`, `phone_no`, `country_id`, `created_at`, `type`, `sprout_users_access_rights_id`, `language`, `timezone`, `notification`, `alias_id`, `signature`, `refresh_token`, `user_token`, `token_validity`, `last_synchro`, `calander_id`, `barcode`, `security_pin`, `status`, `general_settings_id`) select Concat(username,"(copy)"), `password`, `phone_no`, `country_id`, `created_at`, `type`, `sprout_users_access_rights_id`, `language`, `timezone`, `notification`, `alias_id`, `signature`, `refresh_token`, `user_token`, `token_validity`, `last_synchro`, `calander_id`, `barcode`, `security_pin`, `status`, `general_settings_id` from user where `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
// signup
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
            subject: 'Hello USama âœ”', // Subject line
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
// email template
router.get('/email_temp', function(req, res, next){
    res.render('email_template', {title: 'Sprout'});
});
// dashboard
// router.get('/dashboard', func.isLoggedIn, function(req, res, next){
//     res.render('dashboard', {title: 'Sprout'});
// });
// router.get('/',function (req , res ) {
//     res.render('dashboard', {
//         isAuthenticated: false,
//         users: req.user
//     });
// });
// // process the login form
// router.get('/login',func.notLoggedIn, function(req, res, next) {
//     // if(req["sessions"].hasOwnProperty("flash"))
//     console.log(req);
//     res.render('login', {title: 'Sprout'});
// });
router.post('/sign', passport.authenticate('local-login', {
    successRedirect : '/dashboard', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
// password
router.get('/password', function(req, res, next){
    var token = req.query.token;
    var email = req.query.email;
    var errors = req.session.errors;
    req.session.error = null ;
    res.render('password', {title: 'Sprout' , success: req.session.success, errors: errors, token: token, email: email});

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
        connection.query('UPDATE user SET password = "'+hash+'", status = "active" WHERE user_token = "'+token+'"'  , function (error, results, fields) {
            if (error) res.send("failed: "+error.message);
            res.redirect('/setting/users')
        });
        //req.session.success = true;
    }

});
router.get('/get_email', function (req, res) {
    console.log(req.body.token);
});
//project assigned
router.post('/project', function (req, res, next) {
    connection.query('SELECT * FROM `projects`' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/project_id', function (req, res, next) {
    connection.query('SELECT * FROM `projects` WHERE id= "'+req.body.id+'" ' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//user id
router.post('/user_id', function (req, res, next) {
    connection.query('SELECT * FROM `user` ' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// project detail
router.post('/tags_id', function (req, res, next) {
    connection.query('SELECT * FROM `tags`' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// contact detail
router.post('/contact_id', function (req, res, next) {
    connection.query('SELECT * FROM `contact`' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//task assigned usertable
router.post('/assigned_task_table', function (req, res, next) {
    //console.log(req);
    connection.query('SELECT tasks.id,tasks.task_tittle, projects.name, user.username FROM projects INNER JOIN tasks ON tasks.project_id = projects.id INNER JOIN user ON user.id = tasks.assigned_to_id', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
            //console.log(results);
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// user tasks
router.post('/user_tasks', function (req, res, next) {
    var status = "active";
    connection.query('INSERT INTO `tasks`(`task_tittle`,`project_id`,`assigned_to_id`,`deadline`,`description`,`customer_id`,`status`) ' +
        'VALUES ("' + req.body.task_tittle + '","' + req.body.product_detail + '","' + req.body.assigned_to_id + '","' + req.body.date_deadline + '","' + req.body.description + '","' + req.body.customer_id + '","' + status + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        } else  {
            connection.query('INSERT INTO `tasks_tags`(`tasks_id`,`tag_id`) ' +
                'VALUES ('+ results.insertId + ' ,"' + req.body.tag_details + '")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                } else {
                    res.json({"status": "sucess", "message": results1});
                }
            });
            //res.json({"status": "sucess", "message": results});
        }
    });
});
//task assigned view
router.post('/assigned_task_view', function (req, res, next) {
    connection.query('SELECT tasks.task_tittle, tasks.deadline, tasks_tags.tag_id, tasks.project_id, tasks.assigned_to_id, tasks.customer_id, tasks.description, contact.name AS customer_name , projects.name AS project_name, user.username, tags.name AS tags_name FROM tasks, projects ,user , tasks_tags , tags , contact WHERE tasks.id = "'+req.body.id+'" AND tasks.project_id = projects.id AND tasks.assigned_to_id = user.id AND tags.id = tasks_tags.tasks_id AND tasks.customer_id = contact.id', function (error, results, fields) {
        if (!error) {
            console.log(results);
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//update assigned task
router.post('/update_user_assigned_task', function (req, res , results) {
    console.log(req.body);
    connection.query('UPDATE tasks SET task_tittle = "'+req.body.task_tittle+'", project_id = "'+req.body.project_name+'", assigned_to_id = "'+req.body.assigned_username+'", deadline = "'+req.body.date_deadline+'", description = "'+req.body.task_description+'", customer_id = "'+req.body.customer_name+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
    connection.query('UPDATE tasks_tags SET tag_id = "'+req.body.tags_id+'", WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.send("Something goes wrong!");
        }
    });

});
//user assigned delete
router.post('/user_assigned_task', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `tasks` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_tasks_assigned_inside', function (req, res, next) {
    connection.query('DELETE FROM `tasks` WHERE id = "' +req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }else {
        }
        // res.redirect('setting/users')
        // console.log(results);
    });
    //console.log(req.body.delete_items);
});
//pagination users
router.post('/user_pagination_next', function (req, res, next) {

    connection.query('SELECT * FROM user WHERE id = ( SELECT MIN( id ) FROM user WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "result": results});

        }
    });

});
router.post('/user_pagination_previous', function (req, res, next) {

    connection.query('SELECT * FROM user WHERE id = ( SELECT max( id ) FROM user WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "result": results});
        }
    });

});
// user current company
router.post('/user_current_company_name', function (req, res, next) {
    connection.query('SELECT users_allowed_company.company_id , users_company.company_name From users_access_rights , users_allowed_company ,users_company WHERE users_access_rights.user_id = "'+ req.body.id +'" AND users_allowed_company.user_id = users_access_rights.user_id AND users_access_rights.current_company_id = users_company.id',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "result": results});
        }
    });

});
/**************************************************user work******************************/
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