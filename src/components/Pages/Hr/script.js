import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        self.select1();

        self.btnlinks.editbtnlink = "/attendance/empedit/"+self.$route.params.id;
        self.btnlinks.duplicatebtnlink = "/attendance/empduplicate/"+self.$route.params.id;
        self.btnlinks.printBadgebtnlink = "/attendance/PrintBadge/"+self.$route.params.id;
        $(function(){
            $("#reds").hide();
            //$("#green").hide();
            $(".delete").click(function () {
                self.deleteEmplyee();
            });
            $("#export").click(function () {
                self.btnlinks.subordinatebtnlink = "/attendance/hierarchy/"+self.$route.params.id;
            });
            $("#num01").click(function () {
                self.ssubmit();
                self.select3();

            });
            $("#num10").click(function () {
                self.psubmit();
            });
            $("#leavesSummary").click(function () {
                $(".bd-example-modal-lg1").modal('show');
            });
            // $(".workingTimeDropdown").on('change',function() {
            //     var value = $(this).val();s
            //     if (value == "Create and Edit...") {
            //         $(".bd-example-modal-lg100").modal('show');
            //     }
            // });

            // $("#delete").click(function () {
            //     self.submit_inside();
            //     alert("are you sure delete the user");
            //     window.location.href = "../users";
            // });


            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
                anch.css({"backgroundColor":col});
            });
            $(document).ready(function(){
                $(".btn.btn-success.b").click(function(){
                    $("#panel").slideToggle("slow");
                });
            });

            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#edit1').css("display");
                if(check == "none"){
                    $('#edit1').show();
                    $('#main1').hide();
                }else{
                    $('#edit1').hide();
                    $('#main1').show();
                }
            });
            document.title = this.title;
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
            $(document).ready(function () {
                var d = new Date();
                var hour    = d.getHours();
                var minute  = d.getMinutes();
                var second  = d.getSeconds();
                var time = hour+":"+minute+":"+second;
                $("#demo").html(time);
            });

            $('#datepicker7').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            $('#datepicker8').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            function showTestDate() {
                var value = $('#datepicker8').datepicker('getFormattedDate');
                self.dates_value8 = value;
                var value1 = $('#datepicker7').datepicker('getFormattedDate');
                self.dates_value7 = value1;

            };


        });

    },
    data(){
        return {
            employeename:'',
            workaddressId:'',
            workEmail:'',
            workPhone:'',
            workMobile:'',
            workLocation:'',
            departmentId:'',
            jobTitle:'',
            jobTitleId:'',
            employeeManagerId:'',
            coachId:'',
            countryId:'',
            workTimeId:'',
            identificationNo:'',
            passportNo:'',
            employeeBankAccId:'',
            workPermitNo:'',
            gerder:'',
            martialStatus:'',
            noOfChildren:'',
            homeAddressId:'',
            dateOfBirth:'',
            placeOfBirth:'',
            timeSheetCost:'',
            accountId:'',
            medicalExam:'',
            companyVehicle:'',
            homeWorkDistance:'',
            relatedUserId:'',
            badgeId:'',
            pin:'',
            manualAttendance:'',

            workingAddress:'',
            departmentName:'',
            emplyeeManagerName:'',
            coachName:'',
            wokingTimeName:'',
            countryname:'',
            bankAccNo:'',
            homeAddress:'',
            accountname:'',
            relatedUser:'',
            num:'',
            statuss:'',


            r: true,
            t:false,
            k:false,
            y:false,
            p:true,
            f:false,
            l:false,

            u:false,
            counter: 1,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

            nextactivity: "Leaves Summary",
            btnlinks: {

                importbtnlink:"#/app/imported",
                createbtnlink: "/attendance/Createemp",// /Employees/HrDepscreate
                editbtnlink:"",
                subordinatebtnlink:"",
                deletebtnlink:"",
                leavesSummarybtnlink:"",
                printBadgebtnlink:"",
                cancelbtnlink:"",
                printbtnlink:"",
                deletedropbtnlink:"",
                duplicatebtnlink:"",


            },
            tableheader: [
                "Reference",
                "Destination Location Zone",
                "Partner",
                "Schduled Date",
                "Source Document",
                "Back Order Of",
                "Status",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },

            }

        }
    },
    methods: {
        deleteEmplyee: function () {
            var self = this;
            self.$http.post("/recruitment/deleteSelectedEmployee", {"id": self.$route.params.id }).then(function(res){
                alert("Are you sure you want to delete the employee???");
                console.log("this is the id of employee to be deleted =  "+self.$route.params.id);
            },function(err){
                //alert(err);
            });
        },
        // submit_inside: function () {
        //     var self = this;
        //     //alert(self.current_company+ " ");
        //     self.$http.post("/Employees/deleteSelectedEmployee", {"id": self.$route.params.id }).then(function(res){
        //         console.log(res.body);
        //     },function(err){
        //         //alert(err);
        //     });
        // },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/selectemployeeinfo", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.employeeName = parentdata.employeename;
                self.workAddressId = parentdata.work_address_id;
                self.workEmail = parentdata.work_email;
                self.workPhone = parentdata.work_phone;
                self.workMobile = parentdata.work_mobile;
                self.workLocation = parentdata.work_location;
                self.departmentId = parentdata.department_id;
                self.jobTitleId = parentdata.job_tittle;
                self.employeeManagerId = parentdata.employee_manager_id;
                self.coachId = parentdata.coach_id;
                self.countryId = parentdata.country_id;
                self.workingTimeId = parentdata.working_time_id;
                self.identificationNo = parentdata.identification_number;
                self.passportNo = parentdata.passport_number;
                self.employeeBankAccId = parentdata.employee_bank_account_id;
                self.gender = parentdata.gender;
                self.maritalStatus = parentdata.maritial_status;
                self.noOfChildren = parentdata.number_of_childern;
                self.homeAddressId = parentdata.home_address_id;
                self.dateOfBirth = parentdata.date_of_birth;
                self.placeOfBirth = parentdata.place_of_birth;
                self.timeSheetCost = parentdata.time_sheet_cost;
                self.accountId = parentdata.account_id;
                self.medicalExam = parentdata.medical_exam;
                self.companyVehicle = parentdata.company_vehicle;
                self.homeWorkDistance = parentdata.home_work_distance;
                self.relatedUserId = parentdata.related_user_id;
                self.badgeId = parentdata.badge_id;
                self.pin = parentdata.pin;
                self.statuss = parentdata.statuss.data[0];
                self.manualAttendance = parentdata.manual_attandance.data[0];
                if(self.statuss == 0){
                    $("#green").show();
                    $("#reds").hide();
                }
                else
                {
                    $("#reds").show();
                    $("#green").hide();
                }

                console.log(parentdata);

                self.$http.post("/recruitment/selectworkaddress", {"id":self.workAddressId}).then(function (res) {
                    var datas = res.body.data[0];
                    self.workingAddress = datas.address;
                    self.$http.post("/recruitment/selectdepartment", {"id":self.departmentId}).then(function (res) {
                        var dept = res.body.data[0];
                        self.departmentName = dept.name;
                        console.log(dept.name);
                        self.$http.post("/recruitment/selectjobtitles", {"id":self.jobTitleId}).then(function (res) {
                            var dept = res.body.data[0];
                            self.jobTitle = dept.job_tittle;
                            console.log(dept.job_tittle);
                            self.$http.post("/recruitment/selectmanager", {"id":self.employeeManagerId}).then(function (res) {
                                var dept = res.body.data[0];
                                self.emplyeeManagerName = dept.employeename;
                                console.log(dept.employeename);
                                self.$http.post("/recruitment/selectcoach", {"id":self.coachId}).then(function (res) {
                                    var dept = res.body.data[0];
                                    self.coachName = dept.employeename;
                                    console.log(dept.employeename);
                                    self.$http.post("/recruitment/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
                                        var workSchedule = res.body.data[0];
                                        self.wokingTimeName = workSchedule.name;
                                        console.log(workSchedule.name );
                                        self.$http.post("/recruitment/selectcountry", {"id":self.countryId}).then(function (res) {
                                            var workSchedule = res.body.data[0];
                                            self.countryname = workSchedule.country_name;
                                            console.log(workSchedule.country_name );
                                            self.$http.post("/recruitment/selectbankaccountNo", {"id":self.employeeBankAccId}).then(function (res) {
                                                var workSchedule = res.body.data[0];
                                                self.bankAccNo = workSchedule.account_number;
                                                console.log(workSchedule.account_number );
                                                self.$http.post("/recruitment/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
                                                    var workSchedule = res.body.data[0];
                                                    self.homeAddress = workSchedule.address;
                                                    console.log(workSchedule.address );
                                                    self.$http.post("/recruitment/selectaccount", {"id":self.accountId}).then(function (res) {
                                                        var workSchedule = res.body.data[0];
                                                        self.accountname = workSchedule.name;
                                                        console.log(workSchedule.name );
                                                        self.$http.post("/recruitment/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
                                                            var workSchedule = res.body.data[0];
                                                            self.relatedUser = workSchedule.username;
                                                            console.log(workSchedule.username );

                                                        }, function (err) {

                                                        });


                                                    }, function (err) {

                                                    });
                                                }, function (err) {

                                                });
                                            }, function (err) {

                                            });
                                        }, function (err) {

                                        });
                                    }, function (err) {

                                    });
                                }, function (err) {

                                });
                            }, function (err) {

                            });
                        }, function (err) {

                        });

                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });

        },
        ssubmit: function () {
            var self = this;
            self.$http.post("/recruitment/selectemployeeinfonext", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.employeeName = parentdata.employeename;
                self.$route.params.id = parentdata.id;
                self.workAddressId = parentdata.work_address_id;
                self.workEmail = parentdata.work_email;
                self.workPhone = parentdata.work_phone;
                self.workMobile = parentdata.work_mobile;
                self.workLocation = parentdata.work_location;
                self.departmentId = parentdata.department_id;
                self.jobTitleId = parentdata.job_tittle;
                self.employeeManagerId = parentdata.employee_manager_id;
                self.coachId = parentdata.coach_id;
                self.countryId = parentdata.country_id;
                self.workingTimeId = parentdata.working_time_id;
                self.identificationNo = parentdata.identification_number;
                self.passportNo = parentdata.passport_number;
                self.employeeBankAccId = parentdata.employee_bank_account_id;
                //self.workPermitNo = parentdata.work_permit_no;
                self.gender = parentdata.gender;
                self.maritalStatus = parentdata.maritial_status;
                self.noOfChildren = parentdata.number_of_childern;
                self.homeAddressId = parentdata.home_address_id;
                self.dateOfBirth = parentdata.date_of_birth;
                self.placeOfBirth = parentdata.place_of_birth;
                self.timeSheetCost = parentdata.time_sheet_cost;
                self.accountId = parentdata.account_id;
                self.medicalExam = parentdata.medical_exam;
                self.companyVehicle = parentdata.company_vehicle;
                self.homeWorkDistance = parentdata.home_work_distance;
                self.relatedUserId = parentdata.related_user_id;
                self.badgeId = parentdata.badge_id;
                self.pin = parentdata.pin;
                self.manualAttendance = parentdata.manual_attandance.data[0];

                console.log(parentdata);

                self.$http.post("/recruitment/selectworkaddress", {"id":self.workAddressId}).then(function (res) {
                    var datas = res.body.data[0];
                    self.workingAddress = datas.address;
                    self.$http.post("/recruitment/selectdepartment", {"id":self.departmentId}).then(function (res) {
                        var dept = res.body.data[0];
                        self.departmentName = dept.name;
                        console.log(dept.name);
                        self.$http.post("/recruitment/selectjobtitles", {"id":self.jobTitleId}).then(function (res) {
                            var dept = res.body.data[0];
                            self.jobTitle = dept.job_tittle;
                            console.log(dept.job_tittle);
                            self.$http.post("/recruitment/selectmanager", {"id":self.employeeManagerId}).then(function (res) {
                                var dept = res.body.data[0];
                                self.emplyeeManagerName = dept.employeename;
                                console.log(dept.employeename);
                                self.$http.post("/recruitment/selectcoach", {"id":self.coachId}).then(function (res) {
                                    var dept = res.body.data[0];
                                    self.coachName = dept.employeename;
                                    console.log(dept.employeename);
                                    self.$http.post("/recruitment/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
                                        var workSchedule = res.body.data[0];
                                        self.wokingTimeName = workSchedule.name;
                                        console.log(workSchedule.name );
                                        self.$http.post("/recruitment/selectcountry", {"id":self.countryId}).then(function (res) {
                                            var workSchedule = res.body.data[0];
                                            self.countryname = workSchedule.country_name;
                                            console.log(workSchedule.country_name );
                                            self.$http.post("/recruitment/selectbankaccountNo", {"id":self.employeeBankAccId}).then(function (res) {
                                                var workSchedule = res.body.data[0];
                                                self.bankAccNo = workSchedule.account_number;
                                                console.log(workSchedule.account_number );
                                                self.$http.post("/recruitment/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
                                                    var workSchedule = res.body.data[0];
                                                    self.homeAddress = workSchedule.address;
                                                    console.log(workSchedule.address );
                                                    self.$http.post("/recruitment/selectaccount", {"id":self.accountId}).then(function (res) {
                                                        var workSchedule = res.body.data[0];
                                                        self.accountname = workSchedule.name;
                                                        console.log(workSchedule.name );
                                                        self.$http.post("/recruitment/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
                                                            var workSchedule = res.body.data[0];
                                                            self.relatedUser = workSchedule.username;
                                                            console.log(workSchedule.username );

                                                        }, function (err) {

                                                        });


                                                    }, function (err) {

                                                    });
                                                }, function (err) {

                                                });
                                            }, function (err) {

                                            });
                                        }, function (err) {

                                        });
                                    }, function (err) {

                                    });
                                }, function (err) {

                                });
                            }, function (err) {

                            });
                        }, function (err) {

                        });

                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });




        },
        psubmit: function () {
            var self = this;
            self.$http.post("/recruitment/selectemployeeinfoback", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.employeeName = parentdata.employeename;
                self.$route.params.id = parentdata.id;
                self.workAddressId = parentdata.work_address_id;
                self.workEmail = parentdata.work_email;
                self.workPhone = parentdata.work_phone;
                self.workMobile = parentdata.work_mobile;
                self.workLocation = parentdata.work_location;
                self.departmentId = parentdata.department_id;
                self.jobTitleId = parentdata.job_tittle;
                self.employeeManagerId = parentdata.employee_manager_id;
                self.coachId = parentdata.coach_id;
                self.countryId = parentdata.country_id;
                self.workingTimeId = parentdata.working_time_id;
                self.identificationNo = parentdata.identification_number;
                self.passportNo = parentdata.passport_number;
                self.employeeBankAccId = parentdata.employee_bank_account_id;
                //self.workPermitNo = parentdata.work_permit_no;
                self.gender = parentdata.gender;
                self.maritalStatus = parentdata.maritial_status;
                self.noOfChildren = parentdata.number_of_childern;
                self.homeAddressId = parentdata.home_address_id;
                self.dateOfBirth = parentdata.date_of_birth;
                self.placeOfBirth = parentdata.place_of_birth;
                self.timeSheetCost = parentdata.time_sheet_cost;
                self.accountId = parentdata.account_id;
                self.medicalExam = parentdata.medical_exam;
                self.companyVehicle = parentdata.company_vehicle;
                self.homeWorkDistance = parentdata.home_work_distance;
                self.relatedUserId = parentdata.related_user_id;
                self.badgeId = parentdata.badge_id;
                self.pin = parentdata.pin;
                self.manualAttendance = parentdata.manual_attandance.data[0];

                console.log(parentdata);

                self.$http.post("/recruitment/selectworkaddress", {"id":self.workAddressId}).then(function (res) {
                    var datas = res.body.data[0];
                    self.workingAddress = datas.address;
                    self.$http.post("/recruitment/selectdepartment", {"id":self.departmentId}).then(function (res) {
                        var dept = res.body.data[0];
                        self.departmentName = dept.name;
                        console.log(dept.name);
                        self.$http.post("/recruitment/selectjobtitles", {"id":self.jobTitleId}).then(function (res) {
                            var dept = res.body.data[0];
                            self.jobTitle = dept.job_tittle;
                            console.log(dept.job_tittle);
                            self.$http.post("/recruitment/selectmanager", {"id":self.employeeManagerId}).then(function (res) {
                                var dept = res.body.data[0];
                                self.emplyeeManagerName = dept.employeename;
                                console.log(dept.employeename);
                                self.$http.post("/recruitment/selectcoach", {"id":self.coachId}).then(function (res) {
                                    var dept = res.body.data[0];
                                    self.coachName = dept.employeename;
                                    console.log(dept.employeename);
                                    self.$http.post("/recruitment/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
                                        var workSchedule = res.body.data[0];
                                        self.wokingTimeName = workSchedule.name;
                                        console.log(workSchedule.name );
                                        self.$http.post("/recruitment/selectcountry", {"id":self.countryId}).then(function (res) {
                                            var workSchedule = res.body.data[0];
                                            self.countryname = workSchedule.country_name;
                                            console.log(workSchedule.country_name );
                                            self.$http.post("/recruitment/selectbankaccountNo", {"id":self.employeeBankAccId}).then(function (res) {
                                                var workSchedule = res.body.data[0];
                                                self.bankAccNo = workSchedule.account_number;
                                                console.log(workSchedule.account_number );
                                                self.$http.post("/recruitment/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
                                                    var workSchedule = res.body.data[0];
                                                    self.homeAddress = workSchedule.address;
                                                    console.log(workSchedule.address );
                                                    self.$http.post("/recruitment/selectaccount", {"id":self.accountId}).then(function (res) {
                                                        var workSchedule = res.body.data[0];
                                                        self.accountname = workSchedule.name;
                                                        console.log(workSchedule.name );
                                                        self.$http.post("/recruitment/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
                                                            var workSchedule = res.body.data[0];
                                                            self.relatedUser = workSchedule.username;
                                                            console.log(workSchedule.username );

                                                        }, function (err) {

                                                        });


                                                    }, function (err) {

                                                    });
                                                }, function (err) {

                                                });
                                            }, function (err) {

                                            });
                                        }, function (err) {

                                        });
                                    }, function (err) {

                                    });
                                }, function (err) {

                                });
                            }, function (err) {

                            });
                        }, function (err) {

                        });

                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });
        },
        select1: function () {

            var self = this;

            self.$http.post("/recruitment/numemp", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                console.log(self.num)
                //console.log(this.$route.query.id);
            }, function (err) {
            });
        },
    },

    components: {
        Emptyform,
        Tabs,
        Modal,
        ModelDescription,
        Componame,
        DashboardController,
        Tableview,
        Editing,
        Request_quotation_lower,
        Message,
    }
}



