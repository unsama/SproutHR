import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Message from "./../../partials/Message/Message.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        var self = this;
        self.select();
        self.select1();

        $(function () {
            $("select#o_field_input_611 option").each(function(){
                if($(this).val()==self.gender){
                    $(this).attr("selected","selected");
                }
            });

            $("select#o_field_input_612 option").each(function(){
                if($(this).val()==self.maritalStatus){
                    $(this).attr("selected","selected");
                }
            });
            $("select#o_field_input_595 option").each(function(){
                if($(this).val()==self.workingAddressId){
                    $(this).attr("selected","selected");
                }
            });
            $("select#o_field_input_601 option").each(function(){
                if($(this).val()==self.jobtitleId){
                    $(this).attr("selected","selected");
                }
            });
            $("#saveclose").click(function () {
                alert("saveclose");
                self.updateDepart();
            });

            $("#save").click(function () {
                self.submit();
                window.location.href = "/employees/NewDep/"+self.departmentId;    ///employees/NewDep/394
                //self.$route.params.id /employees/Gridtwo
            });
            $("#num01").click(function () {
                self.nextsubmit();
                self.select3();
            });
            $("#num10").click(function () {
                self.backsubmit();
            });

            self.$watch('managerId', function (val) {
                self.managers.forEach(function (row) {
                    if (row.employeename === val) {
                        self.managerId = row.id;
                    }
                });
            });

            $(".deptdropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg1").modal('show');
                }
            });
            $(".jobTitledropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg3").modal('show');
                }
            });
            $(".bankAccDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg62").modal('show');
                }
            });
            $(".mgrDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg61").modal('show');
                }
            });
            $(".coachDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg61").modal('show');
                }
            });
            $(".workingAddressDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg6").modal('show');
                }
            });
            $(".homeAddressDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg6").modal('show');
                }
            });
            $(".relatedUserDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg5").modal('show');
                }
            });
            $(".accDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg10").modal('show');
                }
            });
            $(".workingTimeDropdown").on('change',function() {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg100").modal('show');
                }
            });



            $('#datepicker6').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);
            $('#datepicker7').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            function showTestDate() {
                var value = $('#datepicker6').datepicker('getFormattedDate');
                self.birthDate = value;
                var value1 = $('#datepicker7').datepicker('getFormattedDate');
                self.medicalExamDate = value1;

            };


        });
    },
    data() {
        return {
            managers1:'',
            managerId1:'',
            departnents1:'',
            departmentId1:'',
            departName: '',


            birthDate:'',
            medicalExamDate:'',
            employeeName: '',
            workingAddresses: '',
            workingAddressId: '',
            departnents: '',
            departmentId: '',
            jobTitles: '',
            jobtitleId: '',
            managers: '',
            managerId: '',
            coachs: '',
            coachId: '',
            workingTimes: '',
            workingTimeId: '',
            workMobile: '',
            workLocation: '',
            workEmail: '',
            workPhone: '',
            identificationNo: '',
            passportNo: '',


            countries: '',
            countryId: '',
            BankAccountNumbers: '',
            BankAccountNumbersId: '',
            homeAddresses: '',
            homeAddressId: '',
            gender: '',
            maritalStatus: '',
            noOfChildren: '',
            placeOfBirth: '',
            timeSheetCost: '',

            accounts: '',
            accountId: '',
            companies: '',
            companyId: '',
            relatedUsers: '',
            relatedUserId: '',
            badgeId: '',
            pin: '',
            manualAttendance: '',
            companyVehicle: '',
            HomeDistance: '',
            counter: 1,
            num: '',
            nextactivity: "Next ActivitiesNeed / to customize the solution",
            modal2: "Open: Department",
            modal3: "Open: Job Title",
            modal4: "Open: Currency",
            modal5: "Open: Recruitment Responsible",
            modal6: "Open: Job Location",
            modal7: "Create: Contacts",
            modal8: "Open: Title",
            modal9: "Open: Account Receivable",
            modal10: "Open: Account Payable",
            modal11: "Open: Working Address",
            modal12: "Warning",
            modal50: "Open:Manager",
            modal60: "Open:Manager",
            modal61: "Open:Manager",
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomeredit",
                savebtnlink: "",
                discardbtnlink: "/employees/",
                importbtnlink: "#/app/imported"
            },

            tableheader: [
                " Name",
                " Day of Week",
                " Work from",
                " Work to",
                " Starting Date",
                " End Date",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "contract",
                        "Hassan",
                        "Employee",
                        "Developer",
                        "3/1/12",
                        "3/1/12",
                    ],


                },

            },
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",



            ],
            tableheader2: [
                " Reason",
                " Resource",
                " Working Time",
                " Start Date",
                " End Date",


            ],
            tabledata2: {
                "row": {
                    "data": [
                        "contract",
                        "Hassan",
                        "Employee",
                        "3/1/12",
                        "3/1/12",
                    ],


                },

            },
            tablefooter2:[
                "",
                "",
                "",
                "",
                "",
                "",



            ],
        }
    },

    methods: {

        editEmployee: function(){
            var self = this;
            self.$http.post("/employees/editEmployee",{


            });
        },

        updateDepart: function () {
            var self = this;
            self.$http.post("/employees/addNewDepartment", {
                "departName": self.departName,"parentDeptId":self.parentDeptId, "managerId":self.managerId
            }).then(function(res){
                //console.log(res.body);
            },function(err){

            });

        },


        SelectContactInfo: function () {
            var value = $(this).val();
            console(value);
            if (!(value == "Create and Edit..." || value == "Search More..." || value=="undefined")) {


                var self = this;
                self.$http.post("/Employees/fetchContactInformationOfEmployee", {
                    "workingAddressId": self.workingAddressId,
                }).then(function (res) {
                    var contactInfo = res.body.data[0];
                    self.workMobile = contactInfo.work_mobile;
                    //self.workLocation = contactInfo.name;
                    self.workEmail = contactInfo.work_email;
                    self.workPhone = contactInfo.work_phone;

                }, function (err) {
                    // alert(err);
                });

            }
        },

        selectDepartManagerHussain: function () {
            var value = $(this).val();
            var self = this;
            if (value == "Create and Edit..." || value == "Search More..." ) {

                //alert("Inside Method selectDepartManagerHussain(): departmentId  =  "+ self.departmentId);
                self.$http.post("/Employees/fetchDeptManager", {
                    "departmentId": self.departmentId,

                }).then(function (res) {
                    var deptManager = res.body.result[0];

                    console.log(deptManager);
                    self.managerId = deptManager.employeename;
                    console.log(self.managerId);

                }, function (err) {
                    alert(err);
                });
            }

        },


        select: function () {
            var self = this;
            self.$http.post("/employees/fetchWorkingAddresses", {"workingAddress": self.address}).then(function (res) {
                self.workingAddresses = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchDepartments", {"deptName": self.name}).then(function (res) {
                self.departnents = res.body.result;
            }, function (err) {
                // alert(err);
            });
            self.$http.post("/employees/fetchDepartments1", {"deptName": self.name}).then(function (res) {
                self.departnents1 = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/employees/fetchJobtitles", {"jobTitle_name": self.job_title}).then(function (res) {
                self.jobTitles = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/employees/fetchManagers", {"managerName": self.employeename}).then(function (res) {
                self.managers = res.body.result;
            }, function (err) {
                //alert(err);
            });
            self.$http.post("/employees/fetchManagers1", {"managerName": self.employeename}).then(function (res) {
                self.managers1 = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchCoachs", {"coach_name": self.employeename}).then(function (res) {
                self.coachs = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/employees/fetchWorkingTimeNames", {"workingTime": self.name}).then(function (res) {
                self.workingScedules = res.body.result;
            }, function (err) {
                // alert(err);
            });

            // self.$http.post("/employees/fetchmanager", {"manager_name": self.employeename	}).then(function(res){self.emp_table =res.body.result;},function(err){
            //     //alert(err);
            // });


            self.$http.post("/employees/fetchHomeAddresses", {"HomeAddress": self.name}).then(function (res) {
                self.homeAddresses = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/FetchBankAccountNumbers", {"AccNo": self.account_number}).then(function (res) {
                self.BankAccountNumbers = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchCountries", {"countryName": self.country}).then(function (res) {
                self.countries = res.body.result;
            }, function (err) {
                //alert(err);
            });
            //acoountTable
            self.$http.post("/employees/fetchAccounts", {"accName": self.name}).then(function (res) {
                self.accounts = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchCompanies", {"companyName": self.company_name}).then(function (res) {
                self.companies = res.body.result;
            }, function (err) {
            });

            self.$http.post("/employees/fetchRelatedUsers", {"relatedUser": self.username}).then(function (res) {
                self.relatedUsers = res.body.result;
            }, function (err) {
                //alert(err);
            });
            self.$http.post("/Employees/selectemployeeinfoNotforForm", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.employeeName = parentdata.employeename;
                self.workingAddressId = parentdata.work_address_id;
                self.workEmail = parentdata.work_email;
                self.workPhone = parentdata.work_phone;
                self.workMobile = parentdata.work_mobile;
                self.workLocation = parentdata.work_location;
                self.departmentId = parentdata.department_id;
                self.jobtitleId = parentdata.job_tittle;
                self.managerId = parentdata.employee_manager_id;
                self.coachId = parentdata.coach_id;
                self.countryId = parentdata.country_id;
                self.workingTimeId = parentdata.working_time_id;
                self.identificationNo = parentdata.identification_number;
                self.passportNo = parentdata.passport_number;
                self.BankAccountNumbersId = parentdata.employee_bank_account_id;
                //self.workPermitNo = parentdata.work_permit_no;
                self.gender = parentdata.gender;
                self.maritalStatus = parentdata.maritial_status;
                self.noOfChildren = parentdata.number_of_childern;
                self.homeAddressId = parentdata.home_address_id;
                self.birthDate = parentdata.date_of_birth;
                self.placeOfBirth = parentdata.place_of_birth;
                self.timeSheetCost = parentdata.time_sheet_cost;
                self.accountId = parentdata.account_id;
                self.medicalExamDate = parentdata.medical_exam;
                self.companyVehicle = parentdata.company_vehicle;
                self.HomeDistance = parentdata.home_work_distance;
                self.relatedUserId = parentdata.related_user_id;
                self.badgeId = parentdata.badge_id;
                self.pin = parentdata.pin;
                self.manualAttendance = parentdata.manual_attandance.data[0];

            }, function (err) {

            });


        },
        nextsubmit: function () {
            var self = this;
            self.$http.post("/Employees/selectemployeeinfoForFormNext", {"id": self.$route.params.id}).then(function (res) {
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

                self.$http.post("/Employees/selectworkaddress", {"id":self.workAddressId}).then(function (res) {
                    var datas = res.body.data[0];
                    self.workingAddress = datas.address;
                    self.$http.post("/Employees/selectdepartment", {"id":self.departmentId}).then(function (res) {
                        var dept = res.body.data[0];
                        self.departmentName = dept.name;
                        console.log(dept.name);
                        self.$http.post("/Employees/selectjobtitles", {"id":self.jobTitleId}).then(function (res) {
                            var dept = res.body.data[0];
                            self.jobTitle = dept.job_tittle;
                            console.log(dept.job_tittle);
                            self.$http.post("/Employees/selectmanager", {"id":self.employeeManagerId}).then(function (res) {
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
                                            self.$http.post("/Employees/selectbankaccountNo", {"id":self.employeeBankAccId}).then(function (res) {
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




        },
        backsubmit: function () {
            var self = this;
            self.$http.post("/Employees/selectemployeeinfoForFormBack", {"id": self.$route.params.id}).then(function (res) {
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

                self.$http.post("/Employees/selectworkaddress", {"id":self.workAddressId}).then(function (res) {
                    var datas = res.body.data[0];
                    self.workingAddress = datas.address;
                    self.$http.post("/Employees/selectdepartment", {"id":self.departmentId}).then(function (res) {
                        var dept = res.body.data[0];
                        self.departmentName = dept.name;
                        console.log(dept.name);
                        self.$http.post("/Employees/selectjobtitles", {"id":self.jobTitleId}).then(function (res) {
                            var dept = res.body.data[0];
                            self.jobTitle = dept.job_tittle;
                            console.log(dept.job_tittle);
                            self.$http.post("/Employees/selectmanager", {"id":self.employeeManagerId}).then(function (res) {
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
                                            self.$http.post("/Employees/selectbankaccountNo", {"id":self.employeeBankAccId}).then(function (res) {
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
        },
        select1: function () {

            var self = this;

            self.$http.post("/Employees/countEmployees", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {
            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/Employees/addNewEmployee", {
                //"id": self.$route.params.id,
                "employeeName": self.employeeName,
                "workingAddressId": self.workingAddressId,
                "workMobile": self.workMobile,
                "workLocation": self.workLocation,
                "workEmail": self.workEmail,
                "workPhone": self.workPhone,
                "departmentId": self.departmentId,
                "jobtitleId": self.jobtitleId,
                "managerId": self.managerId,
                "coachId": self.coachId,
                "workingTimeId": self.workingTimeId,
                "countryId": self.countryId,
                "identificationNo": self.identificationNo,
                "passportNo": self.passportNo,
                "BankAccountNumbersId": self.BankAccountNumbersId,
                "homeAddressId": self.homeAddressId,
                "accountId": self.accountId,
                "gender": self.gender,
                "maritalStatus": self.maritalStatus,
                "relatedUserId": self.relatedUserId,
                "pin": self.pin,
                "badgeId": self.badgeId,
                "manualAttendance": self.manualAttendance,
                "medicalExamDate": self.medicalExamDate,
                "companyVehicle": self.companyVehicle,
                "HomeDistance": self.HomeDistance,
                "noOfChildren": self.noOfChildren,
                "birthDate": self.birthDate,
                "placeOfBirth": self.placeOfBirth,
                "timeSheetCost": self.timeSheetCost,


            }).then(function (res) {
                console.log(res.body);
            }, function (err) {
                //alert(err);
            });
            // alert("trial_period_duration_from = "+self.trial_period_duration_from);
            self.$http.post("/employees/addemp", {
                "dep_name": self.name, "p_dep_id": self.parent_dept_id, "mgr_id": self.identification_number
            }).then(function (res) {
                //console.log(res.body);
            }, function (err) {
                //alert(err);
            });


        },
    },


    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Tableview,
        Editing,
        Message,
        Request_quotation_lower,
        dashconterller: DashboardController,
        Modal,
        TableMain,


    }
}