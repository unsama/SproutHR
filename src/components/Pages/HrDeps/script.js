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

        self.btnlinks.editbtnlink = "/Employees/HrDepsEdit/"+self.$route.params.id;
        self.btnlinks.duplicatebtnlink = "/Employees/HrDuplicate/"+self.$route.params.id;
        self.btnlinks.printBadgebtnlink = "/Employees/Badge/"+self.$route.params.id;


        $(function(){
            $(document).ready(function() {
                var hideBtn, showBtn;
                if (self.activeArchive == 'Active') {
                    showBtn = 'Active';
                    hideBtn = 'Archive';
                } else {
                    showBtn = 'Archive';
                    hideBtn = 'Active';
                }
                document.getElementById(hideBtn).style.display = 'none';
                document.getElementById(showBtn).style.display = '';

            });
            $("#num01").click(function () {
                self.nextsubmit();
            });
            $("#num10").click(function () {
                self.backsubmit();
            });
            $("#delete").click(function () {
                self.deleteEmplyee();
                window.location.href = "/Employees/";
            });

            $("#leavesSummary").click(function () {
                $(".bd-example-modal-lg1").modal('show');
            });
            $("#export").click(function () {
                self.btnlinks.subordinatebtnlink = "/Employees/hierarchy/"+self.$route.params.id;
            });

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
            num:'',
            activeArchive:'',
            employeename:'',
            employeeContracts:'',
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
                createbtnlink: "/employees/CreateDepone",// /Employees/HrDepscreate
                editbtnlink:"",
                subordinatebtnlink:"",
                deletebtnlink:"",
                duplicatebtnlink:"",
                leavesSummarybtnlink:"",

                printBadgebtnlink:"",
                cancelbtnlink:"",
                printbtnlink:"",

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
        SwitchButtons: function(buttonId) {
            var self = this;
            self.activeArchive = buttonId;
            alert(self.activeArchive);
            self.$http.post("/Employees/editActiveArchive", {
                "id": self.$route.params.id,
                "status": self.activeArchive,
            }).then(function (res) {
            }, function (err) {
            });
            var hideBtn, showBtn;
            if (buttonId == 'Active') {
                showBtn = 'Archive';
                hideBtn = 'Active';
            } else {
                showBtn = 'Active';
                hideBtn = 'Archive';
            }
            document.getElementById(hideBtn).style.display = 'none';
            document.getElementById(showBtn).style.display = '';
        },
        backsubmit: function () {
            var self = this;
            self.$http.post("/Employees/selectemployeeinfoForFormBack", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.$route.params.id = parentdata.id;

                self.employeeName = parentdata.employeename;
                self.workingAddressId = parentdata.workAddress;
                self.workEmail = parentdata.work_email;
                self.workPhone = parentdata.work_phone;
                self.workMobile = parentdata.work_mobile;
                self.workLocation = parentdata.work_location;
                self.departmentId = parentdata.deptName;
                self.jobtitleId = parentdata.job_tittle;
                self.managerId = parentdata.employee_manager_id;
                self.coachId = parentdata.coach_id;
                self.countryId = parentdata.country_id;
                self.workingTimeId = parentdata.working_time_id;
                self.identificationNo = parentdata.identification_number;
                self.passportNo = parentdata.passport_number;
                self.BankAccountNumbersId = parentdata.employee_bank_account_id;
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

                self.$http.post("/Employees/countEmployeeContracts", {"empid":parentdata.id}).then(function (res) {
                    var datas = res.body.data[0];
                    self.employeeContracts = datas.countEmpContracts;
                self.$http.post("/Employees/selectworkaddress", {"id":self.workingAddressId}).then(function (res) {
                        var datas = res.body.data[0];
                        self.workingAddress = datas.address;
                self.$http.post("/Employees/selectdepartment", {"id":self.departmentId}).then(function (res) {
                    var dept = res.body.data[0];
                    self.departmentName = dept.name;
                    console.log(dept.name);
                self.$http.post("/Employees/selectjobtitles", {"id":self.jobtitleId}).then(function (res) {
                    var dept = res.body.data[0];
                    self.jobTitle = dept.job_tittle;
                    console.log(dept.job_tittle);
                self.$http.post("/Employees/selectmanager", {"id":self.managerId}).then(function (res) {
                    var dept = res.body.data[0];
                    self.emplyeeManagerName = dept.employeename;
                    console.log(dept.employeename);
                self.$http.post("/Employees/selectcoach", {"id":self.coachId}).then(function (res) {
                    var dept = res.body.data[0];
                    self.coachName = dept.employeename;
                    console.log(dept.employeename);
                self.$http.post("/Employees/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
                    var workSchedule = res.body.data[0];
                    self.wokingTimeName = workSchedule.name;
                    console.log(workSchedule.name );
                self.$http.post("/Employees/selectcountry", {"id":self.countryId}).then(function (res) {
                    var workSchedule = res.body.data[0];
                    self.countryname = workSchedule.country_name;
                    console.log(workSchedule.country_name );
                self.$http.post("/Employees/selectbankaccountNo", {"id":self.BankAccountNumbersId}).then(function (res) {
                    var workSchedule = res.body.data[0];
                    self.bankAccNo = workSchedule.account_number;
                    console.log(workSchedule.account_number );
                self.$http.post("/Employees/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
                    var workSchedule = res.body.data[0];
                    self.homeAddress = workSchedule.address;
                    console.log(workSchedule.address );
                self.$http.post("/Employees/selectaccount", {"id":self.accountId}).then(function (res) {
                    var workSchedule = res.body.data[0];
                    self.accountname = workSchedule.name;
                    console.log(workSchedule.name );
                self.$http.post("/Employees/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
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

            }, function (err) {

            });
        },
        nextsubmit: function () {
            var self = this;
            self.$http.post("/Employees/selectemployeeinfoForFormNext", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.$route.params.id = parentdata.id;
                self.employeeName = parentdata.employeename;
                self.workingAddressId = parentdata.workAddress;
                self.workEmail = parentdata.work_email;
                self.workPhone = parentdata.work_phone;
                self.workMobile = parentdata.work_mobile;
                self.workLocation = parentdata.work_location;
                self.departmentId = parentdata.deptName;
                self.jobtitleId = parentdata.job_tittle;
                self.managerId = parentdata.employee_manager_id;
                self.coachId = parentdata.coach_id;
                self.countryId = parentdata.country_id;
                self.workingTimeId = parentdata.working_time_id;
                self.identificationNo = parentdata.identification_number;
                self.passportNo = parentdata.passport_number;
                self.BankAccountNumbersId = parentdata.employee_bank_account_id;
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

                self.$http.post("/Employees/countEmployeeContracts", {"id":parentdata.id}).then(function (res) {
                    var datas = res.body.data[0];
                    self.employeeContracts = datas.countEmpContracts;
                self.$http.post("/Employees/selectworkaddress", {"id":self.workingAddressId}).then(function (res) {
                    var datas = res.body.data[0];
                    self.workingAddress = datas.address;
                    self.$http.post("/Employees/selectdepartment", {"id":self.departmentId}).then(function (res) {
                        var dept = res.body.data[0];
                        self.departmentName = dept.name;
                        console.log(dept.name);
                        self.$http.post("/Employees/selectjobtitles", {"id":self.jobtitleId}).then(function (res) {
                            var dept = res.body.data[0];
                            self.jobTitle = dept.job_tittle;
                            console.log(dept.job_tittle);
                            self.$http.post("/Employees/selectmanager", {"id":self.managerId}).then(function (res) {
                                var dept = res.body.data[0];
                                self.emplyeeManagerName = dept.employeename;
                                console.log(dept.employeename);
                                self.$http.post("/Employees/selectcoach", {"id":self.coachId}).then(function (res) {
                                    var dept = res.body.data[0];
                                    self.coachName = dept.employeename;
                                    console.log(dept.employeename);
                                    self.$http.post("/Employees/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
                                        var workSchedule = res.body.data[0];
                                        self.wokingTimeName = workSchedule.name;
                                        console.log(workSchedule.name );
                                        self.$http.post("/Employees/selectcountry", {"id":self.countryId}).then(function (res) {
                                            var workSchedule = res.body.data[0];
                                            self.countryname = workSchedule.country_name;
                                            console.log(workSchedule.country_name );
                                            self.$http.post("/Employees/selectbankaccountNo", {"id":self.BankAccountNumbersId}).then(function (res) {
                                                var workSchedule = res.body.data[0];
                                                self.bankAccNo = workSchedule.account_number;
                                                console.log(workSchedule.account_number );
                                                self.$http.post("/Employees/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
                                                    var workSchedule = res.body.data[0];
                                                    self.homeAddress = workSchedule.address;
                                                    console.log(workSchedule.address );
                                                    self.$http.post("/Employees/selectaccount", {"id":self.accountId}).then(function (res) {
                                                        var workSchedule = res.body.data[0];
                                                        self.accountname = workSchedule.name;
                                                        console.log(workSchedule.name );
                                                        self.$http.post("/Employees/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
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

            }, function (err) {

            });
        },
        deleteEmplyee: function () {
            var self = this;
            self.$http.post("/Employees/deleteSelectedEmployee", {"id": self.$route.params.id }).then(function(res){
                alert("Are you sure you want to delete the employee???");
            },function(err){
                //alert(err);
            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/Employees/countEmployees", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                //console.log(this.$route.query.id);
            }, function (err) {

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/Employees/selectemployeeinfo", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.employeeName = parentdata.employeename;
                self.workingAddress = parentdata.workAddress;
                self.workEmail = parentdata.work_email;
                self.workPhone = parentdata.work_phone;
                self.workMobile = parentdata.work_mobile;
                self.workLocation = parentdata.work_location;
                self.departmentName = parentdata.deptName;
                self.jobTitle = parentdata.job_tittle;
                self.emplyeeManagerName = parentdata.empManager;
                self.coachName = parentdata.empCoach;
                self.countryname = parentdata.country_name;
                self.wokingTimeName = parentdata.workingTime;
                self.identificationNo = parentdata.identification_number;
                self.passportNo = parentdata.passport_number;
                self.bankAccNo = parentdata.bankAccNo;
                self.gender = parentdata.gender;
                self.maritalStatus = parentdata.maritial_status;
                self.noOfChildren = parentdata.number_of_childern;
                self.homeAddress = parentdata.homeAddress;
                self.dateOfBirth = parentdata.date_of_birth;
                self.placeOfBirth = parentdata.place_of_birth;
                self.timeSheetCost = parentdata.time_sheet_cost;
                self.accountname = parentdata.AccName;
                self.medicalExam = parentdata.medical_exam;
                self.companyVehicle = parentdata.company_vehicle;
                self.homeWorkDistance = parentdata.home_work_distance;
                self.relatedUser = parentdata.username;
                self.badgeId = parentdata.badge_id;
                self.pin = parentdata.pin;
                self.activeArchive = parentdata.ActiveAcrchive;
                self.manualAttendance = parentdata.manual_attandance.data[0];
                self.$http.post("/Employees/countEmployeeContracts", {"empid":parentdata.ID}).then(function (res) {
                    var datas = res.body.data[0];
                    self.employeeContracts = datas.countEmpContracts;
            }, function (err) {

            });
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




    },

}
