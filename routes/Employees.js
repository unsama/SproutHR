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
router.post('/EditDepartment', function (req, res, next) {
    console.log('UPDATE `department` SET `name`="'+req.body.departName+'",`parent_dept_id`="'+req.body.parentDeptId+'",`manager_id`="'+req.body.managerId+'" WHERE `department`.`id` = "'+req.body.id+'"');
    connection.query('UPDATE `department` SET `name`="'+req.body.departName+'",`parent_dept_id`="'+req.body.parentDeptId+'",`manager_id`="'+req.body.managerId+'" WHERE `department`.`id` = "'+req.body.id+'"', function (error, results, fields) {
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
    if(!req.body.birthDate ) {
        req.body.birthDate = "";
    }
    if(!req.body.medicalExamDate ) {
        req.body.medicalExamDate = "";
    }

   if(!req.body.workMobile ) {
        req.body.workMobile = null;
    }
    if(!req.body.workLocation ) {
        req.body.workLocation = null;
    }
    if(!req.body.workEmail ) {
        req.body.workEmail = null;
    }
    if(!req.body.workPhone ) {
        req.body.workPhone = null;
    }
    if(!req.body.identificationNo ) {
        req.body.identificationNo = null;
    }
    if(!req.body.passportNo ) {
        req.body.passportNo = null;
    }
    if(!req.body.gender ) {
        req.body.gender = null;
    }
    if(!req.body.pin ) {
        req.body.pin = null;
    }
    if(!req.body.manualAttendance ) {
        req.body.pin = 0;
    }
    if(!req.body.companyVehicle ) {
        req.body.companyVehicle = null;
    }
    if(!req.body.HomeDistance ) {
        req.body.HomeDistance = null;
    }
    if(!req.body.maritalStatus ) {
        req.body.maritalStatus = null;
    }
    if(!req.body.noOfChildren ) {
        req.body.noOfChildren = null;
    }
    if(!req.body.placeOfBirth ) {
        req.body.placeOfBirth = null;
    }
    if(!req.body.timeSheetCost ) {
        req.body.timeSheetCost = null;
    }
    if(!req.body.status ) {
        req.body.pin = 0;
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
    console.log("medicalExamDate=  "+req.body.medicalExamDate);
    console.log("companyVehicle=  "+req.body.companyVehicle);
    console.log("HomeDistance=  "+req.body.HomeDistance);
    console.log("maritalStatus=  "+req.body.maritalStatus);
    console.log("noOfChildren=  "+req.body.noOfChildren);
    console.log("birthDate=  "+req.body.birthDate);
    console.log("placeOfBirth=  "+req.body.placeOfBirth);
    console.log("timeSheetCost=  "+req.body.timeSheetCost);
    console.log("status=  "+req.body.status);




    console.log('INSERT INTO `employee`(`employeename`,`work_address_id`,`work_email`,`work_phone`,`work_mobile`,`work_location`,`department_id`,`job_tittle`,`employee_manager_id`,`coach_id`,`country_id`,`working_time_id`,`identification_number`,`passport_number`,`employee_bank_account_id`,`gender`,`maritial_status`,`number_of_childern`,`home_address_id`,`date_of_birth`,`place_of_birth`,`time_sheet_cost`,`account_id`,`medical_exam`,`company_vehicle`,`home_work_distance`,`related_user_id`,`badge_id`,`pin`,`manual_attandance`,`statuss`) ' +
        'VALUES ("'+req.body.employeeName+'",'+req.body.workingAddressId+',"'+req.body.workEmail+'","'+req.body.workPhone+'","'+req.body.workMobile+'","'+req.body.workLocation+'",'+req.body.departmentId+','+req.body.jobtitleId+','+req.body.managerId+','+req.body.coachId+','+req.body.countryId+','+req.body.workingTimeId+',"'+req.body.identificationNo+'","'+req.body.passportNo+'",'+req.body.BankAccountNumbersId+',"'+req.body.gender+'","'+req.body.maritalStatus+'",'+req.body.noOfChildren+','+req.body.homeAddressId+',"'+req.body.birthDate+'","'+req.body.placeOfBirth+'",'+req.body.timeSheetCost+','+req.body.accountId+',"'+req.body.medicalExamDate+'","'+req.body.companyVehicle+'",'+req.body.HomeDistance+','+req.body.relatedUserId+','+req.body.badgeId+','+req.body.pin+','+req.body.manualAttendance+','+req.body.status+')');


    //employee_manager_id
    connection.query('INSERT INTO `employee`(`employeename`,`work_address_id`,`work_email`,`work_phone`,`work_mobile`,`work_location`,`department_id`,`job_tittle`,`employee_manager_id`,`coach_id`,`country_id`,`working_time_id`,`identification_number`,`passport_number`,`employee_bank_account_id`,`gender`,`maritial_status`,`number_of_childern`,`home_address_id`,`date_of_birth`,`place_of_birth`,`time_sheet_cost`,`account_id`,`medical_exam`,`company_vehicle`,`home_work_distance`,`related_user_id`,`badge_id`,`pin`,`manual_attandance`,`statuss`) ' +
        'VALUES ("'+req.body.employeeName+'",'+req.body.workingAddressId+',"'+req.body.workEmail+'","'+req.body.workPhone+'","'+req.body.workMobile+'","'+req.body.workLocation+'",'+req.body.departmentId+','+req.body.jobtitleId+','+req.body.managerId+','+req.body.coachId+','+req.body.countryId+','+req.body.workingTimeId+',"'+req.body.identificationNo+'","'+req.body.passportNo+'",'+req.body.BankAccountNumbersId+',"'+req.body.gender+'","'+req.body.maritalStatus+'",'+req.body.noOfChildren+','+req.body.homeAddressId+',"'+req.body.birthDate+'","'+req.body.placeOfBirth+'",'+req.body.timeSheetCost+','+req.body.accountId+',"'+req.body.medicalExamDate+'","'+req.body.companyVehicle+'",'+req.body.HomeDistance+','+req.body.relatedUserId+','+req.body.badgeId+','+req.body.pin+','+req.body.manualAttendance+','+req.body.status+')', function (error, results, fields) {
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
    if(!req.body.jobTitle){
        req.body.jobTitle = null;
    }
    if(!req.body.employeeId){
        req.body.employeeId = null;
    }
    if(!req.body.departmentId){
        req.body.departmentId = null;
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
    if(!req.body.status_name){
        req.body.status_name = null;
    }
    //........................
    // if(!req.req.body.trialFrom){
    //     req.body.trialFrom = null;
    // }
    // if(!req.body.trialTo){
    //     req.body.trialTo = null;
    // }
    // if(!req.body.durationTo){
    //     req.body.durationTo = null;
    // }
    // if(!req.body.durationFrom){
    //     req.body.durationFrom = null;
    // }
    // if(!req.body.dates_value5){
    //     req.body.dates_value5 = null;
    //}
    console.log("reference=  "+req.body.referenceName);
    console.log("employeeId=  "+req.body.employeeId);
    console.log("jobTitle=  "+req.body.jobTitle);
    console.log("departmentId=  "+req.body.departmentId);
    console.log("contractType_id=  "+req.body.contractType_id);
    console.log("wageAmount=  "+req.body.wageAmount);
    console.log("advantage=  "+req.body.advantage);
    console.log("trialFrom=  "+req.body.trialFrom);
    console.log("trialTo=  "+req.body.trialTo);
    console.log("durationTo=  "+req.body.durationFrom);
    console.log("durationFrom=  "+req.body.durationTo);
    console.log("notes=  "+req.body.notes);
    console.log("visaNo=  "+req.body.visaNo);
    console.log("workPermitNo=  "+req.body.workPermitNo);
    console.log("visaEpireDate=  "+req.body.visaEpireDate);
    console.log("work_schedule_id=  "+req.body.work_schedule_id);
    console.log("status_name=  "+req.body.status_name);


    console.log('INSERT INTO `contract`(`reference`,`employee_id`,`job_tittle`,`department_id`,`contract_type`,`wage`,`advantages`,`trial_period_duration_from`,`trial_period_duration_to`,`duration_to`,`duration_from`,`working_schedule_id`,`notes`,`visa_no`,`work_permit_no`,`visa_expire_date`,`contract_status`) ' +
        'VALUES ("'+req.body.referenceName+'",'+req.body.employeeId+','+req.body.jobTitle+','+req.body.departmentId+','+req.body.contractType_id+','+req.body.wageAmount+',"'+req.body.advantage+'","'+req.body.trialFrom+'","'+req.body.trialTo+'","'+req.body.durationTo+'","'+req.body.durationFrom+'",'+req.body.work_schedule_id+',"'+req.body.notes+'",'+req.body.visaNo+','+req.body.workPermitNo+',"'+req.body.visaEpireDate+'","'+req.body.status_name+'")');

    connection.query('INSERT INTO `contract`(`reference`,`employee_id`,`job_tittle`,`department_id`,`contract_type`,`wage`,`advantages`,`trial_period_duration_from`,`trial_period_duration_to`,`duration_to`,`duration_from`,`working_schedule_id`,`notes`,`visa_no`,`work_permit_no`,`visa_expire_date`,`contract_status`) ' +
        'VALUES ("'+req.body.referenceName+'",'+req.body.employeeId+','+req.body.jobTitle+','+req.body.departmentId+','+req.body.contractType_id+','+req.body.wageAmount+',"'+req.body.advantage+'","'+req.body.trialFrom+'","'+req.body.trialTo+'","'+req.body.durationTo+'","'+req.body.durationFrom+'",'+req.body.work_schedule_id+',"'+req.body.notes+'",'+req.body.visaNo+','+req.body.workPermitNo+',"'+req.body.visaEpireDate+'","'+req.body.status_name+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });

});

router.post('/EditContract', function (req, res, next) {

    console.log("Inside service  EditContract !!!!!!!");
    if(!req.body.jobTitleId){
        req.body.jobTitleId = null;
    }
    if(!req.body.employeeId){
        req.body.employeeId = null;
    }
    if(!req.body.departmentId){
        req.body.departmentId = null;
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
    if(!req.body.contract_status){
        req.body.contract_status = null;
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
    console.log("jobTitleId=  "+req.body.jobTitleId);
    console.log("departmentId=  "+req.body.departmentId);
    console.log("contractType_id=  "+req.body.contractType_id);
    console.log("wageAmount=  "+req.body.wageAmount);
    console.log("advantage=  "+req.body.advantage);
    console.log("trialFrom=  "+req.body.trialFrom);
    console.log("trialTo=  "+req.body.trialTo);
    console.log("trialTo=  "+req.body.trialTo);
    console.log("durationFrom=  "+req.body.durationFrom);
    console.log("notes=  "+req.body.notes);
    console.log("visaNo=  "+req.body.visaNo);
    console.log("workPermitNo=  "+req.body.workPermitNo);
    console.log("visaEpireDate=  "+req.body.visaEpireDate);
    console.log("work_schedule_id=  "+req.body.work_schedule_id);
    console.log("contract_status=  "+req.body.contract_status);


    console.log('UPDATE `contract` SET `reference` ="'+req.body.referenceName+'" ,`employee_id`='+req.body.employeeId+',`job_tittle`='+req.body.jobTitleId+',`department_id`='+req.body.departmentId+',`contract_type`='+req.body.contractType_id+',`wage`='+req.body.wageAmount+',`advantages`="'+req.body.advantage+'",`trial_period_duration_from`="'+req.body.trialFrom+'",`trial_period_duration_to`="'+req.body.trialTo+'",`duration_to`="'+req.body.durationTo+'",`duration_from`="'+req.body.durationFrom+'",`working_schedule_id`='+req.body.work_schedule_id+',`notes`="'+req.body.notes+'",`visa_no`='+req.body.visaNo+',`work_permit_no`='+req.body.workPermitNo+',`visa_expire_date`="'+req.body.visaEpireDate+'",`contract_status`="'+req.body.contract_status+'" WHERE `contract`.`id` = '+req.body.id+'  ');

    connection.query('UPDATE `contract` SET `reference` ="'+req.body.referenceName+'" ,`employee_id`='+req.body.employeeId+',`job_tittle`='+req.body.jobTitleId+',`department_id`='+req.body.departmentId+',`contract_type`='+req.body.contractType_id+',`wage`='+req.body.wageAmount+',`advantages`="'+req.body.advantage+'",`trial_period_duration_from`="'+req.body.trialFrom+'",`trial_period_duration_to`="'+req.body.trialTo+'",`duration_to`="'+req.body.durationTo+'",`duration_from`="'+req.body.durationFrom+'",`working_schedule_id`='+req.body.work_schedule_id+',`notes`="'+req.body.notes+'",`visa_no`='+req.body.visaNo+',`work_permit_no`='+req.body.workPermitNo+',`visa_expire_date`="'+req.body.visaEpireDate+'",`contract_status`="'+req.body.contract_status+'" WHERE `contract`.`id` = '+req.body.id+'  ' , function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
    });

});
router.post('/editContractStatus', function (req, res, next) {
    console.log('UPDATE `contract` SET `contract_status`="'+req.body.contract_status+'" WHERE `contract`.`id` = '+req.body.id+'  ');
    connection.query('UPDATE `contract` SET `contract_status`="'+req.body.contract_status+'" WHERE `contract`.`id` = '+req.body.id+'  ' , function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
    });

});



router.post('/fetchDepartments', function (req, res, next) {

    connection.query('SELECT * FROM  `department`', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchJobtitles', function (req, res, next) {

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

router.post('/fetchContactStatus', function (req, res, next) {

    connection.query('SELECT * FROM  `contract_status` ', function (error, results, fields) {
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

    connection.query('SELECT contract.reference, contract.contract_status,contract.wage,contract.advantages,contract.trial_period_duration_from,contract.trial_period_duration_to,contract.duration_from,contract.duration_to,contract.notes,contract.visa_no,contract.work_permit_no,contract.visa_expire_date,employee.employeename,job_positions.job_tittle,department.name AS dept_name,employee_contract_type.name contract_name,working_schedule.name AS sche_name FROM contract LEFT JOIN employee ON contract.employee_id = employee.id LEFT JOIN\tjob_positions ON contract.job_tittle = job_positions.id LEFT JOIN department ON contract.department_id = department.id LEFT JOIN employee_contract_type ON contract.contract_type = employee_contract_type.id LEFT JOIN working_schedule ON contract.working_schedule_id = working_schedule.id WHERE contract.id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        //
    });

});
router.post('/selectdepartment', function (req, res, next) {
    console.log("Insidw selectdepartment:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

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
router.post('/herachy1', function (req, res, next) {

    connection.query('SELECT A.employee_manager_id AS employee_manager_id,A.id AS id,A.employeename AS employeename, A.work_email AS work_email, B.name AS DepartmentName2, A.work_phone, em.job_tittle FROM employee A, department B, job_positions em WHERE A.department_id = B.id AND A.job_tittle = em.id AND A.employee_manager_id = '+ req.body.id +'  ', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
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
router.post('/selectemployeeinfoForBadge', function (req, res, next) {

    connection.query('SELECT  employee.employeename, job_positions.job_tittle FROM employee LEFT JOIN job_positions ON employee.job_tittle = job_positions.id WHERE employee.id = "'+req.body.id+'"', function (error, results, fields) {
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

    connection.query('SELECT e1.department_id , e1.id AS ID, e1.employeename, e1.work_email,e1.work_phone,e1.work_mobile,e1.work_location,e1.identification_number,e1.passport_number,e1.gender,e1.maritial_status,e1.number_of_childern,e1.date_of_birth,e1.place_of_birth,e1.time_sheet_cost,e1.medical_exam,e1.company_vehicle,e1.home_work_distance,e1.badge_id,e1.pin,e1.manual_attandance,e1.statuss,e2.employeename AS empManager ,e3.employeename AS empCoach,c1.address AS workAddress, department.name AS deptName,job_positions.job_tittle,country.country_name,working_schedule.name as workingTime, employee_bank_account.account_number As bankAccNo,c2.address AS homeAddress,account.name AccName,user.username FROM employee e1 LEFT JOIN employee e2 ON e1.employee_manager_id = e2.id LEFT JOIN employee e3 ON e1.coach_id = e3.id LEFT JOIN contact c1 ON e1.work_address_id = c1.id LEFT JOIN contact c2 ON e1.home_address_id = c2.id LEFT JOIN department ON e1.department_id = department.id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN country ON e1.country_id = country.id LEFT JOIN working_schedule ON e1.working_time_id = working_schedule.id LEFT JOIN employee_bank_account ON e1.employee_bank_account_id = employee_bank_account.id LEFT JOIN account ON e1.account_id = account.id LEFT JOIN user ON e1.related_user_id = user.id WHERE e1.id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectemployeeinfoNotforForm', function (req, res, next) {

    connection.query('SELECT * FROM employee WHERE employee.id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/selectemployeeinfoForFormNext', function (req, res, next) {
    console.log('SELECT * FROM employee WHERE id = ( SELECT MIN( id ) FROM employee WHERE id >'+"'"+ req.body.id +"'" +')');
    connection.query('SELECT * FROM employee WHERE id = ( SELECT MIN( id ) FROM employee WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/selectcontractinfoForFormNext', function (req, res, next) {
    console.log('SELECT * FROM contract WHERE id = ( SELECT MIN( id ) FROM contract WHERE id >'+"'"+ req.body.id +"'" +')');
    connection.query('SELECT * FROM contract WHERE id = ( SELECT MIN( id ) FROM contract WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
            console.log(results);
        }
    });

});


router.post('/selectemployeeinfoForFormBack', function (req, res, next) {
    console.log('SELECT * FROM employee WHERE id = ( SELECT MAX( id ) FROM employee WHERE id <'+"'"+ req.body.id +"'" +')');
    connection.query('SELECT * FROM employee WHERE id = ( SELECT MAX( id ) FROM employee WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectEmployeeInfoForDeptEmpFormBack', function (req, res, next) {

    connection.query('SELECT * FROM employee WHERE id = ( SELECT MAX( id ) FROM employee WHERE (id <'+"'"+ req.body.id +"'" +')AND(department_id ='+"'"+ req.body.deptID +"'" +'))',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectEmployeeInfoForDeptEmpFormNext', function (req, res, next) {

    connection.query('SELECT * FROM employee WHERE id = ( SELECT MIN( id ) FROM employee WHERE (id >'+"'"+ req.body.id +"'" +')AND(department_id ='+"'"+ req.body.deptID +"'" +'))',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/selectcontractinfoForFormBack', function (req, res, next) {
    console.log('SELECT * FROM contract WHERE id = ( SELECT max( id ) FROM contract WHERE id <'+"'"+ req.body.id +"'" +')');
    connection.query('SELECT * FROM contract WHERE id = ( SELECT max( id ) FROM contract WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
            console.log(results);
        }
    });


});


router.post('/selectdepartmentinfo', function (req, res, next) {
    console.log("Inside service selectdepartmentinfo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

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
    console.log('SELECT employee.employeename FROM employee WHERE employee.department_id = '+req.body.employeeId);
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
router.post('/fetchDepartmentManager', function (req, res, next) {
    connection.query('SELECT manager_id FROM department WHERE id =  '+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);

    });

});
router.post('/fetchEmployeeDeptAndManager', function (req, res, next) {
    connection.query('SELECT employee.department_id, department.manager_id from employee, department WHERE employee.department_id = department.id AND employee.id = '+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);

    });

});
//fetches all employees list from whom you can select a new manager for given department
router.post('/fetchManagers', function (req, res, next) {

    connection.query('SELECT * FROM  `employee` ', function (error, results, fields) {
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

    connection.query('SELECT * FROM  `department` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/fetchleavetypes', function (req, res, next) {
    console.log('Inside  fetchleavetypes #####');
    connection.query('SELECT * FROM `leave_type` limit 7', function (error, results, fields) {
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

    connection.query('SELECT employee.id, employee.employeename,employee.work_phone,employee.work_email,employee.statuss,job_positions.job_tittle,contact.address AS workAddress FROM employee LEFT JOIN job_positions ON employee.job_tittle = job_positions.id LEFT JOIN contact ON employee.work_address_id = contact.id ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
            console.log(results);
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
router.post('/fetchDepartmentEmployees', function (req, res, next) {

    connection.query('SELECT employee.id, employee.employeename,employee.work_phone,employee.work_email,employee.statuss,job_positions.job_tittle,contact.address AS workAddress FROM employee LEFT JOIN job_positions ON employee.job_tittle = job_positions.id LEFT JOIN contact ON employee.work_address_id = contact.id WHERE `employee`.`department_id` = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
            console.log(results);
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
router.post('/fetchDeptTotalAndAbsentEmployees', function (req, res, next) {

    connection.query('SELECT COUNT(DISTINCT e1.id) As depatAbsentEmployees,COUNT(DISTINCT e2.id) As depatmentEmployees FROM employee e1,employee e2, attandance, department WHERE e1.id = attandance.emp_id AND attandance.TotalTime = "00:00:00" AND e1.department_id =394 AND e2.department_id = 394 ', function (error, results, fields) {
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
    connection.query('SELECT contract.id, contract.reference, employee.employeename as Employee , employee_contract_type.name AS Contract_Type, job_positions.job_tittle, working_schedule.name AS Working_Schedule , contract.trial_period_duration_from AS Start_Date, contract.trial_period_duration_to As End_Date FROM contract LEFT JOIN employee_contract_type ON contract.contract_type = employee_contract_type.id LEFT JOIN working_schedule ON contract.working_schedule_id = working_schedule.id LEFT JOIN employee ON contract.employee_id = employee.id LEFT JOIN job_positions ON contract.job_tittle=job_positions.id limit 10', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/contract_tablenext', function (req, res, next) {

    connection.query('SELECT contract.id, contract.reference, employee.employeename as Employee , employee_contract_type.name AS Contract_Type, contract.job_tittle, working_schedule.name AS Working_Schedule , contract.trial_period_duration_from AS Start_Date, contract.trial_period_duration_to As End_Date FROM contract LEFT JOIN employee_contract_type ON contract.contract_type = employee_contract_type.id LEFT JOIN working_schedule ON contract.working_schedule_id = working_schedule.id LEFT JOIN employee ON contract.employee_id = employee.id limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/contract_tableback', function (req, res, next) {
    connection.query('SELECT contract.id, contract.reference, employee.employeename as Employee , employee_contract_type.name AS Contract_Type, contract.job_tittle, working_schedule.name AS Working_Schedule , contract.trial_period_duration_from AS Start_Date, contract.trial_period_duration_to As End_Date FROM contract LEFT JOIN employee_contract_type ON contract.contract_type = employee_contract_type.id LEFT JOIN working_schedule ON contract.working_schedule_id = working_schedule.id LEFT JOIN employee ON contract.employee_id = employee.id limit 10 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});


router.post('/putEmployeesToTableView', function (req, res, next) {
    connection.query('SELECT e1.id AS ID, e1.employeename as empname, e1.work_phone as phone, e1.work_email as email, department.name as deptname, job_positions.job_tittle as job, e2.employeename as empManager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.employee_manager_id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN department ON e1.department_id = department.id limit 3', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/putDeptEmployeesToTableView', function (req, res, next) {
    console.log('SELECT e1.id AS ID, e1.employeename as empname, e1.work_phone as phone, e1.work_email as email, department.name as deptname, job_positions.job_tittle as job, e2.employeename as empManager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.employee_manager_id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN department ON e1.department_id = department.id Where e1.department_id = "'+req.body.id+'" LIMIT 3');
    connection.query('SELECT e1.id AS ID, e1.employeename as empname, e1.work_phone as phone, e1.work_email as email, department.name as deptname, job_positions.job_tittle as job, e2.employeename as empManager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.employee_manager_id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN department ON e1.department_id = department.id Where e1.department_id = "'+req.body.id+'" LIMIT 3', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/employee_tablenext', function (req, res, next) {
    connection.query('SELECT e1.id AS ID, e1.employeename as empname, e1.work_phone as phone, e1.work_email as email, department.name as deptname, job_positions.job_tittle as job, e2.employeename as empManager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.employee_manager_id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN department ON e1.department_id = department.id limit 3 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/DeptEmployeeNext', function (req, res, next) {
    connection.query('SELECT e1.id AS ID, e1.employeename as empname, e1.work_phone as phone, e1.work_email as email, department.name as deptname, job_positions.job_tittle as job, e2.employeename as empManager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.employee_manager_id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN department ON e1.department_id = department.id Where e1.department_id = "'+req.body.id+'" limit 3 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/employee_tableback', function (req, res, next) {
    connection.query('SELECT e1.id AS ID, e1.employeename as empname, e1.work_phone as phone, e1.work_email as email, department.name as deptname, job_positions.job_tittle as job, e2.employeename as empManager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.employee_manager_id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN department ON e1.department_id = department.id limit 3 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/DeptEmployeeBack', function (req, res, next) {
    console.log('SELECT e1.id AS ID, e1.employeename as empname, e1.work_phone as phone, e1.work_email as email, department.name as deptname, job_positions.job_tittle as job, e2.employeename as empManager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.employee_manager_id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN department ON e1.department_id = department.id Where e1.department_id = "'+req.body.id+'" limit 3 OFFSET '+""+ req.body.counter +"" +'');
    connection.query('SELECT e1.id AS ID, e1.employeename as empname, e1.work_phone as phone, e1.work_email as email, department.name as deptname, job_positions.job_tittle as job, e2.employeename as empManager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.employee_manager_id LEFT JOIN job_positions ON e1.job_tittle = job_positions.id LEFT JOIN department ON e1.department_id = department.id Where e1.department_id = "'+req.body.id+'" limit 3 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/putDepartmentsToTableView', function (req, res, next) {
    connection.query('SELECT dept1.id As ID,dept1.name AS displayname, dept2.name AS deptId , emp.employeename AS manager  FROM `department` dept1, (select id, name from department) as dept2, employee as emp where dept2.id = dept1.`parent_dept_id` and emp.id = dept1.manager_id limit 6', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/department_tablenext', function (req, res, next) {

    connection.query('SELECT dept1.id As ID,dept1.name AS displayname, dept2.name AS deptId , emp.employeename AS manager  FROM `department` dept1, (select id, name from department) as dept2, employee as emp where dept2.id = dept1.`parent_dept_id` and emp.id = dept1.manager_id limit 6 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/department_tableback', function (req, res, next) {

    connection.query('SELECT dept1.id As ID,dept1.name AS displayname, dept2.name AS deptId , emp.employeename AS manager  FROM `department` dept1, (select id, name from department) as dept2, employee as emp where dept2.id = dept1.`parent_dept_id` and emp.id = dept1.manager_id limit 6 OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/departmentShow', function (req, res, next) {
    console.log("Inside service departmentShow!!! ");
    //
    //SELECT d1.name AS depttname, d2.name AS parentDept, employee.employeename AS deptManager FROM department d1 LEFT JOIN department d2 ON d1.id = d2.parent_dept_id LEFT JOIN employee ON d1.manager_id = employee.id WHERE d1.id = "'+req.body.id+'"
    console.log('SELECT dept1.name AS depttname, dept2.name AS parentDept , emp.employeename AS deptManager  FROM `department` dept1, (select id, name from department) as dept2, employee as emp WHERE dept2.id = dept1.`parent_dept_id` and emp.id = dept1.manager_id AND dept1.id = "'+req.body.id+'"');
    connection.query('SELECT dept1.name AS depttname, dept2.name AS parentDept , emp.employeename AS deptManager  FROM `department` dept1, (select id, name from department) as dept2, employee as emp WHERE dept2.id = dept1.`parent_dept_id` and emp.id = dept1.manager_id AND dept1.id = "'+req.body.id+'"', function (error, results, fields) {
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
router.post('/fetchDepartments2', function (req, res, next) {
    console.log("Inside service fetchDepartments2!!! ");
    connection.query('SELECT * FROM  `department` WHERE department.id = "'+req.body.id+'"', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});


router.post('/fetchJobTitleAndDept', function (req, res, next) {

    console.log("Inside Service fetchJobTitleAndDept: employeeId  =  "+req.body.employeeId);

    connection.query('SELECT job_tittle, department_id FROM employee where employee.id='+"'"+ req.body.employeeId +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
         else{
             console.log(results);
            res.json({"status": "ok", "data": results});
        }
        console.log(results);
    });

})

router.post('/fetchEmployeeDepartment', function (req, res, next) {

    console.log("Inside Service fetchEmployeeDepartment: employeeId  =  "+req.body.employeeId);

    connection.query('SELECT department.name FROM employee ,department where employee.id='+"'"+ req.body.employeeId +"'" +' AND employee.department_id = department.id',function (error, results, fields) {
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

    connection.query('SELECT employee.work_mobile,employee.work_email,employee.work_phone, employee.work_location FROM employee where employee.work_address_id='+"'"+ req.body.workingAddressId +"'" +' ',function (error, results, fields) {
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
    console.log("Insile  selectjobtitles service !!!");
    console.log("jobtitleId : "+req.body.id);
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
router.post('/deleteSelectedContract', function (req, res, next) {
    console.log('DELETE  FROM  `contract` WHERE id = "'+req.body.id+'"');

    connection.query('DELETE  FROM  `contract` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {

            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/deleteSelectedDepartment2', function (req, res, next) {
    console.log('DELETE  FROM  `department` WHERE id = "'+req.body.id+'"');

    connection.query('DELETE  FROM  `department` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {

            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});

router.post('/deleteSelectedDepartment', function (req, res, next) {
    console.log('DELETE  FROM  `department` WHERE id = "'+req.body.id+'"');

    connection.query('DELETE  FROM  `department` WHERE id = "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "data": results});
        } else {

            console.log(error.message);
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});

router.post('/deleteContracts', function (req, res, next) {

    for (var i = 0; i < req.body.delete_items.length; ++i) {
        console.log(req.body.delete_items[i]);
        console.log('DELETE FROM `contract` WHERE id = "'+req.body.delete_items[i]+'"');
        connection.query('DELETE FROM `contract` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

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
//............................................................... osma's services start here

// router.post('/Editreqsmodal', function (req, res, next) {
//     if(!(req.body.parent_dept_id)){
//         req.body.parent_dept_id=null;
//     }
//     if(!(req.body.manager_id)){
//         req.body.manager_id=null;
//     }
//     console.log('UPDATE department SET name = "'+req.body.name+'",parent_dept_id = '+req.body.parent_dept_id+',manager_id = '+req.body.manager_id+' WHERE id = '+ req.body.id +'');
//     connection.query('UPDATE department SET name = "'+req.body.name+'",parent_dept_id = '+req.body.parent_dept_id+',manager_id = '+req.body.manager_id+' WHERE id = '+ req.body.id +'', function (error, results, fields) {
//         if (error) {
//             res.json({"status": "failed", "message": error.message});
//         }
//     });
// });
// router.post('/depinsertmodal', function (req, res, next) {
//     if(!(req.body.parent_dept_id)){
//         req.body.parent_dept_id=null;
//     }
//     if(!(req.body.manager_id)){
//         req.body.manager_id=null;
//     }
//     console.log(req.body.manager_id)
//     connection.query('INSERT INTO `department`(`name`,`parent_dept_id`,`manager_id`) VALUES ("'+req.body.name+'",'+req.body.parent_dept_id+','+req.body.manager_id+')', function (error, results, fields) {
//         if (error) {
//             res.json({"status": "failed", "message": error.message});
//         }// console.log(results);
//     });
// });
//
// router.post('/depss', function (req, res, next) {
//
//     connection.query('SELECT * from department where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
//         if (error) res.json({"status": "failed", "message": error.message});
//         else{
//             res.json({"status": "ok", "data": results});
//
//         }
//     });
//
// });
// router.post('/deps', function (req, res, next) {
//
//     connection.query("select * from department", function (error, results, fields) {
//         if (error) res.json({"status": "failed", "message": error.message});
//         else{
//             res.json({"status": "ok", "data": results});
//
//         }
//     });
// });
// router.post('/emps', function (req, res, next) {
//
//     connection.query("select * from employee", function (error, results, fields) {
//         if (error) res.json({"status": "failed", "message": error.message});
//         else{
//             res.json({"status": "ok", "data": results});
//
//         }
//     });
// });
//............................................................... osma's services end here
router.post('/usa', function (req, res, next) {

    connection.query('SELECT * FROM department WHERE id = ( SELECT MIN( id ) FROM department WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
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
router.post('/sourcedepss', function (req, res, next) {

    connection.query("select * from job_positions", function (error, results, fields) {
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
router.post('/depss', function (req, res, next) {

    connection.query('SELECT * from department where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/numdep', function (req, res, next) {

    connection.query("select COUNT(*) as count from department", function (error, results, fields) {
        if (error){ res.json({"status": "failed", "message": error.message});}
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/countContract', function (req, res, next) {
    connection.query("select COUNT(*) as count from contract", function (error, results, fields) {
        if (error){ res.json({"status": "failed", "message": error.message});}
        else{
            res.json({"status": "ok", "data": results});
            console.log(results);
        }
    });

})
router.post('/countEmployees', function (req, res, next) {
    connection.query("select COUNT(*) as count from employee", function (error, results, fields) {
        if (error){ res.json({"status": "failed", "message": error.message});}
        else{
            res.json({"status": "ok", "data": results});
            console.log(results);
        }
    });

});
router.post('/countDeptEmployees', function (req, res, next) {
        connection.query('select COUNT(*) as count from employee Where employee.department_id="'+ req.body.id +'"', function (error, results, fields) {
        if (error){ res.json({"status": "failed", "message": error.message});}
        else{
            res.json({"status": "ok", "data": results});
            console.log(results);
        }
    });

});

router.post('/Editreqs', function (req, res, next) {
    console.log("Editreqs service is running to edit department!!!!!!!!!!!");

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

router.post('/allocationrequesttablenext', function (req, res, next) {

    connection.query(' SELECT leave_request.id AS id, leave_request.description,leave_request.date_from, leave_request.date_to, leave_request.duration AS duration,leave_request.status AS status, employee.employeename, leave_type.type FROM leave_request LEFT JOIN employee ON leave_request.employee_id = employee.id LEFT JOIN leave_type On leave_request.leave_type_id = leave_type.id limit  10  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/allocationrequesttableback', function (req, res, next) {

    connection.query('SELECT leave_request.id AS id, leave_request.description,leave_request.date_from, leave_request.date_to, leave_request.duration AS duration,leave_request.status AS status, employee.employeename, leave_type.type FROM leave_request LEFT JOIN employee ON leave_request.employee_id = employee.id LEFT JOIN leave_type On leave_request.leave_type_id = leave_type.id limit  10  OFFSET '+""+ req.body.counter +"" +'', function (error, results, fields) {
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
router.post('/selectleaveemp', function (req, res, next) {
    connection.query('SELECT * from employee where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
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
router.post('/leave_allocation_perivious', function (req, res, next) {
    connection.query('SELECT * FROM leave_request WHERE id = ( SELECT MIN( id ) FROM leave_request WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
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
router.post('/leave_allocation_next', function (req, res, next) {

    connection.query('SELECT * FROM leave_request WHERE id = ( SELECT max( id ) FROM leave_request WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
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
router.post('/leaveselect', function (req, res, next) {
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
router.post('/leaverequestselect', function (req, res, next) {
    connection.query('SELECT * from leave_request where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/allocationrequesttable', function (req, res, next) {
    connection.query("SELECT leave_request.id AS id, leave_request.description,leave_request.date_from, leave_request.date_to, leave_request.duration AS duration,leave_request.status AS status, employee.employeename, leave_type.type FROM leave_request LEFT JOIN employee ON leave_request.employee_id = employee.id LEFT JOIN leave_type On leave_request.leave_type_id = leave_type.id limit 10", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/allocationRequestsToApprove', function (req, res, next) {
    connection.query("SELECT leave_request.id, employee.employeename,leave_type.type,tags.name AS employeetag,leave_request.mode,leave_request.description,leave_request.duration AS allocateDays,leave_request.date_from as startDate, leave_request.date_to as endDate,leave_request.status FROM leave_request LEFT Join employee ON leave_request.employee_id = employee.id LEFT JOIN leave_type ON leave_request.leave_type_id = leave_type.id LEFT JOIN tags ON leave_request.employee_tag_id = tags.id limit 10", function (error, results, fields) {
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
router.post('/deleteDepartment', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `department` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
        });
    }
    console.log(req.body.delete_items);
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
router.post('/tags', function (req, res, next) {

    connection.query("select * from tags", function (error, results, fields) {
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
router.post('/confitableall', function (req, res, next) {
    connection.query("select * from leave_type ", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
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
router.post('/confitableall', function (req, res, next) {
    connection.query("select * from leave_type ", function (error, results, fields) {
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
    if(!(req.body.reported_last_payslips)){
        req.body.reported_last_payslips=null;
    }
    console.log('INSERT INTO `leave_request`(`reported_last_payslips`,`status`,`comment_manager`,`description`,`leave_type_id`,`mode`,`duration`,`employee_id`,`department_id`)VALUES('+req.body.reported_last_payslips+',"'+req.body.test+'","'+req.body.comment_manager+'","'+req.body.description+'",'+req.body.leave_type_id+',"'+req.body.mode+'",'+req.body.duration+','+req.body.employee_id+','+req.body.department_id+')');
    connection.query('INSERT INTO `leave_request`(`reported_last_payslips`,`status`,`comment_manager`,`description`,`leave_type_id`,`mode`,`duration`,`employee_id`,`department_id`)VALUES("'+req.body.reported_last_payslips+'","'+req.body.test+'","'+req.body.comment_manager+'","'+req.body.description+'",'+req.body.leave_type_id+',"'+req.body.mode+'",'+req.body.duration+','+req.body.employee_id+','+req.body.department_id+')', function (error, results, fields) {
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
router.post('/delete_leave_allocation', function (req, res, next) {
    connection.query('DELETE  from leave_request where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
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