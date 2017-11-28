import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default {
    created: function () {
        var self = this;
        self.select();

        $(function () {

            $("#save").click(function () {
                alert("self.employeeName"+self.employeeName);
                if(self.employeeName=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);


                    });

                }
                else{
                    self.submit();
                    window.location.href = "/employees/";
                }

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
                    //callback();
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
            departName1:'',
            managerId1:'',
            managers1:'',
            departmentId1:'',
            departnents1:'',


            type:'',
            managers1:'',
            managerId1:'',
            departnents1:'',
            departmentId1:'',
            departName: '',
            emptagId: '',
            tagss: '',


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
            status: '',
            activeArchive: '',

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
        // callback:function() {
        //         // Find modal body on the document
        //         var $currentDetailsModal = $('.bd-example-modal-lg1');
        //
        //         // Clone modal and save copy
        //         var $cloneDetailsModal = $currentDetailsModal.clone();
        //
        //         // Find links in this modal which open this modal again and bind this function to their click events
        //         var value = $(this).val();
        //         if (value == "Create and Edit...") {
        //             $(value, $cloneDetailsModal).click(callback);
        //         }
        //
        //
        // },

        SwitchButtons: function(buttonId) {
            var self = this;
            self.activeArchive = buttonId;
            alert(self.activeArchive);

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
                var self = this;
                self.$http.post("/Employees/fetchContactInformationOfEmployee", {
                    "workingAddressId": self.workingAddressId,
                }).then(function (res) {
                    var contactInfo = res.body.data[0];
                    self.workMobile = contactInfo.work_mobile;
                    self.workLocation = contactInfo.work_location;
                    self.workEmail = contactInfo.work_email;
                    self.workPhone = contactInfo.work_phone;

                }, function (err) {
                    // alert(err);
                });


        },

        // selectDepartManagerHussain: function () {
        //     var self = this;
        //     //alert("Inside Method selectDepartManagerHussain(): departmentId  =  "+ self.departmentId);
        //         self.$http.post("/Employees/fetchDeptManager", {
        //             "departmentId": self.departmentId,
        //
        //         }).then(function (res) {
        //             var deptManager = res.body.result[0];
        //
        //             console.log(deptManager);
        //             self.managerId = deptManager.employeename;
        //             console.log(self.managerId);
        //
        //         }, function (err) {
        //             alert(err);
        //         });
        // },


        select: function () {
            var self = this;

            self.$http.post("/employees/fetchWorkingAddresses", {"workingAddress": self.address}).then(function (res) {
                self.workingAddresses = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchtags").then(function (res) {
                self.tagss = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchDepartments", {"deptName": self.name}).then(function (res) {
                self.departnents = res.body.result;
                console.log("self.departnents");
                console.log(self.departnents);
            }, function (err) {
                // alert(err);
            });
            self.$http.post("/employees/fetchDepartments1", {"deptName": self.name}).then(function (res) {
                self.departnents1 = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/employees/fetchJobTitles", {"jobTitle_name": self.job_title}).then(function (res) {
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


        },
        // closeModal:function (){
        //     alert("dddd");
        //     window.location.replace("/employees/CreateDepone/");
        // },
        submitDepartment: function () {
            var self = this;
            if(self.departName1=="")
            {
                $("#success-alert1").fadeTo(2000, 500).slideUp(500, function(){
                    $("#success-alert1").slideUp(500);


                });

            }
            else {
                self.$http.post("/Employees/addNewDepartment", {
                    "departName": self.departName1,
                    "managerId": self.managerId1,
                    "parentDeptId": self.departmentId1,


                }).then(function (res) {
                    console.log(res.body);
                }, function (err) {
                    alert(err);
                });

            self.$http.post("/employees/fetchDepartments", {"deptName": self.name}).then(function (res) {
                self.departnents = res.body.result;
            }, function (err) {
                // alert(err);
            });
            self.departName1 ='';
            self.managerId1 ='';
            self.departmentId1 ='';
            //window.location.href = "/employees/CreateDepone/";
            //router-link ="'HrDeps/'+record.id";
            window.location.replace("/employees/CreateDepone/");
            }
        },
        submit: function () {
            var self = this;
            self.$http.post("/Employees/addNewEmployee", {
                "employeeName": self.employeeName,
                "workingAddressId": self.workingAddressId,
                "workMobile": self.workMobile,//job_title
                "workLocation": self.workLocation,// department name
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
                "status": self.status,
                "activeArchive": self.activeArchive,

            }).then(function (res) {
                console.log(res.body);
            }, function (err) {
                //alert(err);
            });
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
        DashboardController,
        Modal,
        Request_Quotation_Lower,
        Editing,
        TableMain,
    },


}