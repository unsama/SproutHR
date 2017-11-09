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

router.post('/leave', function (req, res, next) {
    console.log('SELECT * from leave_type where id='+"'"+ req.body.id +"'" +'');
    connection.query('SELECT * from leave_type where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/leaving', function (req, res, next) {
    connection.query('SELECT * from leave_request where id='+"'"+ 0 +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/deleteleaves', function (req, res, next) {
    connection.query('DELETE  from leave_type where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/selectallfromleave_request', function (req, res, next) {

    connection.query("select * from leave_request", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectallfromleave_requestjoin', function (req, res, next) {

    connection.query("SELECT employee.employeename FROM leave_request INNER JOIN employee ON leave_request.employee_id = employee.id", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/confitableall', function (req, res, next) {
    connection.query("select * from leave_type ", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/confitableinfo', function (req, res, next) {
    connection.query("select * from meeting_type ", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/meeting_typeedit', function (req, res, next) {

    connection.query('UPDATE meeting_type SET meeting_type_name = "'+req.body.meetingtype+'" WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

    //req.session.success = true;


});

router.post('/confitable2', function (req, res, next) {
    connection.query("select * from meeting_type", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/confitable_get_id', function (req, res, next) {
    connection.query('select * from leave_type where id = "'+req.body.id+'"', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/numleavestype', function (req, res, next) {
    connection.query("select COUNT(*) as count from leave_type", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leaves', function (req, res, next) {
    connection.query('SELECT * FROM leave_type WHERE id = ( SELECT max( id ) FROM leave_type WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leave_type_perivious', function (req, res, next) {
    connection.query('SELECT * FROM leave_type WHERE id = ( SELECT MIN( id ) FROM leave_type WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leaveinsert', function (req, res, next) {
    if(!(req.body.apply_double_validation)){
        req.body.apply_double_validation=0;
    }
    if(!(req.body.allow_override_limit)){
        req.body.allow_override_limit=0;
    }
    if(!(req.body.meeting_type)){
        req.body.meeting_type=null;
    }
    if(!(req.body.active)){
        req.body.active=0;
    }
    console.log('INSERT INTO `leave_type`(`type`,`apply_double_validation`,`allow_override_limit`,`meeting_type`,`active`,`color_in_report`) VALUES ("'+req.body.type+'",'+req.body.apply_double_validation+','+req.body.allow_override_limit+','+req.body.meeting_type+','+req.body.active+',"'+req.body.color_in_report+'")');
    connection.query('INSERT INTO `leave_type`(`type`,`apply_double_validation`,`allow_override_limit`,`meeting_type`,`active`,`color_in_report`) VALUES ("'+req.body.type+'",'+req.body.apply_double_validation+','+req.body.allow_override_limit+','+req.body.meeting_type+','+req.body.active+',"'+req.body.color_in_report+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(error);
    });
});
router.post('/meeting_type', function (req, res, next) {
    console.log('INSERT INTO `meeting_type`(`meeting_type_name`) VALUES ("'+req.body.meetingtype+'")');
    connection.query('INSERT INTO `meeting_type`(`meeting_type_name`) VALUES ("'+req.body.meetingtype+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/leaveedit', function (req, res, next) {
    if(!(req.body.apply_double_validation)){
        req.body.apply_double_validation=0;
    }
    if(!(req.body.allow_override_limit)){
        req.body.allow_override_limit=0;
    }
    if(!(req.body.meeting_type)){
        req.body.meeting_type=null;
    }
    if(!(req.body.active)){
        req.body.active=0;
    }
    console.log(req.body.ids);
    console.log('UPDATE leave_type SET type = "'+req.body.type+'", apply_double_validation = "'+req.body.apply_double_validation+'", allow_override_limit = "'+req.body.allow_override_limit+'", meeting_type = "'+req.body.meeting_type+'",active = "'+req.body.active+'", color_in_report = "'+req.body.color_in_report+'" WHERE id = '+ req.body.ids +'');
    connection.query('UPDATE leave_type SET type = "'+req.body.type+'", apply_double_validation = '+req.body.apply_double_validation+', allow_override_limit = '+req.body.allow_override_limit+', meeting_type = '+req.body.meeting_type+',active = '+req.body.active+', color_in_report = "'+req.body.color_in_report+'" WHERE id = "'+ req.body.ids +'"', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/allocationrequesttable', function (req, res, next) {
    connection.query("SELECT  A.id AS id,A.duration AS duration,A.mode AS MODE , A.mode AS MODE , A.status AS status ,A.date_from AS date_from, A.date_to AS date_to, A.description AS description, B.name AS name, em.employeename, l.type FROM leave_request A, department B, employee em, leave_type l WHERE A.employee_id = em.id AND A.department_id = B.id AND A.leave_type_id = l.id ORDER BY A.id DESC limit 10", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/delete_allocation', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `leave_request` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);
});
router.post('/delete_leaves', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `leave_type` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);
});

router.post('/allocationrequesttablenext', function (req, res, next) {

    connection.query('SELECT  A.id AS id,A.duration AS duration, A.mode AS MODE , A.status AS status ,A.date_from AS date_from, A.date_to AS date_to, A.description AS description, B.name AS name, em.employeename, l.type FROM leave_request A, department B, employee em, leave_type l WHERE A.employee_id = em.id AND A.department_id = B.id AND A.leave_type_id = l.id ORDER BY A.id DESC limit 10  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/allocationrequesttableback', function (req, res, next) {

    connection.query('SELECT A.id AS id,A.duration AS duration, A.mode AS MODE , A.status AS status ,A.date_from AS date_from, A.date_to AS date_to, A.description AS description, B.name AS name, em.employeename, l.type FROM leave_request A, department B, employee em, leave_type l WHERE A.employee_id = em.id AND A.department_id = B.id AND A.leave_type_id = l.id ORDER BY A.id DESC limit 10  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/confitable', function (req, res, next) {
    connection.query("select * from leave_type ORDER BY id DESC limit  10", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/confitablenext', function (req, res, next) {

    connection.query('select * from leave_type ORDER BY id DESC limit  10  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/confitableback', function (req, res, next) {

    connection.query('select * from leave_type ORDER BY id DESC limit 10  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectemployee', function (req, res, next) {
    connection.query("select * from employee", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectdepname', function (req, res, next) {
    connection.query('SELECT department_id from employee where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectdepleave', function (req, res, next) {
    connection.query('SELECT name from department where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leaveallocationinsert', function (req, res, next) {
    if(!(req.body.employee_id)){
        req.body.employee_id=null;
    }
    if(!(req.body.department_id)){
        req.body.department_id=null;
    }
    if(!(req.body.leave_type_id)){
        req.body.leave_type_id=null;
    }
    if(!(req.body.duration)){
        req.body.duration=null;
    }
    if(!(req.body.employee_tag_id)){
        req.body.employee_tag_id=null;
    }
    if(!(req.body.reported_last_payslips)){
        req.body.reported_last_payslips=null;
    }
    console.log('INSERT INTO `leave_request`(`date_from`,`date_to`,`employee_tag_id`,`reported_last_payslips`,`status`,`comment_manager`,`description`,`leave_type_id`,`mode`,`duration`,`employee_id`,`department_id`)VALUES("'+req.body.date_from+'","'+req.body.date_to+'","'+req.body.employee_tag_id+'","'+req.body.reported_last_payslips+'","'+req.body.test+'","'+req.body.comment_manager+'","'+req.body.description+'",'+req.body.leave_type_id+',"'+req.body.mode+'",'+req.body.duration+','+req.body.employee_id+','+req.body.department_id+')');
    connection.query('INSERT INTO `leave_request`(`date_from`,`date_to`,`employee_tag_id`,`reported_last_payslips`,`status`,`comment_manager`,`description`,`leave_type_id`,`mode`,`duration`,`employee_id`,`department_id`)VALUES("'+req.body.date_from+'","'+req.body.date_to+'",'+req.body.employee_tag_id+',"'+req.body.reported_last_payslips+'","'+req.body.test+'","'+req.body.comment_manager+'","'+req.body.description+'",'+req.body.leave_type_id+',"'+req.body.mode+'",'+req.body.duration+','+req.body.employee_id+','+req.body.department_id+')', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
    // console.log('INSERT INTO `leave_request`(`reported_last_payslips`,`status`,`comment_manager`,`description`,`leave_type_id`,`mode`,`duration`,`employee_id`,`department_id`)VALUES("'+req.body.reported_last_payslips+'","'+req.body.test+'","'+req.body.comment_manager+'","'+req.body.description+'",'+req.body.leave_type_id+',"'+req.body.mode+'",'+req.body.duration+','+req.body.employee_id+','+req.body.department_id+')');
    // connection.query('INSERT INTO `leave_request`(`reported_last_payslips`,`status`,`comment_manager`,`description`,`leave_type_id`,`mode`,`duration`,`employee_id`,`department_id`)VALUES("'+req.body.reported_last_payslips+'","'+req.body.test+'","'+req.body.comment_manager+'","'+req.body.description+'",'+req.body.leave_type_id+',"'+req.body.mode+'",'+req.body.duration+','+req.body.employee_id+','+req.body.department_id+')', function (error, results, fields) {
    //     if (error) {
    //         console.log(error.message);
    //         res.json({"status": "failed", "message": error.message});
    //     }
    // });
});
router.post('/leaveallocationinsert2', function (req, res, next) {
    console.log(req.body);
    connection.query('INSERT INTO `leave_request`(`id`,`reported_last_payslips`,`status`,`comment_manager`,`description`,`leave_type_id`,`mode`,`duration`,`employee_id`,`department_id`)VALUES("0","'+req.body.reported_last_payslips+'","'+req.body.test+'","'+req.body.comment_manager+'","'+req.body.description+'","'+req.body.leave_type_id+'","'+req.body.mode+'","'+req.body.duration+'","'+req.body.employee_id+'","'+req.body.department_id+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// router.post('/leavess', function (req, res, next) {
//     connection.query('SELECT * from leave_request', function (error, results, fields) {
//         if (error) res.json({"status": "failed", "message": error.message});
//         else{
//             res.json({"status": "ok", "data": results});
//         }
//     });
// });
router.post('/leaverequestselect', function (req, res, next) {
    connection.query('SELECT * from leave_request where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectleavedep', function (req, res, next) {
    connection.query('SELECT * from department where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectconfigmtype', function (req, res, next) {
    connection.query('SELECT * from meeting_type where id='+"'"+ req.body.meeting_type1 +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectmeetingtypemodal', function (req, res, next) {
    connection.query('SELECT * from meeting_type where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectleavetmp', function (req, res, next) {
    connection.query('SELECT * from leave_type where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/selectleaveemp', function (req, res, next) {
    connection.query('SELECT * from employee where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leave_allocaion_num', function (req, res, next) {
    connection.query("select COUNT(*) as count from leave_request", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leave_allocaion_nums', function (req, res, next) {
    connection.query("select sum(duration) as count from leave_request", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/sum', function (req, res, next) {
    connection.query("SELECT SUM(duration) AS sum FROM leave_request", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leave_allocation_perivious', function (req, res, next) {
    connection.query('SELECT * FROM leave_request WHERE id = ( SELECT MIN( id ) FROM leave_request WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leave_allocation_next', function (req, res, next) {

    connection.query('SELECT * FROM leave_request WHERE id = ( SELECT max( id ) FROM leave_request WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/delete_leave_allocation', function (req, res, next) {
    connection.query('DELETE  from leave_request where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});

router.post('/leave_allcation_edit', function (req, res, next) {
    console.log(req.body);
    if(!(req.body.employee_id)){
        req.body.employee_id=null;
    }
    if(!(req.body.department_id)){
        req.body.department_id=null;
    }
    if(!(req.body.leave_type_id)){
        req.body.leave_type_id=null;
    }
    if(!(req.body.duration)){
        req.body.duration=null;
    }
    if(!(req.body.test1)){
        req.body.test1=null;
    }

    if(!(req.body.employee_tag_id)){
        req.body.employee_tag_id=null;
    }
    connection.query('UPDATE leave_request SET date_from = "'+req.body.date_from+'",date_to = "'+req.body.date_to+'", employee_tag_id = '+req.body.employee_tag_id+',reported_last_payslips = "'+req.body.test1+'",status = "'+req.body.test+'", description = "'+req.body.description+'",leave_type_id = '+req.body.leave_type_id+',mode = "'+req.body.mode+'",duration = '+req.body.duration+',employee_id = '+req.body.employee_id+',department_id = '+req.body.department_id+',comment_manager = "'+req.body.comment_manager+'" WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/leaveselect', function (req, res, next) {
    connection.query('SELECT * from leave_request where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/leave_allocaion_footer', function (req, res, next) {
    connection.query("SELECT SUM( duration ) as d FROM leave_request", function (error, results, fields) {
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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