// import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
// import Tabs from "./../../partials/Tabs/Tabs.vue"
// import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
// import Componame from "./../../partials/Componame/Componame.vue"
// import Tableview from "./../../partials/Tableview/Tableview.vue"
// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import Editing from "./../../partials/Editing/Editing.vue"
// import Modal from "./../../partials/Modal/Modal.vue"
// import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
// import Message from "./../../partials/Message/Message.vue"
//
// export default{
//     created: function () {
//
//         $(function(){
//             $(".colorbg").on("click", function (e) {
//                 e.preventDefault();
//                 var col = $(this).css("backgroundColor");
//                 var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
//                 anch.css({"backgroundColor":col});
//             });
//             $(document).ready(function(){
//                 $(".btn.btn-success.b").click(function(){
//                     $("#panel").slideToggle("slow");
//                 });
//             });
//
//             $('.samobuttopcontroller2').off('click');
//             $('.samobuttopcontroller2').on('click', function () {
//                 let check = $('#edit1').css("display");
//                 if(check == "none"){
//                     $('#edit1').show();
//                     $('#main1').hide();
//                 }else{
//                     $('#edit1').hide();
//                     $('#main1').show();
//                 }
//
//             });
//
//             document.title = this.title;
//             var oldtext;
//             $('.note.btn.btn-primary').hover(function(){
//                 oldtext = $(this).text();
//                 $(this).text("Unfollow");
//             }, function(){
//                 $(this).text(oldtext)
//             });
//             $(document).ready(function () {
//                 var d = new Date();
//                 var hour    = d.getHours();
//                 var minute  = d.getMinutes();
//                 var second  = d.getSeconds();
//                 var time = hour+":"+minute+":"+second;
//                 $("#demo").html(time);
//             });
//         });
//
//     },
//     data(){
//         return {
//             r: true,
//             t:false,
//             k:false,
//             y:false,
//             p:true,
//             f:false,
//             l:false,
//
//             u:false,
//             counter: 0,
//             m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
//             message: 'To: Followers of "PO00007: 637.50 Rs."',
//             v: false,
//             nextactivity: "Employees/Enrique Jones",
//             btnlinks: {
//                 createbtnlink:"#/app/attendance/Createemp",
//                 importbtnlink:"#/app/imported",
//                 editbtnlink:"#/app/attendance/HrEditone",
//             },
//             tableheader: [
//                 "Reference",
//                 "Destination Location Zone",
//                 "Partner",
//                 "Schduled Date",
//                 "Source Document",
//                 "Back Order Of",
//                 "Status",
//
//             ],
//             tabledata: {
//                 "row": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/#/app/sales/request_quotation_inner"
//
//                 },
//                 "row1": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/#/app/sales/request_quotation_inner"
//
//                 },
//                 "row2": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/#/app/sales/request_quotation_inner"
//
//                 },
//
//             }
//
//         }
//     },
//     components: {
//         Emptyform,
//         Tabs,
//         Modal,
//         ModelDescription,
//         Componame,
//         DashboardController,
//         Tableview,
//         Editing,
//         Request_quotation_lower,
//         Message,
//
//
//
//
//     }
//
// }
//
//
// // import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
// // import Tabs from "./../../partials/Tabs/Tabs.vue"
// // import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
// // import Componame from "./../../partials/Componame/Componame.vue"
// // import Tableview from "./../../partials/Tableview/Tableview.vue"
// // import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// // import Editing from "./../../partials/Editing/Editing.vue"
// // import Modal from "./../../partials/Modal/Modal.vue"
// // import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
// // import Message from "./../../partials/Message/Message.vue"
// //
// // export default{
// //     created: function () {
// //         var self = this;
// //         self.select();
// //         self.btnlinks.editbtnlink = "/Employees/HrDepsEdit/"+self.$route.params.id;
// //         self.btnlinks.duplicatebtnlink = "/Employees/HrDuplicate/"+self.$route.params.id;
// //         self.btnlinks.printBadgebtnlink = "/Employees/Badge/"+self.$route.params.id;
// //
// //
// //         $(function(){
// //             $("#delete").click(function () {
// //                 alert("calling delete operation!!!");
// //                 self.deleteEmplyee();
// //             });
// //
// //             $("#leavesSummary").click(function () {
// //                 $(".bd-example-modal-lg1").modal('show');
// //             });
// //             // $(".workingTimeDropdown").on('change',function() {
// //             //     var value = $(this).val();
// //             //     if (value == "Create and Edit...") {
// //             //         $(".bd-example-modal-lg100").modal('show');
// //             //     }
// //             // });
// //
// //             // $("#delete").click(function () {
// //             //     self.submit_inside();
// //             //     alert("are you sure delete the user");
// //             //     window.location.href = "../users";
// //             // });
// //             $(".colorbg").on("click", function (e) {
// //                 e.preventDefault();
// //                 var col = $(this).css("backgroundColor");
// //                 var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
// //                 anch.css({"backgroundColor":col});
// //             });
// //             $(document).ready(function(){
// //                 $(".btn.btn-success.b").click(function(){
// //                     $("#panel").slideToggle("slow");
// //                 });
// //             });
// //             $('.samobuttopcontroller2').off('click');
// //             $('.samobuttopcontroller2').on('click', function () {
// //                 let check = $('#edit1').css("display");
// //                 if(check == "none"){
// //                     $('#edit1').show();
// //                     $('#main1').hide();
// //                 }else{
// //                     $('#edit1').hide();
// //                     $('#main1').show();
// //                 }
// //             });
// //             document.title = this.title;
// //             var oldtext;
// //             $('.note.btn.btn-primary').hover(function(){
// //                 oldtext = $(this).text();
// //                 $(this).text("Unfollow");
// //             }, function(){
// //                 $(this).text(oldtext)
// //             });
// //             $(document).ready(function () {
// //                 var d = new Date();
// //                 var hour    = d.getHours();
// //                 var minute  = d.getMinutes();
// //                 var second  = d.getSeconds();
// //                 var time = hour+":"+minute+":"+second;
// //                 $("#demo").html(time);
// //             });
// //
// //             $('#datepicker7').datepicker({
// //                 format: "dd.mm.yyyy",
// //                 todayBtn: "linked",
// //                 language: "de",
// //                 daysOfWeekDisabled: "0,6",
// //                 daysOfWeekHighlighted: "4",
// //                 todayHighlight: true,
// //             }).on('changeDate',showTestDate);
// //
// //             $('#datepicker8').datepicker({
// //                 format: "dd.mm.yyyy",
// //                 todayBtn: "linked",
// //                 language: "de",
// //                 daysOfWeekDisabled: "0,6",
// //                 daysOfWeekHighlighted: "4",
// //                 todayHighlight: true,
// //             }).on('changeDate',showTestDate);
// //
// //             function showTestDate() {
// //                 var value = $('#datepicker8').datepicker('getFormattedDate');
// //                 self.dates_value8 = value;
// //                 var value1 = $('#datepicker7').datepicker('getFormattedDate');
// //                 self.dates_value7 = value1;
// //
// //             };
// //
// //
// //         });
// //
// //     },
// //     data(){
// //         return {
// //             employeename:'',
// //             workaddressId:'',
// //             workEmail:'',
// //             workPhone:'',
// //             workMobile:'',
// //             workLocation:'',
// //             departmentId:'',
// //             jobTitle:'',
// //             jobTitleId:'',
// //             employeeManagerId:'',
// //             coachId:'',
// //             countryId:'',
// //             workTimeId:'',
// //             identificationNo:'',
// //             passportNo:'',
// //             employeeBankAccId:'',
// //             workPermitNo:'',
// //             gerder:'',
// //             martialStatus:'',
// //             noOfChildren:'',
// //             homeAddressId:'',
// //             dateOfBirth:'',
// //             placeOfBirth:'',
// //             timeSheetCost:'',
// //             accountId:'',
// //             medicalExam:'',
// //             companyVehicle:'',
// //             homeWorkDistance:'',
// //             relatedUserId:'',
// //             badgeId:'',
// //             pin:'',
// //             manualAttendance:'',
// //
// //             workingAddress:'',
// //             departmentName:'',
// //             emplyeeManagerName:'',
// //             coachName:'',
// //             wokingTimeName:'',
// //             countryname:'',
// //             bankAccNo:'',
// //             homeAddress:'',
// //             accountname:'',
// //             relatedUser:'',
// //
// //
// //             r: true,
// //             t:false,
// //             k:false,
// //             y:false,
// //             p:true,
// //             f:false,
// //             l:false,
// //
// //             u:false,
// //             counter: 0,
// //             m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
// //             message: 'To: Followers of "PO00007: 637.50 Rs."',
// //             v: false,
// //             nextactivity: "Leaves Summary",
// //             btnlinks: {
// //
// //                 importbtnlink:"#/app/imported",
// //                 createbtnlink: "/employees/CreateDepone",// /Employees/HrDepscreate
// //                 editbtnlink:"",
// //                 subordinatebtnlink:"",
// //                 deletebtnlink:"",
// //                 duplicatebtnlink:"",
// //                 leavesSummarybtnlink:"",
// //
// //                 printBadgebtnlink:"",
// //                 cancelbtnlink:"",
// //                 printbtnlink:"",
// //
// //             },
// //             tableheader: [
// //                 "Reference",
// //                 "Destination Location Zone",
// //                 "Partner",
// //                 "Schduled Date",
// //                 "Source Document",
// //                 "Back Order Of",
// //                 "Status",
// //
// //             ],
// //             tabledata: {
// //                 "row": {
// //                     "data": [
// //                         "Chic/In/0004",
// //                         "Chic/Stock",
// //                         "AsusTek",
// //                         "01/28/2017 19:23:00",
// //                         "Chicago Warehouse",
// //                         "Proposition",
// //                         "Available",
// //
// //                     ],
// //                     "url": "/#/app/sales/request_quotation_inner"
// //
// //                 },
// //                 "row1": {
// //                     "data": [
// //                         "Chic/In/0004",
// //                         "Chic/Stock",
// //                         "AsusTek",
// //                         "01/28/2017 19:23:00",
// //                         "Chicago Warehouse",
// //                         "Proposition",
// //                         "Available",
// //
// //                     ],
// //                     "url": "/#/app/sales/request_quotation_inner"
// //
// //                 },
// //                 "row2": {
// //                     "data": [
// //                         "Chic/In/0004",
// //                         "Chic/Stock",
// //                         "AsusTek",
// //                         "01/28/2017 19:23:00",
// //                         "Chicago Warehouse",
// //                         "Proposition",
// //                         "Available",
// //
// //                     ],
// //                     "url": "/#/app/sales/request_quotation_inner"
// //
// //                 },
// //
// //             }
// //
// //         }
// //     },
// //     methods: {
// //
// //         deleteEmplyee: function () {
// //             var self = this;
// //             self.$http.post("/Employees/deleteSelectedEmployee", {"id": self.$route.params.id }).then(function(res){
// //                 alert("Are you sure you want to delete the employee???");
// //                 console.log("this is the id of employee to be deleted =  "+self.$route.params.id);
// //             },function(err){
// //                 //alert(err);
// //             });
// //         },
// //
// //
// //         // submit_inside: function () {
// //         //     var self = this;
// //         //     //alert(self.current_company+ " ");
// //         //     self.$http.post("/Employees/deleteSelectedEmployee", {"id": self.$route.params.id }).then(function(res){
// //         //         console.log(res.body);
// //         //     },function(err){
// //         //         //alert(err);
// //         //     });
// //         // },
// //         select: function () {
// //             var self = this;
// //             self.$http.post("/Employees/selectemployeeinfo", {"id": self.$route.params.id}).then(function (res) {
// //                 var parentdata = res.body.data[0];
// //                 self.employeeName = parentdata.employeename;
// //                 self.workAddressId = parentdata.work_address_id;
// //                 self.workEmail = parentdata.work_email;
// //                 self.workPhone = parentdata.work_phone;
// //                 self.workMobile = parentdata.work_mobile;
// //                 self.workLocation = parentdata.work_location;
// //                 self.departmentId = parentdata.department_id;
// //                 self.jobTitleId = parentdata.job_tittle;
// //                 self.employeeManagerId = parentdata.employee_manager_id;
// //                 self.coachId = parentdata.coach_id;
// //                 self.countryId = parentdata.country_id;
// //                 self.workingTimeId = parentdata.working_time_id;
// //                 self.identificationNo = parentdata.identification_number;
// //                 self.passportNo = parentdata.passport_number;
// //                 self.employeeBankAccId = parentdata.employee_bank_account_id;
// //                 //self.workPermitNo = parentdata.work_permit_no;
// //                 self.gender = parentdata.gender;
// //                 self.maritalStatus = parentdata.maritial_status;
// //                 self.noOfChildren = parentdata.number_of_childern;
// //                 self.homeAddressId = parentdata.home_address_id;
// //                 self.dateOfBirth = parentdata.date_of_birth;
// //                 self.placeOfBirth = parentdata.place_of_birth;
// //                 self.timeSheetCost = parentdata.time_sheet_cost;
// //                 self.accountId = parentdata.account_id;
// //                 self.medicalExam = parentdata.medical_exam;
// //                 self.companyVehicle = parentdata.company_vehicle;
// //                 self.homeWorkDistance = parentdata.home_work_distance;
// //                 self.relatedUserId = parentdata.related_user_id;
// //                 self.badgeId = parentdata.badge_id;
// //                 self.pin = parentdata.pin;
// //                 self.manualAttendance = parentdata.manual_attandance.data[0];
// //
// //                 console.log(parentdata);
// //
// //                 self.$http.post("/Employees/selectworkaddress", {"id":self.workAddressId}).then(function (res) {
// //                     var datas = res.body.data[0];
// //                     self.workingAddress = datas.address;
// //                     self.$http.post("/Employees/selectdepartment", {"id":self.departmentId}).then(function (res) {
// //                         var dept = res.body.data[0];
// //                         self.departmentName = dept.name;
// //                         console.log(dept.name);
// //                         self.$http.post("/Employees/selectjobtitles", {"id":self.jobTitleId}).then(function (res) {
// //                             var dept = res.body.data[0];
// //                             self.jobTitle = dept.job_tittle;
// //                             console.log(dept.job_tittle);
// //                             self.$http.post("/Employees/selectmanager", {"id":self.employeeManagerId}).then(function (res) {
// //                                 var dept = res.body.data[0];
// //                                 self.emplyeeManagerName = dept.employeename;
// //                                 console.log(dept.employeename);
// //                                 self.$http.post("/Employees/selectcoach", {"id":self.coachId}).then(function (res) {
// //                                     var dept = res.body.data[0];
// //                                     self.coachName = dept.employeename;
// //                                     console.log(dept.employeename);
// //                                     self.$http.post("/Employees/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
// //                                         var workSchedule = res.body.data[0];
// //                                         self.wokingTimeName = workSchedule.name;
// //                                         console.log(workSchedule.name );
// //                                         self.$http.post("/Employees/selectcountry", {"id":self.countryId}).then(function (res) {
// //                                             var workSchedule = res.body.data[0];
// //                                             self.countryname = workSchedule.country_name;
// //                                             console.log(workSchedule.country_name );
// //                                             self.$http.post("/Employees/selectbankaccountNo", {"id":self.employeeBankAccId}).then(function (res) {
// //                                                 var workSchedule = res.body.data[0];
// //                                                 self.bankAccNo = workSchedule.account_number;
// //                                                 console.log(workSchedule.account_number );
// //                                                 self.$http.post("/Employees/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
// //                                                     var workSchedule = res.body.data[0];
// //                                                     self.homeAddress = workSchedule.address;
// //                                                     console.log(workSchedule.address );
// //                                                     self.$http.post("/Employees/selectaccount", {"id":self.accountId}).then(function (res) {
// //                                                         var workSchedule = res.body.data[0];
// //                                                         self.accountname = workSchedule.name;
// //                                                         console.log(workSchedule.name );
// //                                                         self.$http.post("/Employees/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
// //                                                             var workSchedule = res.body.data[0];
// //                                                             self.relatedUser = workSchedule.username;
// //                                                             console.log(workSchedule.username );
// //
// //                                                         }, function (err) {
// //
// //                                                         });
// //
// //
// //                                                     }, function (err) {
// //
// //                                                     });
// //                                                 }, function (err) {
// //
// //                                                 });
// //                                             }, function (err) {
// //
// //                                             });
// //                                         }, function (err) {
// //
// //                                         });
// //                                     }, function (err) {
// //
// //                                     });
// //                                 }, function (err) {
// //
// //                                 });
// //                             }, function (err) {
// //
// //                             });
// //                         }, function (err) {
// //
// //                         });
// //
// //                     }, function (err) {
// //
// //                     });
// //                 }, function (err) {
// //
// //                 });
// //             }, function (err) {
// //
// //             });
// //
// //         },
// //     },
// //
// //     components: {
// //         Emptyform,
// //         Tabs,
// //         Modal,
// //         ModelDescription,
// //         Componame,
// //         DashboardController,
// //         Tableview,
// //         Editing,
// //         Request_quotation_lower,
// //         Message,
// //
// //
// //
// //
// //     }
// //
// // }
// //
// //
// // // import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
// // // import Tabs from "./../../partials/Tabs/Tabs.vue"
// // // import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
// // // import Componame from "./../../partials/Componame/Componame.vue"
// // // import Tableview from "./../../partials/Tableview/Tableview.vue"
// // // import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// // // import Editing from "./../../partials/Editing/Editing.vue"
// // // import Modal from "./../../partials/Modal/Modal.vue"
// // // import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
// // // import Message from "./../../partials/Message/Message.vue"
// // //
// // // export default{
// // //     created: function () {
// // //         var self = this;
// // //         self.select();
// // //         self.btnlinks.editbtnlink = "/attendance/HrEditone/"+self.$route.params.id;
// // //         self.btnlinks.duplicatebtnlink = "/Employees/HrDuplicate/"+self.$route.params.id;
// // //         self.btnlinks.printBadgebtnlink = "/Employees/Badge/"+self.$route.params.id;
// // //
// // //
// // //         $(function(){
// // //             $(".delete").click(function () {
// // //                 alert("calling delete operation!!!");
// // //                 self.deleteEmplyee();
// // //             });
// // //
// // //             $("#leavesSummary").click(function () {
// // //                 $(".bd-example-modal-lg1").modal('show');
// // //             });
// // //             // $(".workingTimeDropdown").on('change',function() {
// // //             //     var value = $(this).val();
// // //             //     if (value == "Create and Edit...") {
// // //             //         $(".bd-example-modal-lg100").modal('show');
// // //             //     }
// // //             // });
// // //
// // //             // $("#delete").click(function () {
// // //             //     self.submit_inside();
// // //             //     alert("are you sure delete the user");
// // //             //     window.location.href = "../users";
// // //             // });
// // //
// // //
// // //             $(".colorbg").on("click", function (e) {
// // //                 e.preventDefault();
// // //                 var col = $(this).css("backgroundColor");
// // //                 var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
// // //                 anch.css({"backgroundColor":col});
// // //             });
// // //             $(document).ready(function(){
// // //                 $(".btn.btn-success.b").click(function(){
// // //                     $("#panel").slideToggle("slow");
// // //                 });
// // //             });
// // //
// // //             $('.samobuttopcontroller2').off('click');
// // //             $('.samobuttopcontroller2').on('click', function () {
// // //                 let check = $('#edit1').css("display");
// // //                 if(check == "none"){
// // //                     $('#edit1').show();
// // //                     $('#main1').hide();
// // //                 }else{
// // //                     $('#edit1').hide();
// // //                     $('#main1').show();
// // //                 }
// // //
// // //             });
// // //
// // //
// // //             var oldtext;
// // //             $('.note.btn.btn-primary').hover(function(){
// // //                 oldtext = $(this).text();
// // //                 $(this).text("Unfollow");
// // //             }, function(){
// // //                 $(this).text(oldtext)
// // //             });
// // //             $(document).ready(function () {
// // //                 var d = new Date();
// // //                 var hour    = d.getHours();
// // //                 var minute  = d.getMinutes();
// // //                 var second  = d.getSeconds();
// // //                 var time = hour+":"+minute+":"+second;
// // //                 $("#demo").html(time);
// // //             });
// // //
// // //             $('#datepicker7').datepicker({
// // //                 format: "dd.mm.yyyy",
// // //                 todayBtn: "linked",
// // //                 language: "de",
// // //                 daysOfWeekDisabled: "0,6",
// // //                 daysOfWeekHighlighted: "4",
// // //                 todayHighlight: true,
// // //             }).on('changeDate',showTestDate);
// // //
// // //             $('#datepicker8').datepicker({
// // //                 format: "dd.mm.yyyy",
// // //                 todayBtn: "linked",
// // //                 language: "de",
// // //                 daysOfWeekDisabled: "0,6",
// // //                 daysOfWeekHighlighted: "4",
// // //                 todayHighlight: true,
// // //             }).on('changeDate',showTestDate);
// // //
// // //             function showTestDate() {
// // //                 var value = $('#datepicker8').datepicker('getFormattedDate');
// // //                 self.dates_value8 = value;
// // //                 var value1 = $('#datepicker7').datepicker('getFormattedDate');
// // //                 self.dates_value7 = value1;
// // //
// // //             };
// // //
// // //
// // //         });
// // //
// // //     },
// // //     data(){
// // //         return {
// // //             employeename:'',
// // //             workaddressId:'',
// // //             workEmail:'',
// // //             workPhone:'',
// // //             workMobile:'',
// // //             workLocation:'',
// // //             departmentId:'',
// // //             jobTitle:'',
// // //             jobTitleId:'',
// // //             employeeManagerId:'',
// // //             coachId:'',
// // //             countryId:'',
// // //             workTimeId:'',
// // //             identificationNo:'',
// // //             passportNo:'',
// // //             employeeBankAccId:'',
// // //             workPermitNo:'',
// // //             gerder:'',
// // //             martialStatus:'',
// // //             noOfChildren:'',
// // //             homeAddressId:'',
// // //             dateOfBirth:'',
// // //             placeOfBirth:'',
// // //             timeSheetCost:'',
// // //             accountId:'',
// // //             medicalExam:'',
// // //             companyVehicle:'',
// // //             homeWorkDistance:'',
// // //             relatedUserId:'',
// // //             badgeId:'',
// // //             pin:'',
// // //             manualAttendance:'',
// // //
// // //             workingAddress:'',
// // //             departmentName:'',
// // //             emplyeeManagerName:'',
// // //             coachName:'',
// // //             wokingTimeName:'',
// // //             countryname:'',
// // //             bankAccNo:'',
// // //             homeAddress:'',
// // //             accountname:'',
// // //             relatedUser:'',
// // //
// // //
// // //             r: true,
// // //             t:false,
// // //             k:false,
// // //             y:false,
// // //             p:true,
// // //             f:false,
// // //             l:false,
// // //
// // //             u:false,
// // //             counter: 0,
// // //             m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
// // //             message: 'To: Followers of "PO00007: 637.50 Rs."',
// // //             v: false,
// // //             nextactivity: "Leaves Summary",
// // //             btnlinks: {
// // //
// // //                 importbtnlink:"#/app/imported",
// // //                 createbtnlink: "/attendance/Createemp",// /Employees/HrDepscreate
// // //                 editbtnlink:"",
// // //                 subordinatebtnlink:"",
// // //                 leavesSummarybtnlink:"",
// // //                 printBadgebtnlink:"",
// // //                 cancelbtnlink:"",
// // //                 printbtnlink:"",
// // //                 deletedropbtnlink:"",
// // //                 duplicatebtnlink:"",
// // //
// // //             },
// // //             tableheader: [
// // //                 "Reference",
// // //                 "Destination Location Zone",
// // //                 "Partner",
// // //                 "Schduled Date",
// // //                 "Source Document",
// // //                 "Back Order Of",
// // //                 "Status",
// // //
// // //             ],
// // //             tabledata: {
// // //                 "row": {
// // //                     "data": [
// // //                         "Chic/In/0004",
// // //                         "Chic/Stock",
// // //                         "AsusTek",
// // //                         "01/28/2017 19:23:00",
// // //                         "Chicago Warehouse",
// // //                         "Proposition",
// // //                         "Available",
// // //
// // //                     ],
// // //                     "url": "/#/app/sales/request_quotation_inner"
// // //
// // //                 },
// // //                 "row1": {
// // //                     "data": [
// // //                         "Chic/In/0004",
// // //                         "Chic/Stock",
// // //                         "AsusTek",
// // //                         "01/28/2017 19:23:00",
// // //                         "Chicago Warehouse",
// // //                         "Proposition",
// // //                         "Available",
// // //
// // //                     ],
// // //                     "url": "/#/app/sales/request_quotation_inner"
// // //
// // //                 },
// // //                 "row2": {
// // //                     "data": [
// // //                         "Chic/In/0004",
// // //                         "Chic/Stock",
// // //                         "AsusTek",
// // //                         "01/28/2017 19:23:00",
// // //                         "Chicago Warehouse",
// // //                         "Proposition",
// // //                         "Available",
// // //
// // //                     ],
// // //                     "url": "/#/app/sales/request_quotation_inner"
// // //
// // //                 },
// // //
// // //             }
// // //
// // //         }
// // //     },
// // //     methods: {
// // //
// // //         deleteEmplyee: function () {
// // //             var self = this;
// // //             self.$http.post("/recruitment/deleteSelectedEmployee", {"id": self.$route.params.id }).then(function(res){
// // //                 alert("Are you sure you want to delete the employee???");
// // //                 console.log("this is the id of employee to be deleted =  "+self.$route.params.id);
// // //             },function(err){
// // //                 //alert(err);
// // //             });
// // //         },
// // //
// // //
// // //         // submit_inside: function () {
// // //         //     var self = this;
// // //         //     //alert(self.current_company+ " ");
// // //         //     self.$http.post("/Employees/deleteSelectedEmployee", {"id": self.$route.params.id }).then(function(res){
// // //         //         console.log(res.body);
// // //         //     },function(err){
// // //         //         //alert(err);
// // //         //     });
// // //         // },
// // //         select: function () {
// // //             var self = this;
// // //             self.$http.post("/recruitment/selectemployeeinfo", {"id": self.$route.params.id}).then(function (res) {
// // //                 var parentdata = res.body.data[0];
// // //                 self.employeeName = parentdata.employeename;
// // //                 self.workAddressId = parentdata.work_address_id;
// // //                 self.workEmail = parentdata.work_email;
// // //                 self.workPhone = parentdata.work_phone;
// // //                 self.workMobile = parentdata.work_mobile;
// // //                 self.workLocation = parentdata.work_location;
// // //                 self.departmentId = parentdata.department_id;
// // //                 self.jobTitleId = parentdata.job_tittle;
// // //                 self.employeeManagerId = parentdata.employee_manager_id;
// // //                 self.coachId = parentdata.coach_id;
// // //                 self.countryId = parentdata.country_id;
// // //                 self.workingTimeId = parentdata.working_time_id;
// // //                 self.identificationNo = parentdata.identification_number;
// // //                 self.passportNo = parentdata.passport_number;
// // //                 self.employeeBankAccId = parentdata.employee_bank_account_id;
// // //                 //self.workPermitNo = parentdata.work_permit_no;
// // //                 self.gender = parentdata.gender;
// // //                 self.maritalStatus = parentdata.maritial_status;
// // //                 self.noOfChildren = parentdata.number_of_childern;
// // //                 self.homeAddressId = parentdata.home_address_id;
// // //                 self.dateOfBirth = parentdata.date_of_birth;
// // //                 self.placeOfBirth = parentdata.place_of_birth;
// // //                 self.timeSheetCost = parentdata.time_sheet_cost;
// // //                 self.accountId = parentdata.account_id;
// // //                 self.medicalExam = parentdata.medical_exam;
// // //                 self.companyVehicle = parentdata.company_vehicle;
// // //                 self.homeWorkDistance = parentdata.home_work_distance;
// // //                 self.relatedUserId = parentdata.related_user_id;
// // //                 self.badgeId = parentdata.badge_id;
// // //                 self.pin = parentdata.pin;
// // //                 self.manualAttendance = parentdata.manual_attandance.data[0];
// // //
// // //                 console.log(parentdata);
// // //
// // //                 self.$http.post("/recruitment/selectworkaddress", {"id":self.workAddressId}).then(function (res) {
// // //                     var datas = res.body.data[0];
// // //                     self.workingAddress = datas.address;
// // //                     self.$http.post("/recruitment/selectdepartment", {"id":self.departmentId}).then(function (res) {
// // //                         var dept = res.body.data[0];
// // //                         self.departmentName = dept.name;
// // //                         console.log(dept.name);
// // //                         self.$http.post("/recruitment/selectjobtitles", {"id":self.jobTitleId}).then(function (res) {
// // //                             var dept = res.body.data[0];
// // //                             self.jobTitle = dept.job_tittle;
// // //                             console.log(dept.job_tittle);
// // //                             self.$http.post("/recruitment/selectmanager", {"id":self.employeeManagerId}).then(function (res) {
// // //                                 var dept = res.body.data[0];
// // //                                 self.emplyeeManagerName = dept.employeename;
// // //                                 console.log(dept.employeename);
// // //                                 self.$http.post("/recruitment/selectcoach", {"id":self.coachId}).then(function (res) {
// // //                                     var dept = res.body.data[0];
// // //                                     self.coachName = dept.employeename;
// // //                                     console.log(dept.employeename);
// // //                                     self.$http.post("/recruitment/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
// // //                                         var workSchedule = res.body.data[0];
// // //                                         self.wokingTimeName = workSchedule.name;
// // //                                         console.log(workSchedule.name );
// // //                                         self.$http.post("/recruitment/selectcountry", {"id":self.countryId}).then(function (res) {
// // //                                             var workSchedule = res.body.data[0];
// // //                                             self.countryname = workSchedule.country_name;
// // //                                             console.log(workSchedule.country_name );
// // //                                             self.$http.post("/recruitment/selectbankaccountNo", {"id":self.employeeBankAccId}).then(function (res) {
// // //                                                 var workSchedule = res.body.data[0];
// // //                                                 self.bankAccNo = workSchedule.account_number;
// // //                                                 console.log(workSchedule.account_number );
// // //                                                 self.$http.post("/recruitment/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
// // //                                                     var workSchedule = res.body.data[0];
// // //                                                     self.homeAddress = workSchedule.address;
// // //                                                     console.log(workSchedule.address );
// // //                                                     self.$http.post("/recruitment/selectaccount", {"id":self.accountId}).then(function (res) {
// // //                                                         var workSchedule = res.body.data[0];
// // //                                                         self.accountname = workSchedule.name;
// // //                                                         console.log(workSchedule.name );
// // //                                                         self.$http.post("/recruitment/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
// // //                                                             var workSchedule = res.body.data[0];
// // //                                                             self.relatedUser = workSchedule.username;
// // //                                                             console.log(workSchedule.username );
// // //
// // //                                                         }, function (err) {
// // //
// // //                                                         });
// // //
// // //
// // //                                                     }, function (err) {
// // //
// // //                                                     });
// // //                                                 }, function (err) {
// // //
// // //                                                 });
// // //                                             }, function (err) {
// // //
// // //                                             });
// // //                                         }, function (err) {
// // //
// // //                                         });
// // //                                     }, function (err) {
// // //
// // //                                     });
// // //                                 }, function (err) {
// // //
// // //                                 });
// // //                             }, function (err) {
// // //
// // //                             });
// // //                         }, function (err) {
// // //
// // //                         });
// // //
// // //                     }, function (err) {
// // //
// // //                     });
// // //                 }, function (err) {
// // //
// // //                 });
// // //             }, function (err) {
// // //
// // //             });
// // //
// // //         },
// // //     },
// // //
// // //     components: {
// // //         Emptyform,
// // //         Tabs,
// // //         Modal,
// // //         ModelDescription,
// // //         Componame,
// // //         DashboardController,
// // //         Tableview,
// // //         Editing,
// // //         Request_quotation_lower,
// // //         Message,
// // //
// // //
// // //
// // //
// // //     }
// // //
// // // }
