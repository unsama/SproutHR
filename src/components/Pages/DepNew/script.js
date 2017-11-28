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
            $("select#o_field_input_600 option").each(function(){
                if($(this).val()==self.$route.params.id){
                    $(this).attr("selected","selected");
                }
            });

            $("select#o_field_input_602 option").each(function(){
                if($(this).val()==self.manager_id){
                    $(this).attr("selected","selected");
                }
            });
            $("#save").click(function () {
                if(self.employeeName=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);


                    });

                }
                else{
                    self.submit();
                    window.location.href = "/employees/NewDep/"+self.$route.params.id;
                }

            });
            self.btnlinks.discardbtnlink = "/employees/NewDep/"+self.$route.params.id;
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
                self.dates_value6 = value;
                var value1 = $('#datepicker7').datepicker('getFormattedDate');
                self.dates_value7 = value1;

            };


        });
    },
    data() {
        return {
            type:'',
            managers1:'',
            managerId1:'',
            departnents1:'',
            departmentId1:'',
            departName: '',
            department_id: '',


            dates_value6:'', //birthDate
            dates_value7:'',//mediacalExamDate
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
            parentdata: '',
            manager_id: '',


            countries: '',
            countryId: '',
            BankAccountNumbers: '',
            BankAccountNumbersId: '',
            homeAddresses: '',
            homeAddressId: '',
            gender: '',
            maritalStatus: '',
            noOfChildren: '',
            birthDate: '',
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
            medicalExamDate: '',
            companyVehicle: '',
            HomeDistance: '',
            status: '',

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
                discardbtnlink: "",
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
                    self.workLocation = contactInfo.name;
                    self.workEmail = contactInfo.work_email;
                    self.workPhone = contactInfo.work_phone;

                }, function (err) {
                    // alert(err);
                });
        },

        select: function () {
            var self = this;

            self.$http.post("/employees/fetchWorkingAddresses", {"workingAddress": self.address}).then(function (res) {
                self.workingAddresses = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchDepartments").then(function (res) {
                self.departnents = res.body.result;
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

            self.$http.post("/employees/fetchCoachs", {"coach_name": self.employeename}).then(function (res) {
                self.coachs = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/employees/fetchWorkingTimeNames").then(function (res) {
                self.workingScedules = res.body.result;
            }, function (err) {
                // alert(err);
            });


            self.$http.post("/employees/fetchHomeAddresses").then(function (res) {
                self.homeAddresses = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/FetchBankAccountNumbers").then(function (res) {
                self.BankAccountNumbers = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchCountries", {"countryName": self.country}).then(function (res) {
                self.countries = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchAccounts").then(function (res) {
                self.accounts = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/employees/fetchRelatedUsers").then(function (res) {
                self.relatedUsers = res.body.result;
            }, function (err) {
                //alert(err);ss
            });
            // self.$http.post("/Employees/fetchDepartmentManager", {"id":self.$route.params.id}).then(function (res) {
            //     var deptManagerId = res.body.result[0];
            //     self.manager_id = deptManagerId.manager_id;
            // }, function (err) {
            //
            // });
        },
        submit: function () {
            var self = this;
            self.$http.post("/Employees/addNewEmployee", {
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
                "dates_value7": self.dates_value7,
                "companyVehicle": self.companyVehicle,
                "HomeDistance": self.HomeDistance,
                "noOfChildren": self.noOfChildren,
                "dates_value6": self.dates_value6,
                "placeOfBirth": self.placeOfBirth,
                "timeSheetCost": self.timeSheetCost,
                "status": self.status,

            }).then(function (res) {
                console.log(res.body);
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