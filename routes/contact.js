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
//var multer  = require('multer');
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
///------------------------------------------------------------APIs START------------------------------------------------
//createcontactstuff
router.post('/contacttable', function (req, res, next) {

    connection.query("select * from contact ORDER BY id DESC limit  10", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/contacttablenext', function (req, res, next) {

    console.log('SELECT  job_positions.id,job_positions.job_tittle, job_positions.status, job_positions.expected, job_positions.forcasted, job_positions.hiredemployees, job_positions.currentemployees, department.name FROM job_positions INNER JOIN department ON job_positions.department_id = department.id limit 20 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT * from contact ORDER BY id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/contacttableback', function (req, res, next) {
    console.log('SELECT * from contact limit 20 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT * from contact  ORDER BY id DESC limit 10 OFFSET  '+""+ req.body.counter +"" +'', function (error, results, fields) {
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
//     connection.query("select * from contact  limit 2", function (error, results, fields) {
//         if (error) res.json({"status": "failed", "message": error.message});
//         else{
//             res.json({"status": "ok", "data": results});
//         }
//     });
// });
router.post('/selectgrid', function (req, res, next) {

    connection.query("SELECT contact.id,contact.name,contact.street1,contact.street2,contact.city,contact.country,contact.email, tags_contacts.tag_id FROM contact left JOIN tags_contacts ON contact.id = tags_contacts.contact_id ORDER BY id DESC limit 10", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/delete_contact', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `contact` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);

});
router.post('/selectgridnext', function (req, res, next) {

    console.log('SELECT contact.id,contact.name,contact.street1,contact.street2,contact.city,contact.country,contact.email, tags_contacts.tag_id FROM contact left JOIN tags_contacts ON contact.id = tags_contacts.contact_id 20 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT contact.id,contact.name,contact.street1,contact.street2,contact.city,contact.country,contact.email, tags_contacts.tag_id FROM contact left JOIN tags_contacts ON contact.id = tags_contacts.contact_id  ORDER BY id DESC limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/selectgridback', function (req, res, next) {
    console.log('SELECT * from contact limit 2 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT contact.id,contact.name,contact.street1,contact.street2,contact.city,contact.country,contact.email, tags_contacts.tag_id FROM contact left JOIN tags_contacts ON contact.id = tags_contacts.contact_id ORDER BY id DESC limit 10 OFFSET  '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectgridtag', function (req, res, next) {
    connection.query("select * from tags_contacts", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
//contactcreatestuff
router.post('/createcontact', function (req, res, next) {
    if(!(req.body.zip)){
        req.body.zip=0;
    }
    if(!(req.body.individual)){
        req.body.individual=0;
    }
    if(!(req.body.is_Customer)){
        req.body.is_Customer=0;
    }
    if(!(req.body.is_vendor)){
        req.body.is_vendor=0;
    }
    if(!(req.body.lasting)){
        req.body.lasting=0;
    }
    if(!(req.body.internal_reference_id)){
        req.body.internal_reference_id=0;
    }
    if(!(req.body.internal_reference_id)){
        req.body.internal_reference_id=0;
    }
    if(!(req.body.account_reciveable)){
        req.body.account_reciveable=null;
    }
    if(!(req.body.is_sales_person)){
        req.body.is_sales_person=null;
    }
    if(!(req.body.account_payable)){
        req.body.account_payable=null;
    }
    if(!(req.body.tags)){
        req.body.tags=0;
    }
    //modal

    connection.query('INSERT INTO `contact_notes`(`notes`) VALUES ("'+req.body.notes_id+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {
            connection.query('INSERT INTO `contact`(`name`,`street1`,`street2`,`individual`,`company`,`city`,`states`,`zip`,`country`,`title`,`website`,`job_position`,`phone_number`,`mobile_number`,`fax_number`,`email`,`language`,`notes_id`,`is_Customer`,`is_sales_person`,`internal_reference_id`,`account_reciveable`,`account_payable`,`is_vendor`,`barcode`,`customer_payment_terms`,`degree_of_trust`,`vendor_payment_terms`) VALUES ("'+req.body.name+'","'+req.body.street1+'","'+req.body.street2+'",'+req.body.individual+',"'+req.body.company+'","'+req.body.city+'","'+req.body.states+'",'+req.body.zip+',"'+req.body.country+'","'+req.body.title+'","'+req.body.website+'","'+req.body.job_position+'","'+req.body.phone_number+'","'+req.body.mobile_number+'","'+req.body.fax_number+'","'+req.body.email+'","'+req.body.language+'",'+results.insertId+','+req.body.is_Customer+',"'+req.body.is_sales_person+'",'+req.body.internal_reference_id+','+req.body.account_reciveable+','+req.body.account_payable+','+req.body.is_vendor+',"'+req.body.barcode+'","'+req.body.customer_payment_terms+'","'+req.body.degree_of_trust+'","'+req.body.vendor_payment_terms+'")', function (error, results2, fields) {
                if (error) {

                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    connection.query('UPDATE contact_contacts_addresses SET parent_contact_id = '+results2.insertId+' WHERE parent_contact_id = '+ req.body.lasting +'', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }
                    });
                    console.log('INSERT INTO `tags_contacts`(`tag_id`,`contact_id`) VALUES ('+req.body.tags+',' + results2.insertId + ')');
                    connection.query('INSERT INTO `tags_contacts`(`tag_id`,`contact_id`) VALUES ('+req.body.tags+',' + results2.insertId + ')', function (error, results1, fields) {
                        if (error) {
                            console.log(error.message);
                            res.json({"status": "failed", "message": error.message});
                        }
                    });
                }
            });
        }
    });
})

router.post('/createcontactmodal', function (req, res, next) {
    if(!(req.body.zip)){
        req.body.zip=0;
    }
    if(!(req.body.individual)){
        req.body.individual=0;
    }
    if(!(req.body.is_Customer)){
        req.body.is_Customer=0;
    }
    if(!(req.body.is_vendor)){
        req.body.is_vendor=0;
    }
    if(!(req.body.lasting)){
        req.body.lasting=0;
    }
    if(!(req.body.internal_reference_id)){
        req.body.internal_reference_id=null;
    }
    if(!(req.body.internal_reference_id)){
        req.body.internal_reference_id=0;
    }
    if(!(req.body.account_reciveable)){
        req.body.account_reciveable=null;
    }
    if(!(req.body.account_payable)){
        req.body.account_payable=null;
    }
    if(!(req.body.tags)){
        req.body.tags=null;
    }

    connection.query('INSERT INTO `contact_notes`(`notes`) VALUES ("' + req.body.mnotes_id + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {
            console.log('INSERT INTO `contact`(`name`,`street1`,`street2`,`city`,`states`,`zip`,`country`,`title`,`job_position`,`phone_number`,`mobile_number`,`email`,`notes_id`) VALUES ("'+req.body.name+'","'+req.body.street1+'","'+req.body.street2+'","'+req.body.city+'","'+req.body.states+'",'+req.body.zip+',"'+req.body.country+'","'+req.body.title+'","'+req.body.job_position+'","'+req.body.phone_number+'","'+req.body.mobile_number+'","'+req.body.email+'",'+results.insertId+')');
            connection.query('INSERT INTO `contact`(`name`,`street1`,`street2`,`city`,`states`,`zip`,`country`,`title`,`job_position`,`phone_number`,`mobile_number`,`email`,`notes_id`) VALUES ("'+req.body.name+'","'+req.body.street1+'","'+req.body.street2+'","'+req.body.city+'","'+req.body.states+'",'+req.body.zip+',"'+req.body.country+'","'+req.body.title+'","'+req.body.job_position+'","'+req.body.phone_number+'","'+req.body.mobile_number+'","'+req.body.email+'",'+results.insertId+')', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    console.log(req.body);
                    connection.query('INSERT INTO `contact_contacts_addresses`(`parent_contact_id`,`child_contact_id`) VALUES (' + req.body.lasting + ',' + results1.insertId + ')', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }
                    });
                }
            });
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
//==================================================ContactInfo=========================================================
router.post('/selectcontactinfo', function (req, res, next) {

    connection.query('SELECT * from contact  where  id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/ctags', function (req, res, next) {

    connection.query('SELECT name as tname from tags  where  id='+"'"+ req.body.tid +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/ctag', function (req, res, next) {

    connection.query('SELECT * from tags_contacts  where  contact_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
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
router.post('/selectchilds', function (req, res, next) {
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
    console.log('DELETE  from contact WHERE id = '+ req.body.id +'');
    connection.query('DELETE  from contact WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/contactdeletes1', function (req, res, next) {
    connection.query('DELETE  from contact_contacts_addresses where child_contact_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((EDITCONTACT))))))))))))))))))))))))))))))
router.post('/createcontactedit', function (req, res, next) {
    console.log(req.body);
    if(!(req.body.zip)){
        req.body.zip=0;
    }
    if(!(req.body.individual)){
        req.body.individual=0;
    }
    if(!(req.body.is_Customer)){
        req.body.is_Customer=0;
    }
    if(!(req.body.is_vendor)){
        req.body.is_vendor=0;
    }
    if(!(req.body.lasting)){
        req.body.lasting=0;
    }
    if(!(req.body.internal_reference_id)){
        req.body.internal_reference_id=0;
    }
    if(!(req.body.internal_reference_id)){
        req.body.internal_reference_id=0;
    }
    if(!(req.body.account_reciveable)){
        req.body.account_reciveable=null;
    }
    if(!(req.body.account_payable)){
        req.body.account_payable=null;
    }
    connection.query('UPDATE contact SET name = "'+req.body.name+'",street1 = "'+req.body.street1+'",city = "'+req.body.city+'",states = "'+req.body.states+'",zip = '+req.body.zip+',country = "'+req.body.country+'",website = "'+req.body.website+'",street2 = "'+req.body.street2+'",company = "'+req.body.company+'", job_position = "'+req.body.job_position+'",phone_number = "'+req.body.phone_number+'",mobile_number = "'+req.body.mobile_number+'",fax_number = "'+req.body.fax_number+'",email = "'+req.body.email+'",title = "'+req.body.title+'",language = "'+req.body.language+'",is_Customer = '+req.body.is_Customer+',is_sales_person = "'+req.body.is_sales_person+'",internal_reference_id = '+req.body.internal_reference_id+',is_vendor = '+req.body.is_vendor+',barcode = "'+req.body.barcode+'",account_reciveable = '+req.body.account_reciveable+',account_payable = '+req.body.account_payable+',vendor_payment_terms = "'+req.body.vendor_payment_terms+'",degree_of_trust = "'+req.body.degree_of_trust+'",customer_payment_terms = "'+req.body.customer_payment_terms+'" WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
    });
    // connection.query('UPDATE contact_contacts_addresses SET parent_contact_id = '+req.body.id+' WHERE parent_contact_id = '+ req.body.lasting +'', function (error, results1, fields) {
    //     if (error) {
    //         res.json({"status": "failed", "message": error.message});
    //     }
    // });
    connection.query('UPDATE contact_notes SET notes = "'+req.body.notes+'" WHERE id = '+ req.body.notes_id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
    }
    });
    console.log('UPDATE tags_contacts SET tag_id = '+req.body.tags+' WHERE id = '+ req.body.id +'');
    connection.query('UPDATE tags_contacts SET tag_id = '+req.body.tags+' WHERE contact_id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
router.post('/createcontacteditmodal', function (req, res, next) {
    console.log(req.body);
    if(!(req.body.zip)){
        req.body.zip=0;
    }
    console.log('UPDATE contact SET name = "'+req.body.name+'",street1 = "'+req.body.street1+'",city = "'+req.body.city+'",states = "'+req.body.states+'",zip = '+req.body.zip+',country = "'+req.body.country+'",website = "'+req.body.website+'",street2 = "'+req.body.street2+'", job_position = "'+req.body.job_position+'",phone_number = "'+req.body.phone_number+'",mobile_number = "'+req.body.mobile_number+'",fax_number = "'+req.body.fax_number+'",email = "'+req.body.email+'",title = "'+req.body.title+'" WHERE id = '+ req.body.id +'');
    connection.query('UPDATE contact SET name = "'+req.body.name+'",street1 = "'+req.body.street1+'",city = "'+req.body.city+'",states = "'+req.body.states+'",zip = '+req.body.zip+',country = "'+req.body.country+'",website = "'+req.body.website+'",street2 = "'+req.body.street2+'", job_position = "'+req.body.job_position+'",phone_number = "'+req.body.phone_number+'",mobile_number = "'+req.body.mobile_number+'",fax_number = "'+req.body.fax_number+'",email = "'+req.body.email+'",title = "'+req.body.title+'" WHERE id = '+ req.body.id +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
    connection.query('UPDATE contact_notes SET notes = "'+req.body.notes+'" WHERE id = '+ req.body.notes_id +'', function (error, results, fields) {
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
///------------------------------------APIs END------------------------------------------------


module.exports = router;