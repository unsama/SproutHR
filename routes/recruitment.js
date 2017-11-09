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
    host: "192.168.100.106",
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
        from: '<no-reply@gmail.com>',
        to: req.body.mailer_t ,
        subject: 'Hello USama âœ”',
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
router.post('/source', function (req, res, next) {

    connection.query("select * from source", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/Editstatusreq', function (req, res, next) {
    console.log('UPDATE job_positions SET status = '+req.body.status+' WHERE id = '+ req.body.id +'');
    connection.query('UPDATE job_positions SET status = '+req.body.status+' WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/Editstatusreq2', function (req, res, next) {
    console.log('UPDATE job_positions SET status = '+req.body.status+' WHERE id = '+ req.body.id +'');
    connection.query('UPDATE job_positions SET status = '+req.body.status+' WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/jobspecific', function (req, res, next) {

    connection.query("select * from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/deps', function (req, res, next) {

    connection.query("select * from department", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/emps', function (req, res, next) {

    connection.query("select * from employee", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/reqresponse', function (req, res, next) {

    connection.query("select * from user", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/joblocation', function (req, res, next) {

    connection.query("select * from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/emailss', function (req, res, next) {

    connection.query("select * from email_template", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/tags', function (req, res, next) {

    connection.query("select * from tags", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/tablestages', function (req, res, next) {

    connection.query("select * from stages ORDER BY id DESC limit 10", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/lastappid2', function (req, res, next) {
    connection.query('SELECT MAX( ID ) AS id FROM employee',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/Editstatusreqapp', function (req, res, next) {
    console.log('UPDATE applications SET stage_id = '+req.body.next+' WHERE id = '+ req.body.pre +'');
    connection.query('UPDATE applications SET stage_id = '+req.body.next+' WHERE id = '+ req.body.pre +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/tablestagesnext', function (req, res, next) {

    console.log('SELECT * from stages limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT * from stages ORDER BY id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/tablestagesback', function (req, res, next) {
    console.log('SELECT * from stages limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT * from stages ORDER BY id DESC limit 10 OFFSET  '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/pipe', function (req, res, next) {
    connection.query("SELECT applicant.applicants_name,applicant.email,applicant.phone,applicant.appreciation,applications.application_tittle,applications.responsible_id,applications.source,applications.applied_job FROM applicant INNER JOIN applications ON applicant.id = applications.applicant_id", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/job', function (req, res, next) {
    connection.query("SELECT  IF(status='1','Recruitment in Progress','Not Recruiting') AS Language  ,job_positions.id,job_positions.job_tittle, job_positions.status, job_positions.expected, job_positions.forcasted, job_positions.hiredemployees, job_positions.currentemployees, department.name FROM job_positions INNER JOIN department ON job_positions.department_id = department.id ORDER BY id DESC limit 10 ", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/jobnext', function (req, res, next) {

    console.log('SELECT  job_positions.id,job_positions.job_tittle, job_positions.status, job_positions.expected, job_positions.forcasted, job_positions.hiredemployees, job_positions.currentemployees, department.name FROM job_positions INNER JOIN department ON job_positions.department_id = department.id limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT  job_positions.id,job_positions.job_tittle, job_positions.status, job_positions.expected, job_positions.forcasted, job_positions.hiredemployees, job_positions.currentemployees, department.name FROM job_positions INNER JOIN department ON job_positions.department_id = department.id ORDER BY id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/jobback', function (req, res, next) {
    console.log('SELECT * from contact limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT  job_positions.id,job_positions.job_tittle, job_positions.status, job_positions.expected, job_positions.forcasted, job_positions.hiredemployees, job_positions.currentemployees, department.name FROM job_positions INNER JOIN department ON job_positions.department_id = department.id ORDER BY id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/num5', function (req, res, next) {
    connection.query("select COUNT(*) as count from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/num', function (req, res, next) {
    connection.query("select COUNT(*) as count from stages", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/numdep', function (req, res, next) {

    connection.query("select COUNT(*) as count from department", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/numemp', function (req, res, next) {
    connection.query("select COUNT(*) as count from employee ", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/numemp1', function (req, res, next) {
    connection.query('select COUNT(*) as count from employee  where job_tittle='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/numletter', function (req, res, next) {
    connection.query("select COUNT(*) as count from application_documents", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/letter', function (req, res, next) {

    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id ORDER BY application_documents.application_id DESC limit 10', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/letternext', function (req, res, next) {

    console.log('SELECT * from stages limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id ORDER BY application_documents.application_id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/letterback', function (req, res, next) {
    console.log('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id ORDER BY application_documents.application_id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/jobnext', function (req, res, next) {

    console.log('SELECT * from stages limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id limit 2 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/jobback', function (req, res, next) {
    console.log('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id limit 2 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/letterEdits', function (req, res, next) {

    connection.query('SELECT * from application_documents  where  application_id='+"'"+ req.body.application_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/noofdoc', function (req, res, next) {

    connection.query('SELECT COUNT( * ) AS count FROM applications WHERE job_positions_id'+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/letterEditsjobs', function (req, res, next) {

    connection.query('SELECT * from applications  where  id='+"'"+ req.body.application_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/delete_dep', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `department` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_stage', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `stages` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_job', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `job_positions` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);
});
router.post('/delete_letter', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `application_documents` WHERE application_id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);

});
router.post('/abc', function (req, res, next) {
    connection.query('SELECT * from job_positions  where  id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/abcs', function (req, res, next) {
    connection.query('SELECT application_documents.application_id as id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id  where  job_positions_id='+"'"+ req.body.id +"'" +' ORDER BY application_documents.application_id DESC limit 10', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/abcsnum', function (req, res, next) {
    connection.query('SELECT count(*) AS count  FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id  where  job_positions_id='+"'"+ req.body.id +"'" +' ', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/abcsnext', function (req, res, next) {
    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id  where  job_positions_id='+"'"+ req.body.id +"'" +' ORDER BY application_documents.application_id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/abcsback', function (req, res, next) {
    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id  where  job_positions_id='+"'"+ req.body.id +"'" +' ORDER BY application_documents.application_id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/applicationsonjob', function (req, res, next) {
    connection.query('SELECT * from applications', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/stageid', function (req, res, next) {

    connection.query('SELECT stage_id from applications  where  job_positions_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/applicationsonjob', function (req, res, next) {
    connection.query('SELECT * from applications  where  job_positions_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectstages', function (req, res, next) {
    connection.query("select * from stages", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/jobs', function (req, res, next) {
    connection.query("select * from job_positions  ", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/jobss', function (req, res, next) {
    connection.query('SELECT * from job_positions  where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/contacts', function (req, res, next) {
    connection.query('SELECT * from contact  where id='+"'"+ req.body.contact_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectapplication', function (req, res, next) {
    connection.query('SELECT * from applications  where id='+"'"+ req.body.appid +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});

router.post('/lastappid', function (req, res, next) {
    connection.query('SELECT MAX( ID ) AS id FROM applications',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/lastapplicantid', function (req, res, next) {
    connection.query('SELECT MAX( ID ) AS id FROM applicant',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/lastcontactid', function (req, res, next) {
    connection.query('SELECT MAX( ID )+1 AS id FROM contact',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/tablestagesselect1', function (req, res, next) {

    connection.query('SELECT * from stages where id='+"'"+ req.body.a +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/dd', function (req, res, next) {

    connection.query('SELECT * from department where id='+"'"+ req.body.parent_dept_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/tablestagesselect', function (req, res, next) {
    connection.query('SELECT * from stages where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/jobselect', function (req, res, next) {
    connection.query('SELECT * from job_positions where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/usa', function (req, res, next) {

    connection.query('SELECT * FROM department WHERE id = ( SELECT MIN( id ) FROM department WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/selectemployeeinfonext', function (req, res, next) {

    connection.query('SELECT * FROM employee WHERE id = ( SELECT MIN( id ) FROM employee WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/jobpage', function (req, res, next) {

    connection.query('SELECT * FROM job_positions WHERE id = ( SELECT MIN( id ) FROM job_positions WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/stagepage', function (req, res, next) {

    connection.query('SELECT * FROM stages WHERE id = ( SELECT MIN( id ) FROM stages WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/usaa', function (req, res, next) {

    connection.query('SELECT * FROM department WHERE id = ( SELECT max( id ) FROM department WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectemployeeinfoback', function (req, res, next) {

    connection.query('SELECT * FROM employee WHERE id = ( SELECT max( id ) FROM employee WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/stagespages1', function (req, res, next) {

    connection.query('SELECT * FROM stages WHERE id = ( SELECT max( id ) FROM stages WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/jobpage2', function (req, res, next) {

    connection.query('SELECT * FROM job_positions WHERE id = ( SELECT max( id ) FROM job_positions WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/depss', function (req, res, next) {

    connection.query('SELECT * from department where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/depsss', function (req, res, next) {
    connection.query('SELECT * from department where id='+"'"+ req.body.parent_dept_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/contacsss', function (req, res, next) {
    connection.query('SELECT * from contact where id='+"'"+ req.body.contact_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/depsssreq', function (req, res, next) {
    connection.query('SELECT * from department where id='+"'"+ req.body.department_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/sourceselect', function (req, res, next) {
    connection.query('SELECT * from source where id='+"'"+ req.body.source +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/response', function (req, res, next) {
    connection.query('SELECT * from user where id='+"'"+ req.body.responsible_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/applied_job', function (req, res, next) {
    connection.query('SELECT * from job_positions where id='+"'"+ req.body.applied_job +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/applicationselect', function (req, res, next) {
    connection.query('SELECT * from applicant where id='+"'"+ req.body.appids +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/tagss', function (req, res, next) {
    connection.query('SELECT * from applications_tags where applications_id='+"'"+ req.body.appid +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/selecttags', function (req, res, next) {
    connection.query('SELECT * from tags where id='+"'"+ req.body.tags_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/dep', function (req, res, next) {

    connection.query("SELECT A.id AS id, A.name AS DepartmentName1, B.name AS DepartmentName2, A.manager_id, em.employeename FROM department A, department B, employee em WHERE A.parent_dept_id = B.id AND A.manager_id = em.id ORDER BY A.id DESC limit 10  ", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/depnext', function (req, res, next) {

    connection.query('SELECT A.id AS id, A.name AS DepartmentName1, B.name AS DepartmentName2, A.manager_id, em.employeename FROM department A, department B, employee em WHERE A.parent_dept_id = B.id AND A.manager_id = em.id  ORDER BY A.id DESC limit 10  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/Editstatusreq23', function (req, res, next) {
    console.log('UPDATE job_positions SET `hiredemployees` =(select COUNT(*) as count from employee where job_tittle ='+ req.body.id +') WHERE id = '+ req.body.id +'');
    connection.query('UPDATE job_positions SET `hiredemployees` =(select COUNT(*) as count from employee where job_tittle ='+ req.body.id +') WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/depback', function (req, res, next) {

    connection.query('SELECT A.id AS id, A.name AS DepartmentName1, B.name AS DepartmentName2, A.manager_id, em.employeename FROM department A, department B, employee em WHERE A.parent_dept_id = B.id AND A.manager_id = em.id ORDER BY A.id DESC limit 10  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
//==============================================Contacts================================================================
//createcontactstuff
router.post('/contacttable', function (req, res, next) {

    connection.query("select * from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/company_name', function (req, res, next) {

    connection.query("select * from users_company", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/state', function (req, res, next) {

    connection.query("select * from country_states", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/country', function (req, res, next) {

    connection.query("select * from country", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectuser', function (req, res, next) {

    connection.query("select * from user", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectacoount', function (req, res, next) {

    connection.query("select * from account", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
//gridcontactstuff
// router.post('/selectgrid', function (req, res, next) {
//
//     connection.query("select * from contact", function (error, results, fields) {
//         if (error) res.json({"status": "failed", "message": error.message});
//         else{
//             res.json({"status": "ok", "data": results});
//         }
//     });
// });
router.post('/selectgrid', function (req, res, next) {

    connection.query("SELECT contact.id,contact.name,contact.street1,contact.street2,contact.city,contact.country,contact.email, tags_contacts.tag_id FROM contact left JOIN tags_contacts ON contact.id = tags_contacts.contact_id", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
//contactcreatestuff
router.post('/createcontact', function (req, res, next) {
    if(!req.body.individual){
        req.body.individual = 0;
    }
    if(!req.body.company){
        req.body.company = null;
    }
    if(!req.body.states ){
        req.body.states = null;
    }
    if(!req.body.country){
        req.body.country = null;
    }
    if(!req.body.account_reciveable){
        req.body.account_reciveable = null;
    }
    if(!req.body.account_payable ){
        req.body.account_payable = null;
    }
    if(!req.body.notes_id ){
        req.body.notes_id = null;
    }
    connection.query('INSERT INTO `contact_notes`(`notes`) VALUES ("' + req.body.notes_id + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {
            console.log('INSERT INTO `contact`(`name`,`street1`,`street2`,`individual`,`company`,`city`,`states`,`zip`,`country`,`title`,`website`,`job_position`,`phone_number`,`mobile_number`,`fax_number`,`email`,`language`,`notes_id`,`is_Customer`,`is_sales_person`,`sale_pricelist`,`internal_reference_id`,`account_reciveable`,`account_payable`,`is_vendor`,`barcode`,`customer_payment_terms`,`degree_of_trust`,`vendor_payment_terms`) VALUES ("'+req.body.name+'","'+req.body.street1+'","'+req.body.street2+'","'+req.body.individual+'","'+req.body.company+'","'+req.body.city+'","'+req.body.states+'","'+req.body.zip+'","'+req.body.country+'","'+req.body.title+'","'+req.body.website+'","'+req.body.job_position+'","'+req.body.phone_number+'","'+req.body.mobile_number+'","'+req.body.fax_number+'","'+req.body.email+'","'+req.body.language+'","'+results.insertId+'","'+req.body.is_Customer+'","'+req.body.is_sales_person+'","'+req.body.sale_pricelist+'","'+req.body.internal_reference_id+'","'+req.body.account_reciveable+'","'+req.body.account_payable+'","'+req.body.is_vendor+'","'+req.body.barcode+'","'+req.body.customer_payment_terms+'","'+req.body.degree_of_trust+'","'+req.body.vendor_payment_terms+'")');
            connection.query('INSERT INTO `contact`(`name`,`street1`,`street2`,`individual`,`company`,`city`,`states`,`zip`,`country`,`title`,`website`,`job_position`,`phone_number`,`mobile_number`,`fax_number`,`email`,`language`,`notes_id`,`is_Customer`,`is_sales_person`,`sale_pricelist`,`internal_reference_id`,`account_reciveable`,`account_payable`,`is_vendor`,`barcode`,`customer_payment_terms`,`degree_of_trust`,`vendor_payment_terms`) VALUES ("'+req.body.name+'","'+req.body.street1+'","'+req.body.street2+'","'+req.body.individual+'","'+req.body.company+'","'+req.body.city+'","'+req.body.states+'","'+req.body.zip+'","'+req.body.country+'","'+req.body.title+'","'+req.body.website+'","'+req.body.job_position+'","'+req.body.phone_number+'","'+req.body.mobile_number+'","'+req.body.fax_number+'","'+req.body.email+'","'+req.body.language+'","'+results.insertId+'","'+req.body.is_Customer+'","'+req.body.is_sales_person+'","'+req.body.sale_pricelist+'","'+req.body.internal_reference_id+'","'+req.body.account_reciveable+'","'+req.body.account_payable+'","'+req.body.is_vendor+'","'+req.body.barcode+'","'+req.body.customer_payment_terms+'","'+req.body.degree_of_trust+'","'+req.body.vendor_payment_terms+'")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    connection.query('UPDATE contact_contacts_addresses SET parent_contact_id = "'+results.insertId+'" WHERE parent_contact_id = "'+ req.body.lasting +'"', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }
                    });
                }
            });
        }
    });
});
router.post('/createcontactmodal', function (req, res, next) {
    connection.query('INSERT INTO `contact_notes`(`notes`) VALUES ("' + req.body.mnotes_id + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {
            console.log(req.body);
            connection.query('INSERT INTO `contact`(`name`,`street1`,`street2`,`city`,`states`,`zip`,`country`,`title`,`job_position`,`phone_number`,`mobile_number`,`email`,`notes_id`) VALUES ("'+req.body.name+'","'+req.body.street1+'","'+req.body.street2+'","'+req.body.city+'","'+req.body.states+'","'+req.body.zip+'","'+req.body.country+'","'+req.body.title+'","'+req.body.job_position+'","'+req.body.phone_number+'","'+req.body.mobile_number+'","'+req.body.email+'","'+results.insertId+'")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    console.log(req.body);
                    connection.query('INSERT INTO `contact_contacts_addresses`(`parent_contact_id`,`child_contact_id`) VALUES ("' + req.body.last + '","' + results1.insertId + '")', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }

                    });
                }
            });
        }
    });
});

//==================================================ContactInfo=========================================================
router.post('/selectcontactinfo', function (req, res, next) {

    connection.query('SELECT * from contact  where  id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectcontactinfo1', function (req, res, next) {

    connection.query('SELECT * from contact  where  id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectchild', function (req, res, next) {

    connection.query('SELECT contact.id,contact.name,contact.email,contact.job_position FROM contact WHERE contact.id IN (SELECT contact_contacts_addresses.child_contact_id FROM contact_contacts_addresses WHERE contact_contacts_addresses.parent_contact_id = "'+req.body.id+'")', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
            console.log(results)
        }
    });

});
router.post('/mycontact', function (req, res, next) {

    connection.query('SELECT * from contact  where  id='+"'"+ req.body.child_contact_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectnote', function (req, res, next) {

    connection.query('SELECT * from contact_notes  where  id='+"'"+ req.body.notes_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectnote1', function (req, res, next) {

    connection.query('SELECT * from contact_notes  where  id='+"'"+ req.body.notes_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectaccount', function (req, res, next) {

    connection.query('SELECT name as aname from account    where  id='+"'"+ req.body.account_reciveable +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/account_payable', function (req, res, next) {

    connection.query('SELECT name as bname from account    where  id='+"'"+ req.body.account_payable +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/contactdeletes', function (req, res, next) {
    connection.query('DELETE  from contact where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/contactdeletes1', function (req, res, next) {
    connection.query('DELETE  from contact where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((EDITCONTACT))))))))))))))))))))))))))))))
router.post('/createcontactedit', function (req, res, next) {

    console.log(req.body);
    connection.query('UPDATE contact SET name = "'+req.body.name+'",street1 = "'+req.body.street1+'",city = "'+req.body.city+'",states = "'+req.body.states+'",zip = "'+req.body.zip+'",country = "'+req.body.country+'",website = "'+req.body.website+'",street2 = "'+req.body.street2+'",company = "'+req.body.company+'", job_position = "'+req.body.job_position+'",phone_number = "'+req.body.phone_number+'",mobile_number = "'+req.body.mobile_number+'",fax_number = "'+req.body.fax_number+'",email = "'+req.body.email+'",title = "'+req.body.title+'",language = "'+req.body.language+'",is_Customer = "'+req.body.is_Customer+'",is_sales_person = "'+req.body.is_sales_person+'",internal_reference_id = "'+req.body.internal_reference_id+'",is_vendor = "'+req.body.is_vendor+'",barcode = "'+req.body.barcode+'",account_reciveable = "'+req.body.account_reciveable+'",account_payable = "'+req.body.account_payable+'",vendor_payment_terms = "'+req.body.vendor_payment_terms+'",degree_of_trust = "'+req.body.degree_of_trust+'",customer_payment_terms = "'+req.body.customer_payment_terms+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    connection.query('UPDATE contact_notes SET notes = "'+req.body.notes+'" WHERE id = "'+ req.body.notes_id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    //req.session.success = true;


});
router.post('/createcontacteditmodal', function (req, res, next) {

    console.log(req.body);
    connection.query('UPDATE contact SET name = "'+req.body.name+'",street1 = "'+req.body.street1+'",city = "'+req.body.city+'",states = "'+req.body.states+'",zip = "'+req.body.zip+'",country = "'+req.body.country+'",website = "'+req.body.website+'",street2 = "'+req.body.street2+'", job_position = "'+req.body.job_position+'",phone_number = "'+req.body.phone_number+'",mobile_number = "'+req.body.mobile_number+'",fax_number = "'+req.body.fax_number+'",email = "'+req.body.email+'",title = "'+req.body.title+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    connection.query('UPDATE contact_notes SET notes = "'+req.body.notes+'" WHERE id = "'+ req.body.notes_id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    //req.session.success = true;


});

//pagination of contact
router.post('/contactpage', function (req, res, next) {

    connection.query('SELECT * FROM contact WHERE id = ( SELECT max( id ) FROM contact WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/contactpage2', function (req, res, next) {

    connection.query('SELECT * FROM contact WHERE id = ( SELECT MIN( id ) FROM contact WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/numcontact', function (req, res, next) {

    connection.query("select COUNT(*) as count from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
//===******===========================================Contacts============******************============================
router.post('/lettertable', function (req, res, next) {

    connection.query("SELECT application_documents.application_id as id, application_documents.document_url, application_documents.type, applications.application_tittle, applications.date_created, applications.owner FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id ORDER BY application_documents.application_id DESC limit 10", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/lettertablenext', function (req, res, next) {

    console.log('SELECT * from stages limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT application_documents.application_id as id, application_documents.document_url, application_documents.type, applications.application_tittle, applications.date_created, applications.owner FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id ORDER BY application_documents.application_id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/lettertableback', function (req, res, next) {
    console.log('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT application_documents.application_id as id, application_documents.document_url, application_documents.type, applications.application_tittle, applications.date_created, applications.owner FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id ORDER BY application_documents.application_id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});


router.post('/sources', function (req, res, next) {

    connection.query("select * from applicant", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sourcedeps', function (req, res, next) {

    connection.query("select * from user", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sourcedepss', function (req, res, next) {

    connection.query("select * from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sourcedep', function (req, res, next) {

    connection.query("select * from department", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/selectemail', function (req, res, next) {

    connection.query('SELECT name from email_template where id='+"'"+ req.body.email_template_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/s', function (req, res, next) {

    connection.query('SELECT job_tittle from job_positions where id='+"'"+ req.body.job_specific +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/ss', function (req, res, next) {

    connection.query('SELECT company  from contact where id='+"'"+ req.body.job_location +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sss', function (req, res, next) {

    connection.query('SELECT name  from department where id='+"'"+ req.body.department_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sb', function (req, res, next) {

    connection.query('SELECT username  from user where id='+"'"+ req.body.recruitment_responsible +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/manager', function (req, res, next) {

    connection.query('SELECT employeename from employee where id='+"'"+ req.body.manager_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/parentdep', function (req, res, next) {

    connection.query('SELECT name  from department where id='+"'"+ req.body.parent_dept_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/Editreq', function (req, res, next) {
    if(!(req.body.expected)){
        req.body.expected=null;
    }
    if(!(req.body.job_location)){
        req.body.job_location=null;
    }
    if(!(req.body.department_id)){
        req.body.department_id=null;
    }
    if(!(req.body.recruitment_responsible)){
        req.body.recruitment_responsible=null;
    }
    if(!(req.body.status)){
        req.body.status=0;
    }
    connection.query('UPDATE job_positions SET job_tittle = "'+req.body.job_tittle+'",department_id = "'+req.body.department_id+'",recruitment_responsible = "'+req.body.recruitment_responsible+'",job_location = "'+req.body.job_location+'", job_email = "'+req.body.job_email+'",expected = "'+req.body.expected+'",description = "'+req.body.description+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    //req.session.success = true;
});
router.post('/Editapp', function (req, res, next) {
    console.log('UPDATE applications SET application_tittle = "'+req.body.application_tittle+'",applied_job = '+req.body.applied_job+',department_id = '+req.body.department_id+',responsible_id = '+req.body.responsible_id+', source = "'+req.body.source+'",expected_salary = '+req.body.expected_salary+',expected_salary_extra = "'+req.body.expected_salary_extra+'",proposed_salary = '+req.body.proposed_salary+',proposed_salary_extra = "'+req.body.proposed_salary_extra+'",availability = "'+req.body.availability+'",application_summary = "'+req.body.application_summary+'" WHERE id = '+ req.body.appid +'');
    connection.query('UPDATE applications SET application_tittle = "'+req.body.application_tittle+'",applied_job = '+req.body.applied_job+',department_id = '+req.body.department_id+',responsible_id = '+req.body.responsible_id+', source = "'+req.body.source+'",expected_salary = '+req.body.expected_salary+',expected_salary_extra = "'+req.body.expected_salary_extra+'",proposed_salary = '+req.body.proposed_salary+',proposed_salary_extra = "'+req.body.proposed_salary_extra+'",application_summary = "'+req.body.application_summary+'" WHERE id = '+ req.body.appid +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/Editapplicant', function (req, res, next) {
    console.log(error.message);
    console.log('UPDATE applicant SET applicants_name = "'+req.body.applicants_name+'",contact_id = '+req.body.contact_id+',email = "'+req.body.email+'",phone = "'+req.body.phone+'", mobile = "'+req.body.mobile+'",degree = "'+req.body.degree+'",next_action_date = "'+req.body.next_action_date+'",next_action_description	 = "'+req.body.next_action_description+'",appreciation = '+req.body.appreciation+',referred_by = "'+req.body.referred_by+'" WHERE id = '+ req.body.appids +'');
    connection.query('UPDATE applicant SET applicants_name = "'+req.body.applicants_name+'",contact_id = '+req.body.contact_id+',email = "'+req.body.email+'",phone = "'+req.body.phone+'", mobile = "'+req.body.mobile+'",degree = "'+req.body.degree+'",next_action_date = "'+req.body.next_action_date+'",next_action_description	 = "'+req.body.next_action_description+'",appreciation = '+req.body.appreciation+',referred_by = "'+req.body.referred_by+'" WHERE id = '+ req.body.appids +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/edittag', function (req, res, next) {
    console.log(error.message);
    console.log('UPDATE applications_tags SET tags_id = '+req.body.tags_id+' WHERE applications_id = '+ req.body.appid +'');
    connection.query('UPDATE applications_tags SET tags_id = '+req.body.tags_id+' WHERE applications_id = '+ req.body.appid +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/Editreqs', function (req, res, next) {
    if(!(req.body.parent_dept_id)){
        req.body.parent_dept_id=null;
    }
    if(!(req.body.manager_id)){
        req.body.manager_id=null;
    }
    connection.query('UPDATE department SET name = "'+req.body.name+'",parent_dept_id = '+req.body.parent_dept_id+',manager_id = '+req.body.manager_id+' WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/Editreqsmodal', function (req, res, next) {
    if(!(req.body.parent_dept_id)){
        req.body.parent_dept_id=null;
    }
    if(!(req.body.manager_id)){
        req.body.manager_id=null;
    }
    console.log('UPDATE department SET name = "'+req.body.name+'",parent_dept_id = '+req.body.parent_dept_id+',manager_id = '+req.body.manager_id+' WHERE id = '+ req.body.id +'');
    connection.query('UPDATE department SET name = "'+req.body.name+'",parent_dept_id = '+req.body.parent_dept_id+',manager_id = '+req.body.manager_id+' WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/reqjobs', function (req, res, next) {
    if(!(req.body.expected)){
        req.body.expected=null;
    }
    if(!(req.body.job_location)){
        req.body.job_location=null;
    }
    if(!(req.body.department_id)){
        req.body.department_id=null;
    }
    if(!(req.body.recruitment_responsible)){
        req.body.recruitment_responsible=null;
    }
    if(!(req.body.status)){
        req.body.status=0;
    }
    console.log('UPDATE job_positions SET job_tittle = "'+req.body.job_tittle+'",status = '+req.body.status+',department_id = '+req.body.department_id+',recruitment_responsible = '+req.body.recruitment_responsible+',job_location = '+req.body.job_location+', job_email = "'+req.body.job_email+'",expected = '+req.body.expected+',description = "'+req.body.description+'" WHERE id = '+ req.body.id +'');
    connection.query('UPDATE job_positions SET job_tittle = "'+req.body.job_tittle+'",status = '+req.body.status+',department_id = '+req.body.department_id+',recruitment_responsible = '+req.body.recruitment_responsible+',job_location = '+req.body.job_location+', job_email = "'+req.body.job_email+'",expected = '+req.body.expected+',description = "'+req.body.description+'" WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/letterEdit', function (req, res, next) {
    console.log(req.body.type);

    connection.query('UPDATE application_documents SET document_url = "'+req.body.document_url+'", type = '+req.body.type+' WHERE application_id = '+ req.body.application_id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/letterEditss', function (req, res, next) {
    console.log(req.body.type);
    connection.query('UPDATE applications SET application_tittle = "'+req.body.application_tittle+'" WHERE id = '+ req.body.application_id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
    //req.session.success = true;
});
router.post('/Editreq', function (req, res, next) {
    connection.query('UPDATE department SET name = "'+req.body.name+'", parent_dept_id = "'+req.body.parent_dept_id+'", manager_id = "'+req.body.manager_id+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/Editstages', function (req, res, next) {
    if(!(req.body.job_specific)){
        req.body.job_specific=null;
    }
    if(!(req.body.email_template_id)){
        req.body.email_template_id=null;
    }
    if(!(req.body.email_template_id)){
        req.body.email_template_id=null;
    }

    console.log(req.body.folded);
    console.log('UPDATE stages SET name = "'+req.body.name+'", job_specific = '+req.body.job_specific+', email_template_id = '+req.body.email_template_id+',folded = '+req.body.folded+',description = "'+req.body.description+'" WHERE id = '+req.body.id+'');
    connection.query('UPDATE stages SET name = "'+req.body.name+'", job_specific = '+req.body.job_specific+', email_template_id = '+req.body.email_template_id+',folded = '+req.body.folded+',description = "'+req.body.description+'" WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/deletejob', function (req, res, next) {
    connection.query('DELETE  from job_positions where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/deleteletter', function (req, res, next) {
    connection.query('DELETE  from application_documents where application_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/delete', function (req, res, next) {
    connection.query('DELETE  from stages where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/deletes', function (req, res, next) {
    connection.query('DELETE  from department where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/deletesapp', function (req, res, next) {
    connection.query('DELETE  from applications_tags where applications_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {

            connection.query('DELETE  from applicant where id='+"'"+ req.body.ids +"'" +'', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    console.log(results1);
                    connection.query('DELETE  from applications where id='+"'"+ req.body.id +"'" +'', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }

                    })
                }

            });
        }
    });
});
router.post('/depinsert', function (req, res, next) {
    if(!(req.body.parent_dept_id)){
        req.body.parent_dept_id=null;
    }
    if(!(req.body.manager_id)){
        req.body.manager_id=null;
    }
    console.log(req.body.manager_id)
    connection.query('INSERT INTO `department`(`name`,`parent_dept_id`,`manager_id`) VALUES ("'+req.body.name+'",'+req.body.parent_dept_id+','+req.body.manager_id+')', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }// console.log(results);
    });
});
router.post('/depinsertmodal', function (req, res, next) {
    if(!(req.body.parent_dept_id)){
        req.body.parent_dept_id=null;
    }
    if(!(req.body.manager_id)){
        req.body.manager_id=null;
    }
    console.log(req.body.manager_id)
    connection.query('INSERT INTO `department`(`name`,`parent_dept_id`,`manager_id`) VALUES ("'+req.body.name+'",'+req.body.parent_dept_id+','+req.body.manager_id+')', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }// console.log(results);
    });
});
router.post('/documentinsert', function (req, res, next) {
    connection.query('INSERT INTO `application_documents`(`application_id`,`document_url`,`type`) VALUES ("'+req.body.document_url+'","'+req.body.type+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/depinserts', function (req, res, next) {

    connection.query('INSERT INTO `department`(`name`,`parent_dept_id`,`manager_id`) VALUES ("'+req.body.f+'","'+req.body.parent_dept_id+'","'+req.body.manager_id+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/stages', function (req, res, next) {
    if(!(req.body.job_specific)){
        req.body.job_specific=null;
    }
    if(!(req.body.email_template_id)){
        req.body.email_template_id=null;
    }
    if(!(req.body.folded)){
        req.body.folded=0;
    }
    connection.query('INSERT INTO `stages`(`name`,`job_specific`,`email_template_id`,`folded`,`description`) VALUES ("'+req.body.name+'",'+req.body.job_specific+','+req.body.email_template_id+','+req.body.folded+',"'+req.body.description+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/createstages', function (req, res, next) {

    connection.query('INSERT INTO `stages`(`name`) VALUES ("'+req.body.stagename+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
router.post('/createapp', function (req, res, next) {

    connection.query('INSERT INTO `applications`(`job_positions_id`,`application_tittle`) VALUES ("'+req.body.id+'","'+req.body.title+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/settings', function (req, res, next) {
    if(!(req.body.interview_form)){
        req.body.interview_form=0;
    }
    if(!(req.body.notinterview_form)){
        req.body.notinterview_form=0;
    }
    console.log('INSERT INTO `recruitment_setting`(`interview_form`,`notinterview_form`) VALUES ('+req.body.interview_form+','+req.body.notinterview_form+')');
    connection.query('INSERT INTO `recruitment_setting`(`interview_form`,`notinterview_form`) VALUES ('+req.body.interview_form+','+req.body.notinterview_form+')', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/reqjob', function (req, res, next) {
    if(!(req.body.expected)){
        req.body.expected=null;
    }
    if(!(req.body.job_location)){
        req.body.job_location=null;
    }
    if(!(req.body.department_id)){
        req.body.department_id=null;
    }
    if(!(req.body.recruitment_responsible)){
        req.body.recruitment_responsible=null;
    }
    if(!(req.body.status)){
        req.body.status=0;
    }
    console.log('INSERT INTO `job_positions`(`status`,`job_tittle`,`job_email`,`department_id`,`recruitment_responsible`,`expected`,`job_location`,`description`) VALUES ('+req.body.status+',"'+req.body.job_tittle+'","'+req.body.job_email+'",'+req.body.department_id+','+req.body.recruitment_responsible+','+req.body.expected+','+req.body.job_location+',"'+req.body.description+'")');
    connection.query('INSERT INTO `job_positions`(`status`,`job_tittle`,`job_email`,`department_id`,`recruitment_responsible`,`expected`,`job_location`,`description`) VALUES ('+req.body.status+',"'+req.body.job_tittle+'","'+req.body.job_email+'",'+req.body.department_id+','+req.body.recruitment_responsible+','+req.body.expected+','+req.body.job_location+',"'+req.body.description+'")', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });

});
router.post('/inserted', function (req, res, next) {

    connection.query('INSERT INTO `applications_tags`(`applications_id`,`tags_id`) VALUES ("'+req.body.applications_id+'","'+req.body.tagid+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/stageinsert', function (req, res, next) {

    connection.query('INSERT INTO `stages`(`name`) VALUES ("'+req.body.stagename+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(req.body.id);
    });
});

router.post('/inserttags', function (req, res, next) {
    connection.query('INSERT INTO `applications_tags`(`applications_id`,`tags_id`) VALUES ("'+req.body.tagid+'","'+req.body.applications_id+'")', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else {
            console.log(err);
            res.send("Something goes wrong!");
        }
    });
});
router.post('/ktry', function (req, res, next) {
    if(!(req.body.next_action_date)){
        req.body.next_action_date=0;
    }
    if(!(req.body.availability)){
        req.body.availability=0;
    }
    if(!(req.body.contact_id)){
        req.body.contact_id=null;
    }
    if(!(req.body.appreciation)){
        req.body.appreciation=3;
    }
    if(!(req.body.application_status)){
        req.body.application_status=null;
    }
    if(!(req.body.job_positions_id)){
        req.body.job_positions_id=0;
    }
    if(!(req.body.applicant_id)){
        req.body.applicant_id=0;
    }
    if(!(req.body.applied_job)){
        req.body.applied_job=null;
    }
    if(!(req.body.department_id)){
        req.body.department_id=null;
    }
    if(!(req.body.responsible_id)){
        req.body.responsible_id=null;
    }

    if(!(req.body.expected_salary)){
        req.body.expected_salary=null;
    }
    if(!(req.body.proposed_salary)){
        req.body.proposed_salary=null;
    }
    if(!(req.body.availability)){
        req.body.availability=null;
    }
    if(!(req.body.stage_id)){
        req.body.stage_id=null;
    }
    if(!(req.body.date_created)){
        req.body.date_created=null;
    }

    console.log('INSERT INTO `applicant`(`applicants_name`,`contact_id`,`email`,`phone`,`mobile`,`degree`,`next_action_date`,`next_action_description`,`appreciation`,`referred_by`) VALUES ("' + req.body.applicants_name + '",' + req.body.contact_id + ',"' + req.body.email + '","' + req.body.phone + '","' + req.body.mobile + '","' + req.body.degree + '","' + req.body.next_action_date + '","' + req.body.next_action_description + '",' + req.body.appreciation + ',"' + req.body.referred_by + '")');
    connection.query('INSERT INTO `applicant`(`applicants_name`,`contact_id`,`email`,`phone`,`mobile`,`degree`,`next_action_date`,`next_action_description`,`appreciation`,`referred_by`) VALUES ("' + req.body.applicants_name + '",' + req.body.contact_id + ',"' + req.body.email + '","' + req.body.phone + '","' + req.body.mobile + '","' + req.body.degree + '","' + req.body.next_action_date + '","' + req.body.next_action_description + '",' + req.body.appreciation + ',"' + req.body.referred_by + '")', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
        else {
            console.log('INSERT INTO `applications`(`job_positions_id`,`application_tittle`,`responsible_id`,`source`,`applied_job`,`department_id`,`expected_salary`,`expected_salary_extra`,`proposed_salary`,`proposed_salary_extra`,`availability`,`application_summary`,`applicant_id`,`stage_id`,`date_created`) VALUES (' + req.body.job_positions_id + ',"' + req.body.application_tittle + '",' + req.body.responsible_id + ',"' + req.body.source + '",' + req.body.applied_job + ',' + req.body.department_id + ',' + req.body.expected_salary + ',"' + req.body.expected_salary_extra + '",' + req.body.proposed_salary + ',"' + req.body.proposed_salary_extra + '","' + req.body.availability + '","' + req.body.application_summary + '",' + results.insertId + ',' + req.body.stageid + ',"' + getDateTime() + '")');
            connection.query('INSERT INTO `applications`(`job_positions_id`,`application_tittle`,`responsible_id`,`source`,`applied_job`,`department_id`,`expected_salary`,`expected_salary_extra`,`proposed_salary`,`proposed_salary_extra`,`availability`,`application_summary`,`applicant_id`,`stage_id`,`date_created`) VALUES (' + req.body.job_positions_id + ',"' + req.body.application_tittle + '",' + req.body.responsible_id + ',"' + req.body.source + '",' + req.body.applied_job + ',' + req.body.department_id + ',' + req.body.expected_salary + ',"' + req.body.expected_salary_extra + '",' + req.body.proposed_salary + ',"' + req.body.proposed_salary_extra + '","' + req.body.availability + '","' + req.body.application_summary + '",' + results.insertId + ',' + req.body.stageid + ',"' + getDateTime() + '")', function (error, results1, fields) {
                if (error) {
                    console.log(error.message);
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    console.log('INSERT INTO `applications_tags`(`applications_id`,`tags_id`) VALUES (' + results1.insertId + ',' + req.body.tags_id + ')');
                    connection.query('INSERT INTO `applications_tags`(`applications_id`,`tags_id`) VALUES (' + results1.insertId + ',' + req.body.tags_id + ')', function (error, results1, fields) {
                        if (error) {
                            console.log(error.message);
                            res.json({"status": "failed", "message": error.message});
                        }
                    })
                }
            });
        }
    });
});
router.post('/ok', function (req, res, next) {
    connection.query('INSERT INTO `applications`(`job_positions_id`,`application_tittle`) VALUES ("' + req.body.job_positions_id + '","' + req.body.application_tittle + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {
            console.log(results);
            connection.query('INSERT INTO `application_documents`(`application_id`,`document_url`,`type`) VALUES ("' + results.insertId + '","' + req.body.document_url + '","' + req.body.type + '")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {

                }
            });
        }
    });
});
router.post('/inserting', function (req, res, next) {
    connection.query('INSERT INTO `applicant`(`applicants_name`,`contact_id`,`email`,`phone`,`mobile`,`degree`,`next_action_date`,`next_action_description`,`appreciation`,`referred_by`,`applicant_id`) VALUES ("'+req.body.applicants_name+'","'+req.body.contact_id+'","'+req.body.email+'","'+req.body.phone+'","'+req.body.mobile+'","'+req.body.degree+'","'+req.body.next_action_date+'","'+req.body.next_action_description+'","'+req.body.appreciation+'","'+req.body.referred_by+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/contact', function (req, res, next) {

    connection.query("select * from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/trys', function (req, res, next) {

    connection.query("select * from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/try', function (req, res, next) {
    connection.query('INSERT INTO `job_positions`(`job_tittle`) VALUES ("'+req.body.title+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ATTENDANCE Work
router.post('/attendance_table', function (req, res, next) {
    connection.query("SELECT attandance.date as date,attandance.emp_id ,attandance.CheckIn,attandance.CheckOut, employee.employeename,employee.id FROM attandance INNER JOIN employee ON attandance.emp_id = employee.id limit 2", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/attendance_tablenext', function (req, res, next) {

    connection.query('SELECT attandance.date as date ,attandance.emp_id ,attandance.CheckIn,attandance.CheckOut, employee.employeename,employee.id FROM attandance INNER JOIN employee ON attandance.emp_id = employee.id limit 2  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/attendance_tableback', function (req, res, next) {

    connection.query('SELECT attandance.date as date,attandance.emp_id ,attandance.CheckIn,attandance.CheckOut, employee.employeename,employee.id FROM attandance INNER JOIN employee ON attandance.emp_id = employee.id limit 2  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/numatt', function (req, res, next) {
    connection.query("select COUNT(*) as count from attandance", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/delete_attendance', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `attandance` WHERE emp_id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);

});
router.post('/attendanceinsert', function (req, res, next) {

    if(!(req.body.emp_id)){
        req.body.emp_id=null;
    }
    console.log('INSERT INTO `attandance`(`emp_id`,`date`,`CheckIn`,`CheckOut`) VALUES ('+req.body.emp_id+',"' + getDateTime() + '","'+req.body.CheckIn+'","'+req.body.CheckOut+'")');
    connection.query('INSERT INTO `attandance`(`emp_id`,`date`,`CheckIn`,`CheckOut`) VALUES ('+req.body.emp_id+',"' + getDateTime() + '","'+req.body.CheckIn+'","'+req.body.CheckOut+'")', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/select_employee', function (req, res, next) {

    connection.query("select * from employee", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/select_employee_att', function (req, res, next) {
    connection.query("SELECT * FROM employee", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/selectatt', function (req, res, next) {
    console.log('SELECT * from attandance where emp_id='+"'"+ req.body.id +"'" +' AND date='+"'"+ getDateTime2() +"'" +'');
    connection.query('SELECT * from attandance where emp_id='+"'"+ req.body.id +"'" +' AND date='+"'"+ getDateTime2() +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/selectattandacetotalbreak', function (req, res, next) {
    console.log('SELECT TIMEDIFF(`BreakOut`, `BreakIn`) as total from attandance where emp_id='+"'"+ req.body.id +"'" +' AND date='+"'"+ getDateTime2() +"'" +'');
    connection.query('SELECT TIMEDIFF(`BreakOut`, `BreakIn`) AS total from attandance where emp_id='+"'"+ req.body.id +"'" +' AND date='+"'"+ getDateTime2() +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selecttotattime', function (req, res, next) {
    console.log('SELECT TIMEDIFF(`BreakOut`, `BreakIn`) as total from attandance where emp_id='+"'"+ req.body.id +"'" +' AND date='+"'"+ getDateTime2() +"'" +'');
    connection.query('SELECT TIMEDIFF(`CheckOut`, `CheckIn`) as total from attandance where emp_id='+"'"+ req.body.id +"'" +' AND date='+"'"+ getDateTime2() +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/usaa-att', function (req, res, next) {

    connection.query('SELECT * FROM attandance WHERE emp_id = ( SELECT max( id ) FROM attandance WHERE emp_id <='+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/usa-att', function (req, res, next) {
    connection.query('SELECT * FROM attandance WHERE emp_id = ( SELECT MIN( id ) FROM attandance WHERE emp_id =>'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/deletesatt', function (req, res, next) {
    console.log('DELETE  from attandance WHERE emp_id = '+ req.body.id +' AND  date= "'+req.body.date+'"');
    connection.query('DELETE  from attandance WHERE emp_id = '+ req.body.id +' AND  date = "'+req.body.date+'"', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/Editstatus', function (req, res, next) {
    console.log('UPDATE employee SET statuss = '+req.body.status+' WHERE id = '+ req.body.id +'');
    connection.query('UPDATE employee SET statuss = '+req.body.statuss+' WHERE id = '+ req.body.status +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/idselect', function (req, res, next) {
    connection.query('SELECT *  from employee where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/insertattandanceCheckIn', function (req, res, next) {
    var d="00:00:00";
    connection.query('INSERT INTO `attandance`(`emp_id`,`date`,`CheckIn`,`Breaktotal`,`TotalTime`) VALUES (' + req.body.employee_id + ',"' + getDateTime2() + '","' + getDateTime() + '","' + d + '","' + d + '")', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});

router.post('/insertattandanceCheckout', function (req, res, next) {
    var datetime = getDateTime2();
    var datetime2 = getDateTime();

    connection.query('UPDATE attandance SET CheckOut = "'+datetime2+'" WHERE emp_id = '+ req.body.employee_id +' AND date = "'+datetime+'"', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/updatebrekin', function (req, res, next) {
    var datetime = getDateTime2();
    var datetime3 = getDateTime3();
    connection.query('UPDATE attandance SET BreakIn = "'+datetime3+'" WHERE emp_id = '+ req.body.employee_id +' AND date = "'+datetime+'"', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/updatetotalbreak', function (req, res, next) {
    var datetime = getDateTime2();
    connection.query('UPDATE attandance SET Breaktotal = ADDTIME(Breaktotal,"'+req.body.total+'") WHERE emp_id = '+ req.body.employee_id +' AND date = "'+datetime+'"', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/updatetotalbreak2', function (req, res, next) {
    var datetime = getDateTime2();

    connection.query('UPDATE attandance SET TotalTime = ADDTIME(TotalTime,"'+req.body.total+'") WHERE emp_id = '+ req.body.employee_id +' AND date = "'+datetime+'"', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/updatebrekout', function (req, res, next) {
    var datetime = getDateTime2();
    var datetime3 = getDateTime3();
    connection.query('UPDATE attandance SET BreakOut = "'+datetime3+'" WHERE emp_id = '+ req.body.employee_id +' AND date = "'+datetime+'"', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/herachy', function (req, res, next) {

    connection.query('SELECT A.employeename AS employeename, A.work_email AS work_email, B.name AS DepartmentName2, A.work_phone, em.job_tittle FROM employee A, department B, job_positions em WHERE A.department_id = B.id AND A.job_tittle = em.id AND A.id  = '+ req.body.id +'   ', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/herachy1', function (req, res, next) {

    connection.query('SELECT A.employee_manager_id AS employee_manager_id,A.id AS id,A.employeename AS employeename, A.work_email AS work_email, B.name AS DepartmentName2, A.work_phone, em.job_tittle FROM employee A, department B, job_positions em WHERE A.department_id = B.id AND A.job_tittle = em.id AND A.employee_manager_id = '+ req.body.id +'  ', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/herachy2', function (req, res, next) {
    console.log('SELECT A.employeename AS employeename, A.work_email AS work_email, B.name AS DepartmentName2, A.work_phone, em.job_tittle FROM employee A, department B, job_positions em WHERE A.department_id = B.id AND A.job_tittle = em.id AND A.employee_manager_id = '+ req.body.id +'   ');
    connection.query('SELECT A.employeename AS employeename, A.work_email AS work_email, B.name AS DepartmentName2, A.work_phone, em.job_tittle FROM employee A, department B, job_positions em WHERE A.department_id = B.id AND A.job_tittle = em.id AND A.employee_manager_id = '+ req.body.id +'   ', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/updatesettings', function (req, res, next) {
    var datetime = getDateTime2();
    connection.query('UPDATE attandance_settings SET employee_pin = "' + req.body.employee_pin + '" WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/selectattsetting', function (req, res, next) {
    console.log('SELECT *  from attandance_settings where id='+req.body.id+'');
    connection.query('SELECT *  from attandance_settings where id='+req.body.id+'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectattandance', function (req, res, next) {
    console.log('SELECT *  from attandance_settings where emp_id='+req.body.id+'');
    connection.query('SELECT *  from attandance_settings where emp_id='+req.body.id+'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectbreaktime', function (req, res, next) {
    console.log('SELECT *  from attandance_settings where emp_id='+req.body.id+'');
    connection.query('SELECT TIMEDIFF(`BreakOut`,`BreakIn`) as total from attandance where emp_id ='+req.body.id+'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
    });
});
// router.post('/attandanceupdate', function (req, res, next) {
//     console.log(req.body.type);
//     connection.query('UPDATE attandance SET CheckIn = "'+req.body.CheckIn+'" WHERE id = '+ req.body.application_id +'', function (error, results, fields) {
//         if (error) {
//             res.json({"status": "failed", "message": error.message});
//         }
//     });
// });
router.post('/attandanceupdate', function (req, res, next) {
    console.log('UPDATE attandance SET CheckIn = "'+req.body.CheckIn+'",CheckOut = "'+req.body.CheckOut+'",emp_id = '+req.body.emp_id+' WHERE emp_id = '+ req.body.id +' AND date = "'+ req.body.date +'"');
    connection.query('UPDATE attandance SET CheckIn = "'+req.body.CheckIn+'",CheckOut = "'+req.body.CheckOut+'" WHERE emp_id = '+ req.body.id +' AND date = "'+ req.body.date +'"', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/fetchattendance', function (req, res, next) {
    console.log('SELECT *  from attandance where emp_id='+req.body.employee_id+'');
    connection.query('SELECT *  from attandance where emp_id="'+req.body.employee_id+'"', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/fetchattendancetotal', function (req, res, next) {
    console.log('SELECT *  from attandance where emp_id='+req.body.employee_id+'');
    connection.query('SELECT SEC_TO_TIME(SUM(TIME_TO_SEC(`TotalTime`))) AS total  from attandance where emp_id="'+req.body.employee_id+'"AND date = '+ req.body.date +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/sectid', function (req, res, next) {
    connection.query('SELECT * from attandance where emp_id='+"'"+ req.body.employee_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/fetchEmployeeName', function (req, res, next) {
    connection.query('SELECT * FROM `employee` limit 2', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/fetchEmployeeName1', function (req, res, next) {
    connection.query('SELECT * from employee where job_tittle='+"'"+ req.body.id +"'" +' limit 2' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
router.post('/empnext', function (req, res, next) {

    connection.query('SELECT * FROM `employee` limit 2  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/empnext1', function (req, res, next) {
    console.log('SELECT * from employee where job_tittle='+"'"+ req.body.id +"'" +' limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT * from employee where job_tittle='+"'"+ req.body.id +"'" +' limit 2  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/empback', function (req, res, next) {

    connection.query('SELECT * FROM `employee` limit 2  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/empback1', function (req, res, next) {
    console.log('SELECT * from employee where job_tittle='+"'"+ req.body.id +"'" +' limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT * from employee where job_tittle='+"'"+ req.body.id +"'" +' limit 2 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/addNewDepartment', function (req, res, next) {
    console.log('INSERT INTO `department`(`name`,`parent_dept_id`,`manager_id`) VALUES ("'+req.body.departName+'","'+req.body.parentDeptId+'","'+req.body.managerId+'")');
    connection.query('INSERT INTO `department`(`name`,`parent_dept_id`,`manager_id`) VALUES ("'+req.body.departName+'","'+req.body.parentDeptId+'","'+req.body.managerId+'")', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/addNewEmployee', function (req, res, next) {

    if(!req.body.workingAddressId ){
        req.body.workingAddressId = null;
    }
    if(!req.body.departmentId){
        req.body.departmentId = null;
    }
    if(!req.body.jobtitleId ){
        req.body.jobtitleId = null;
    }
    if(!req.body.managerId ){
        req.body.managerId = null;
    }
    if(!req.body.coachId ){
        req.body.coachId = null;
    }
    if(!req.body.workingTimeId ){
        req.body.workingTimeId = null;
    }
    if(!req.body.countryId ){
        req.body.countryId = null;
    }
    if(!req.body.BankAccountNumbersId ){
        req.body.BankAccountNumbersId = null;
    }
    if(!req.body.homeAddressId ){
        req.body.homeAddressId = null;
    }
    if(!req.body.accountId ){
        req.body.accountId = null;
    }
    if(!req.body.HomeDistance ){
        req.body.HomeDistance = null;
    }
    if(!req.body.relatedUserId ){
        req.body.relatedUserId = null;
    }
    if(!req.body.badgeId ){           //'+req.body.badgeId+','+req.body.pin+','+req.body.manualAttendance+','+req.body.status+'
        req.body.badgeId = null;
    }if(!req.body.pin ){
        req.body.pin = null;
    }if(!req.body.manualAttendance ){
        req.body.manualAttendance = null;
    }
    if(!req.body.status ){
        req.body.status = 0;
    }
    if(!req.body.noOfChildren ) {
        req.body.noOfChildren = null;
    }
    if(!req.body.timeSheetCost ) {
        req.body.timeSheetCost = null;
    }
    if(!req.body.dates_value6 ) {
        req.body.dates_value6 = "";
    }
    if(!req.body.dates_value7 ) {
        req.body.dates_value7 = "";
    }


    console.log("employeeName=  "+req.body.employeeName);
    console.log("workingAddressId=  "+req.body.workingAddressId);
    console.log("workMobile=  "+req.body.workMobile);
    console.log("workLocation=  "+req.body.workLocation);
    console.log("workEmail=   "+req.body.workEmail);
    console.log("workPhone=  "+req.body.workPhone);
    console.log("departmentId=  "+req.body.departmentId);
    console.log("jobtitleId=  "+req.body.jobtitleId);
    console.log("managerId=  "+req.body.managerId);//employee_manager_id
    console.log("coachId=  "+req.body.coachId);
    console.log("workingTimeId=  "+req.body.workingTimeId);
    console.log("countryId=  "+req.body.countryId);
    console.log("identificationNo=  "+req.body.identificationNo);
    console.log("passportNo=  "+req.body.passportNo);
    console.log("BankAccountNumbersId=  "+req.body.BankAccountNumbersId);
    console.log("homeAddressId=  "+req.body.homeAddressId);
    console.log("accountId=  "+req.body.accountId);
    console.log("gender=  "+req.body.gender);
    console.log("relatedUserId=  "+req.body.relatedUserId);
    console.log("badgeId=  "+req.body.badgeId);
    console.log("pin=  "+req.body.pin);
    console.log("badgeId=  "+req.body.badgeId);
    console.log("manualAttendance=  "+req.body.manualAttendance);
    console.log("medicalExamDate=  "+req.body.dates_value7);
    console.log("companyVehicle=  "+req.body.companyVehicle);
    console.log("HomeDistance=  "+req.body.HomeDistance);
    console.log("maritalStatus=  "+req.body.maritalStatus);
    console.log("noOfChildren=  "+req.body.noOfChildren);
    console.log("birthDate=  "+req.body.dates_value6);
    console.log("placeOfBirth=  "+req.body.placeOfBirth);
    console.log("timeSheetCost=  "+req.body.timeSheetCost);
    console.log("status=  "+req.body.status);




    console.log('INSERT INTO `employee`(`employeename`,`work_address_id`,`work_email`,`work_phone`,`work_mobile`,`work_location`,`department_id`,`job_tittle`,`employee_manager_id`,`coach_id`,`country_id`,`working_time_id`,`identification_number`,`passport_number`,`employee_bank_account_id`,`gender`,`maritial_status`,`number_of_childern`,`home_address_id`,`date_of_birth`,`place_of_birth`,`time_sheet_cost`,`account_id`,`medical_exam`,`company_vehicle`,`home_work_distance`,`related_user_id`,`badge_id`,`pin`,`manual_attandance`,`statuss`) ' +
        'VALUES ("'+req.body.employeeName+'",'+req.body.workingAddressId+',"'+req.body.workEmail+'","'+req.body.workPhone+'","'+req.body.workMobile+'","'+req.body.workLocation+'",'+req.body.departmentId+','+req.body.jobtitleId+','+req.body.managerId+','+req.body.coachId+','+req.body.countryId+','+req.body.workingTimeId+',"'+req.body.identificationNo+'","'+req.body.passportNo+'",'+req.body.BankAccountNumbersId+',"'+req.body.gender+'","'+req.body.maritalStatus+'",'+req.body.noOfChildren+','+req.body.homeAddressId+',"'+req.body.dates_value6+'","'+req.body.placeOfBirth+'",'+req.body.timeSheetCost+','+req.body.accountId+',"'+req.body.dates_value7+'","'+req.body.companyVehicle+'",'+req.body.HomeDistance+','+req.body.relatedUserId+','+req.body.badgeId+','+req.body.pin+','+req.body.manualAttendance+','+req.body.status+')');


    //employee_manager_id
    connection.query('INSERT INTO `employee`(`employeename`,`work_address_id`,`work_email`,`work_phone`,`work_mobile`,`work_location`,`department_id`,`job_tittle`,`employee_manager_id`,`coach_id`,`country_id`,`working_time_id`,`identification_number`,`passport_number`,`employee_bank_account_id`,`gender`,`maritial_status`,`number_of_childern`,`home_address_id`,`date_of_birth`,`place_of_birth`,`time_sheet_cost`,`account_id`,`medical_exam`,`company_vehicle`,`home_work_distance`,`related_user_id`,`badge_id`,`pin`,`manual_attandance`,`statuss`) ' +
        'VALUES ("'+req.body.employeeName+'",'+req.body.workingAddressId+',"'+req.body.workEmail+'","'+req.body.workPhone+'","'+req.body.workMobile+'","'+req.body.workLocation+'",'+req.body.departmentId+','+req.body.jobtitleId+','+req.body.managerId+','+req.body.coachId+','+req.body.countryId+','+req.body.workingTimeId+',"'+req.body.identificationNo+'","'+req.body.passportNo+'",'+req.body.BankAccountNumbersId+',"'+req.body.gender+'","'+req.body.maritalStatus+'",'+req.body.noOfChildren+','+req.body.homeAddressId+',"'+req.body.dates_value6+'","'+req.body.placeOfBirth+'",'+req.body.timeSheetCost+','+req.body.accountId+',"'+req.body.dates_value7+'","'+req.body.companyVehicle+'",'+req.body.HomeDistance+','+req.body.relatedUserId+','+req.body.badgeId+','+req.body.pin+','+req.body.manualAttendance+','+req.body.status+')', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else{

        }
    });



});
router.post('/EditEmployee', function (req, res, next) {
    console.log("Inside editEmployee service");

    if(!req.body.workingAddressId ){
        req.body.workingAddressId = null;
    }
    if(!req.body.departmentId){
        req.body.departmentId = null;
    }
    if(!req.body.jobtitleId ){
        req.body.jobtitleId = null;
    }
    if(!req.body.managerId ){
        req.body.managerId = null;
    }
    if(!req.body.coachId ){
        req.body.coachId = null;
    }
    if(!req.body.workingTimeId ){
        req.body.workingTimeId = null;
    }
    if(!req.body.countryId ){
        req.body.countryId = null;
    }
    if(!req.body.BankAccountNumbersId ){
        req.body.BankAccountNumbersId = null;
    }
    if(!req.body.homeAddressId ){
        req.body.homeAddressId = null;
    }
    if(!req.body.accountId ){
        req.body.accountId = null;
    }
    if(!req.body.HomeDistance ){
        req.body.HomeDistance = null;
    }
    if(!req.body.relatedUserId ){
        req.body.relatedUserId = null;
    }
    if(!req.body.badgeId ){           //'+req.body.badgeId+','+req.body.pin+','+req.body.manualAttendance+','+req.body.status+'
        req.body.badgeId = null;
    }if(!req.body.pin ){
        req.body.pin = null;
    }if(!req.body.manualAttendance ){
        req.body.manualAttendance = null;
    }
    if(!req.body.status ){
        req.body.status = null;
    }
    if(!req.body.noOfChildren ) {
        req.body.noOfChildren = null;
    }
    if(!req.body.timeSheetCost ) {
        req.body.timeSheetCost = null;
    }
    if(!req.body.dates_value6 ) {
        req.body.dates_value6 = "";
    }
    if(!req.body.dates_value7 ) {
        req.body.dates_value7 ="" ;
    }

    console.log("employeeName=  "+req.body.employeeName);
    console.log("workingAddressId=  "+req.body.workingAddressId);
    console.log("workMobile=  "+req.body.workMobile);
    console.log("workLocation=  "+req.body.workLocation);
    console.log("workEmail=   "+req.body.workEmail);
    console.log("workPhone=  "+req.body.workPhone);
    console.log("departmentId=  "+req.body.departmentId);
    console.log("jobtitleId=  "+req.body.jobtitleId);
    console.log("managerId=  "+req.body.managerId);//employee_manager_id
    console.log("coachId=  "+req.body.coachId);
    console.log("workingTimeId=  "+req.body.workingTimeId);
    console.log("countryId=  "+req.body.countryId);
    console.log("identificationNo=  "+req.body.identificationNo);
    console.log("passportNo=  "+req.body.passportNo);
    console.log("BankAccountNumbersId=  "+req.body.BankAccountNumbersId);
    console.log("homeAddressId=  "+req.body.homeAddressId);
    console.log("accountId=  "+req.body.accountId);
    console.log("gender=  "+req.body.gender);
    console.log("relatedUserId=  "+req.body.relatedUserId);
    console.log("badgeId=  "+req.body.badgeId);
    console.log("pin=  "+req.body.pin);
    console.log("badgeId=  "+req.body.badgeId);
    console.log("manualAttendance=  "+req.body.manualAttendance);
    console.log("medicalExamDate=  "+req.body.dates_value7);
    console.log("companyVehicle=  "+req.body.companyVehicle);
    console.log("HomeDistance=  "+req.body.HomeDistance);
    console.log("maritalStatus=  "+req.body.maritalStatus);
    console.log("noOfChildren=  "+req.body.noOfChildren);
    console.log("birthDate=  "+req.body.dates_value6);
    console.log("placeOfBirth=  "+req.body.placeOfBirth);
    console.log("timeSheetCost=  "+req.body.timeSheetCost);


    //console.log('INSERT INTO `employee`(`employeename`,`work_address_id`,`work_email`,`work_phone`,`work_mobile`,`work_location`,`department_id`,`job_tittle`,`coach_id`,`country_id`,`working_time_id`,`identification_number`,`passport_number`,`employee_bank_account_id`,`gender`,`maritial_status`,`number_of_childern`,`home_address_id`,`date_of_birth`,`place_of_birth`,`time_sheet_cost`,`account_id`,`medical_exam`,`company_vehicle`,`home_work_distance`,`related_user_id`,`badge_id`,`pin`,`manual_attandance`) ' +
    //'VALUES ("'+req.body.employeeName+'",'+req.body.workingAddressId+',"'+req.body.workEmail+'","'+req.body.workPhone+'","'+req.body.workMobile+'","'+req.body.workLocation+'",'+req.body.departmentId+','+req.body.jobtitleId+','+req.body.coachId+','+req.body.countryId+','+req.body.workingTimeId+',"'+req.body.identificationNo+'","'+req.body.passportNo+'",'+req.body.BankAccountNumbersId+',"'+req.body.gender+'","'+req.body.maritalStatus+'",'+req.body.noOfChildren+','+req.body.homeAddressId+',"'+req.body.dates_value6+'","'+req.body.placeOfBirth+'",'+req.body.timeSheetCost+','+req.body.accountId+',"'+req.body.dates_value7+'","'+req.body.companyVehicle+'",'+req.body.HomeDistance+','+req.body.relatedUserId+','+req.body.badgeId+','+req.body.pin+','+req.body.manualAttendance+')');


    //employee_manager_id
    connection.query('Update `employee` SET `employeename` = "'+req.body.employeeName+'",`work_address_id` ='+req.body.workingAddressId+' ,`work_email`="'+req.body.workEmail+'",`work_phone`= "'+req.body.workPhone+'",`work_mobile`="'+req.body.workMobile+'",`work_location`="'+req.body.workLocation+'",`department_id`='+req.body.departmentId+',`job_tittle`='+req.body.jobtitleId+',`employee_manager_id`='+req.body.managerId+',`coach_id`='+req.body.coachId+',`country_id`='+req.body.countryId+',`working_time_id`='+req.body.workingTimeId+',`identification_number`="'+req.body.identificationNo+'",`passport_number`="'+req.body.passportNo+'",`employee_bank_account_id`='+req.body.BankAccountNumbersId+',`gender`="'+req.body.gender+'",`maritial_status`="'+req.body.maritalStatus+'",`number_of_childern`='+req.body.noOfChildren+',`home_address_id`='+req.body.homeAddressId+',`date_of_birth`="'+req.body.dates_value6+'",`place_of_birth`="'+req.body.placeOfBirth+'",`time_sheet_cost`='+req.body.timeSheetCost+',`account_id`='+req.body.accountId+',`medical_exam`="'+req.body.dates_value7+'",`company_vehicle`="'+req.body.companyVehicle+'",`home_work_distance`='+req.body.HomeDistance+',`related_user_id`='+req.body.relatedUserId+',`badge_id`='+req.body.badgeId+',`pin`='+req.body.pin+',`manual_attandance`='+req.body.manualAttendance+' WHERE `employee`.`id` = "'+req.body.id+'" ', function (error, results, fields) {
        if (error) {
            console.log("i reached in just after querry!!! ",error.message);
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
    });

});
router.post('/addNewContract', function (req, res, next) {

    console.log("Inside service  addNewContract !!!!!!!");
    if(!req.body.job){
        req.body.job = null;
    }
    if(!req.body.abc){
        req.body.abc = null;
    }
    if(!req.body.contractType_id){
        req.body.contractType_id = null;
    }

    if(!req.body.work_schedule_id){
        req.body.work_schedule_id = null;
    }
    if(!req.body.notes){
        req.body.notes = null;
    }
    if(!req.body.visaNo){
        req.body.visaNo = null;
    }
    if(!req.body.workPermitNo){
        req.body.workPermitNo = null;
    }
    if(!req.body.wageAmount){
        req.body.wageAmount = null;
    }
    if(!req.body.advantage){
        req.body.advantage = null;
    }
    //........................
    // if(!req.req.body.dates_value1){
    //     req.body.dates_value1 = '';
    // }
    // if(!req.body.dates_value2){
    //     req.body.dates_value2 = '';
    // }
    // if(!req.body.dates_value4){
    //     req.body.dates_value4 = '';
    // }
    // if(!req.body.dates_value3){
    //     req.body.dates_value3 = '';
    // }
    // if(!req.body.dates_value5){
    //     req.body.dates_value5 = '';
    //}
    console.log("reference=  "+req.body.referenceName);
    console.log("employeeId=  "+req.body.employeeId);
    console.log("job=  "+req.body.job);
    console.log("abc=  "+req.body.abc);
    console.log("contractType_id=  "+req.body.contractType_id);
    console.log("wageAmount=  "+req.body.wageAmount);
    console.log("advantage=  "+req.body.advantage);
    console.log("dates_value1=  "+req.body.dates_value1);
    console.log("dates_value2=  "+req.body.dates_value2);
    console.log("dates_value4=  "+req.body.dates_value4);
    console.log("dates_value3=  "+req.body.dates_value3);
    console.log("notes=  "+req.body.notes);
    console.log("visaNo=  "+req.body.visaNo);
    console.log("workPermitNo=  "+req.body.workPermitNo);
    console.log("dates_value5=  "+req.body.dates_value5);
    console.log("work_schedule_id=  "+req.body.work_schedule_id);


    console.log('INSERT INTO `contract`(`reference`,`employee_id`,`job_tittle`,`department_id`,`contract_type`,`wage`,`advantages`,`trial_period_duration_from`,`trial_period_duration_to`,`duration_to`,`duration_from`,`working_schedule_id`,`notes`,`visa_no`,`work_permit_no`,`visa_expire_date`) ' +
        'VALUES ("'+req.body.referenceName+'",'+req.body.employeeId+',"'+req.body.job+'",'+req.body.abc+','+req.body.contractType_id+','+req.body.wageAmount+',"'+req.body.advantage+'","'+req.body.dates_value1+'","'+req.body.dates_value2+'","'+req.body.dates_value4+'","'+req.body.dates_value3+'",'+req.body.work_schedule_id+',"'+req.body.notes+'",'+req.body.visaNo+','+req.body.workPermitNo+',"'+req.body.dates_value5+'")');

    connection.query('INSERT INTO `contract`(`reference`,`employee_id`,`job_tittle`,`department_id`,`contract_type`,`wage`,`advantages`,`trial_period_duration_from`,`trial_period_duration_to`,`duration_to`,`duration_from`,`working_schedule_id`,`notes`,`visa_no`,`work_permit_no`,`visa_expire_date`) ' +
        'VALUES ("'+req.body.referenceName+'",'+req.body.employeeId+',"'+req.body.job+'",'+req.body.abc+','+req.body.contractType_id+','+req.body.wageAmount+',"'+req.body.advantage+'","'+req.body.dates_value1+'","'+req.body.dates_value2+'","'+req.body.dates_value4+'","'+req.body.dates_value3+'",'+req.body.work_schedule_id+',"'+req.body.notes+'",'+req.body.visaNo+','+req.body.workPermitNo+',"'+req.body.dates_value5+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
router.post('/fetchDepartments', function (req, res, next) {

    connection.query('SELECT * FROM  `department` limit 7', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchDepartments1', function (req, res, next) {

    connection.query('SELECT * FROM  `department` limit 7', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchJobTitles', function (req, res, next) {

    connection.query('SELECT * FROM  `job_positions` limit 7', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectcontractinfo', function (req, res, next) {

    connection.query('SELECT * FROM  `contract` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectemployeeinfo', function (req, res, next) {

    connection.query('SELECT * FROM  `employee` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
//fetches employteename based on employeename
router.post('/selectemployee', function (req, res, next) {
    console.log('SELECT * FROM  `employee` WHERE id = "'+req.body.id+'"');
    connection.query('SELECT * FROM  `employee` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectdep', function (req, res, next) {
    console.log('SELECT * FROM  `department` WHERE id = "'+req.body.id+'"');
    connection.query('SELECT * FROM  `department` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectcontractype', function (req, res, next) {
    console.log('SELECT * FROM  `employee_contract_type` WHERE id = "'+req.body.id+'"');
    connection.query('SELECT * FROM  `employee_contract_type` WHERE id = '+req.body.id+'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
        // console.log(results);
    });

});
router.post('/selectworkschedule', function (req, res, next) {
    connection.query('SELECT * FROM  `working_schedule` WHERE id = '+req.body.id+'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
        // console.log(results);
    });

});
//fetchDeptManager fetches manager name of a depatment based on click function
router.post('/fetchDeptManager', function (req, res, next) {

    console.log("Inside fetchDeptManager service departmentId   :  "+req.body.departmentId);
    console.log('SELECT employee.employeename FROM employee WHERE employee.department_id = '+req.body.departmentId);
    connection.query('SELECT employee.employeename FROM employee WHERE employee.department_id = '+req.body.departmentId, function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
        // console.log(results);
    });

});
//fetches all employees list from whom you can select a new manager for given department
router.post('/fetchManagers', function (req, res, next) {

    connection.query('SELECT * FROM  `employee` limit 7', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchManagers1', function (req, res, next) {

    connection.query('SELECT * FROM  `employee` limit 7', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchCoachs', function (req, res, next) {

    connection.query('SELECT * FROM  `employee` limit 7', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchWorkingTimeNames', function (req, res, next) {
    connection.query('SELECT * FROM  `working_schedule` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/fetchParentDepartmentNamesid', function (req, res, next) {

    console.log(req.body.id);
    connection.query('SELECT * FROM  `department` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchDepartmentManagerNames', function (req, res, next) {

    connection.query('SELECT * FROM  `employee` limit 7', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchParentDepartmentNames', function (req, res, next) {

    connection.query('SELECT * FROM  `department` limit 7', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchEmployeeName', function (req, res, next) {

    connection.query('SELECT * FROM `employee`', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
router.post('/fetchdeparments', function (req, res, next) {

    connection.query('SELECT * FROM  `department` ', function (error, results, fields) {
        if (!error) {
            console.log("The result should be rendered here...");
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchJobTitles', function (req, res, next) {

    connection.query('SELECT * FROM  `job_positions` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchContractType', function (req, res, next) {

    connection.query('SELECT * FROM  `employee_contract_type` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchWorkScheduleName', function (req, res, next) {
    connection.query('SELECT * FROM  `working_schedule` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/fetchWorkingAddresses', function (req, res, next) {
    connection.query('SELECT * FROM  `contact` limit 7 ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        //console.log(results);
    });
});
router.post('/fetchCountries', function (req, res, next) {
    connection.query('SELECT * FROM  `country` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/FetchBankAccountNumbers', function (req, res, next) {
    connection.query('SELECT * FROM  `employee_bank_account` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/fetchHomeAddresses', function (req, res, next) {
    connection.query('SELECT * FROM  `contact` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/fetchAccounts', function (req, res, next) {
    connection.query('SELECT * FROM  `account` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/fetchCompanies', function (req, res, next) {
    connection.query('SELECT * FROM  `users_company` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/fetchRelatedUsers', function (req, res, next) {
    connection.query('SELECT * FROM  `user` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/putNewContractToTable', function (req, res, next) {
    connection.query('SELECT contract.id, contract.reference, employee.employeename as Employee , employee_contract_type.name AS Contract_Type, contract.job_tittle, working_schedule.name AS Working_Schedule , contract.trial_period_duration_from AS Start_Date, contract.trial_period_duration_to As End_Date FROM contract LEFT JOIN employee_contract_type ON contract.contract_type = employee_contract_type.id LEFT JOIN working_schedule ON contract.working_schedule_id = working_schedule.id LEFT JOIN employee ON contract.employee_id = employee.id', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/putEmployeesToTableView', function (req, res, next) {
    connection.query('SELECT employee.id as ID, employee.employeename as name, employee.work_phone as phone, employee.work_email as email FROM `employee`', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//fetchJobTitleAndDept
router.post('/fetchJobTitleAndDept', function (req, res, next) {

    console.log("Inside Service fetchJobTitleAndDept: employeeId  =  "+req.body.employeeId);

    connection.query('SELECT job_positions.job_tittle, department.name FROM employee,job_positions,department where employee.id='+"'"+ req.body.employeeId +"'" +' AND employee.job_tittle = job_positions.id AND employee.department_id = department.id',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
        console.log(results);
    });

});

router.post('/fetchContactInformationOfEmployee', function (req, res, next) {

    console.log("Inside Service fetchContactInformationOfEmployee: workingAddressId  =  "+req.body.workingAddressId);

    connection.query('SELECT employee.work_mobile,employee.work_email,employee.work_phone FROM employee where employee.work_address_id='+"'"+ req.body.workingAddressId +"'" +' ',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});
        }
        console.log(results);
    });

});
//.......................................................................................
router.post('/selectworkaddress', function (req, res, next) {

    connection.query('SELECT * FROM  `contact` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectdepartment', function (req, res, next) {

    connection.query('SELECT * FROM  `department` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectjobtitles', function (req, res, next) {

    connection.query('SELECT * FROM  `job_positions` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectcoach', function (req, res, next) {

    connection.query('SELECT * FROM  `employee` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectmanager', function (req, res, next) {

    connection.query('SELECT * FROM  `employee` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectcountry', function (req, res, next) {

    connection.query('SELECT * FROM  `country` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectworkschedule', function (req, res, next) {

    connection.query('SELECT * FROM  `work_schedule` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectbankaccountNo', function (req, res, next) {

    connection.query('SELECT * FROM  `employee_bank_account` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selecthomeAddress', function (req, res, next) {

    connection.query('SELECT * FROM  `contact` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectaccount', function (req, res, next) {

    connection.query('SELECT * FROM  `account` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectrelateduser', function (req, res, next) {

    connection.query('SELECT * FROM  `user` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
//editing employees......................deleteSelectedEmployee

router.post('/deleteSelectedEmployee', function (req, res, next) {
    console.log('DELETE  FROM  `employee` WHERE id = "'+req.body.id+'"');

    connection.query('DELETE  FROM  `employee` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {

            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});

router.post('/deleteEmployees', function (req, res, next) {

    for (var i = 0; i < req.body.delete_items.length; ++i) {
        console.log(req.body.delete_items[i]);
        console.log('DELETE FROM `employee` WHERE id = "'+req.body.delete_items[i]+'"');
        connection.query('DELETE FROM `employee` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

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
function getDateTime2() {

    var dates = new Date();



    var year = dates.getFullYear();

    var month = dates.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = dates.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day;

}
function getDateTime3() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;



    return  hour + ":" + min + ":" + sec;

}