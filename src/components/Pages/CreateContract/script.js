import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import EmpContract from "./../../partials/EmpContract/EmpContract.vue"

export default{
    created: function () {
        var self = this;
        self.select();

        var links = $('a.link').click(function() {
            links.removeClass('active');
            $(this).addClass('active');
        });




        $(function() {
            self.$watch('jobTitleId', function (val) {
                self.jobPositionsTable.forEach(function (row) {

                    if (row.job_tittle === val) {
                        self.jobTitleId = row.id;
                    }
                });
            });
            self.$watch('departmentId', function (val) {
                self.dept_table.forEach(function (row) {
                    if (row.name === val) {
                        self.departmentId = row.id;
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

            $('#abcs').on('change',function(){
                var ab = $('#abcs option:selected').val();
                if(ab== null){
                    $('#ss').hide();
                }
                else{
                    $('#ss').show();
                }
            });
            $(".dept_dropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){
                    $(".bd-example-modal-lg1").modal('show');
                }
            });

            self.$watch('abc', function (val) {
                self.dept_table.forEach(function (row) {
                    if (row.name === val) {
                        self.abc = row.id;
                    }
                });
            });







            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });

            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#createform').css("display");
                if(check == "none"){
                    $('#createform').show();
                        $('#createedit').hide();
                }else{
                    $('#createform').hide();
                    $('#createedit').show();
                }

            });


            // $("#save").click(function () {
            //     self.submit();
            //     window.location.href = "/Employees/CreateDep/";
            //
            // });//#saveclose
            $("#save").click(function () {
                if(self.referenceName==""|| self.employeeId=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);


                    });

                }
                else{
                    self.submit();
                    window.location.href = "/Employees/CreateDep/";
                }

            });

            $("#saveclose").click(function () {
                self.addDepartment();
                window.location.href = "/employees/CreateContract/";

            });

            $(".emp_dropdown").on('change',function(){

                var value = $(this).val();
                if(value=="Create and Edit..."){
                    $(".bd-example-modal-lg61").modal('show');
                }
            });

            $(".jobTitleDropdowm").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit..."){
                    $(".bd-example-modal-lg3").modal('show');
                }
            });

            $(".deptDropDown").on('change',function(){
                   var value = $(this).val();
                if(value=="Create and Edit..."){
                    $(".bd-example-modal-lg1").modal('show');
                }
            });
            $(".contractTypeDropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit..."){
                    $(".bd-example-modal-lg64").modal('show');
                }
            });

            $(".managerNamesDropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit..."){
                    $(".bd-example-modal-lg61").modal('show');
                }
            });
            $(document).ready(function() {
                $("#new").click(function(){
                    document.getElementById("new").classList.add("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");

                });

                $("#running").click(function(){
                    document.getElementById("running").classList.add("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");

                });
                $("#toRenew").click(function(){
                    document.getElementById("toRenew").classList.add("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");


                });
                $("#expired").click(function(){
                    document.getElementById("expired").classList.add("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");

                });

            });

            $('#datepicker1').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            $('#datepicker2').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            $('#datepicker3').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            $('#datepicker4').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            $('#datepicker5').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            function showTestDate() {
                var value = $('#datepicker1').datepicker('getFormattedDate');
                self.trialFrom = value;
                var value1 = $('#datepicker2').datepicker('getFormattedDate');
                self.trialTo = value1;
                var value1 = $('#datepicker3').datepicker('getFormattedDate');
                self.durationFrom = value1;
                var value1 = $('#datepicker4').datepicker('getFormattedDate');
                self.durationTo = value1;
                var value1 = $('#datepicker5').datepicker('getFormattedDate');
                self.visaEpireDate = value1;
                //console.log(value);
            };
            $('#multi').picker({
                search : true

            });




        });



    },
    data(){
        return {

            type:'',
            dates_value6:'', //birthDate
            dates_value7:'',//mediacalExamDate
            employeeName: '',
            workingAddresses: '',
            workingAddressId: '',
            departnents: '',
            departmentId: '',
            jobTitles: '',
            jobtitleId: '',
            jobTitle:'',
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


            dept_name:'',
            emplyee_name:'',
            emp_table:'',
            managerId:'',

            jobTitle:'',// Used to store jobtitle temporarily for inertion purpose, it is v-model value
            jobPositionsTable:'',//used to store all the rerods from database table to use in the browser from


            deptName:'',
            dept_table:'',

            contractTypeName:'',
            EmployeeContractTypeNames:'',

            workingSchedule_table_:'',

            depttName:'',
            jobTtitle:'',
            cid:'',
            job:'',
            department:'',

            //declare variables to insert filled form data into database table These variables are values of v-model in the index file

            referenceName:'',
            employeeId:'',
            department_id:'',
            contractType_id:'',
            wageAmount:'',
            advantage:'',
            abc:'',
            status_name:1,
            status_name_drop:'',
            work_schedule_id:'',
            job_tittle:'',
            trialFrom:'',// trial_period_duration_from
            trialTo:'',// trial_period_duration_to
            durationFrom:'',// duration_from
            durationTo:'',// duration_from
            visaEpireDate:'',// visa_expire_date
            notes:'',
            visaNo:'',
            workPermitNo:'',
            departnents:'',
            departName:'',
            parentDeptId:'',

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
            modal64: "Open: Contract Type",
            btnlinks: {

                importbtnlink:"#/app/imported",
                discardbtnlink: "/employees/CreateDep",
                savebtnlink: "",
                modelsaveclosebtn: "",
            },
            r: true,
            p: false,
            k: true,
            nextactivity: "Contracts/New",
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },

    methods: {
        getStatusValue: function (status) {
            var self = this;
            self.status_name= status;

        },
        addDepartment: function () {

            var self = this;
            //var ckeditor_value = CKEDITOR.instances.editor1.getData();

            self.$http.post("/employees/addNewDepartment", {
                "departName": self.departName,"parentDeptId":self.parentDeptId, "managerId":self.managerId
            }).then(function(res){
                //console.log(res.body);
            },function(err){

            });
        },

        // select2: function (id) {
        //     var self = this
        //     self.status_name=id;
        //     alert(self.status_name);
        // },
        // submitmodaledit: function () {
        //     var self = this;
        //     self.$http.post("/Employees/Editreqsmodal", {"id": self.departmentId,"name": self.nname,"parent_dept_id": self.nparent_dept_id,"manager_id": self.nmanager_id}).then(function(res){
        //         console.log(res.body);
        //     },function(err){
        //     });
        //     self.$http.post("/Employees/fetchDepartments", {"deptName": self.name}).then(function (res) {
        //         self.departnents = res.body.result;
        //     }, function (err) {
        //         // alert(err);
        //     });
        // },
        // submitmodal: function () {
        //     var self = this;
        //     self.$http.post("/Employees/depinsertmodal", {"name": self.mname,"parent_dept_id": self.mparent_dept_id,"manager_id": self.mmanager_id}).then(function(res){
        //         console.log(res.body);
        //     },function(err){
        //
        //     });
        //     self.$http.post("/Employees/fetchDepartments", {"deptName": self.name}).then(function (res) {
        //         self.departnents = res.body.result;
        //     }, function (err) {
        //         // alert(err);
        //     });
        // },
        // select2: function () {
        //     var self = this;
        //     self.$http.post("/Employees/depss", {"id": self.departmentId}).then(function (res) {
        //         var parentdata = res.body.data[0];
        //         self.nname = parentdata.name;
        //         self.nparent_dept_id = parentdata.parent_dept_id;
        //         self.nmanager_id = parentdata.manager_id;
        //         console.log(res.body)
        //         self.$http.post("/Employees/deps", {
        //         }).then(function(res){
        //             self.options2 =res.body.data;
        //             console.log(res.body);
        //         },function(err){
        //             alert(err);
        //         });
        //         self.$http.post("/Employees/emps", {
        //
        //         }).then(function(res){
        //             self.options =res.body.data;
        //             console.log(res.body);
        //         },function(err){
        //
        //         });
        //     }, function (err) {
        //     });
        //
        // },
        selectJobtitleAndDepartmentName: function () {
            var self = this;
            self.$http.post("/Employees/fetchJobTitleAndDept", {
                "employeeId": self.employeeId,

            }).then(function(res){
                var jobAndDept = res.body.data[0];
                console.log("jobAndDept");
                console.log(jobAndDept);
                self.jobTitleId = jobAndDept.job_tittle;
                self.departmentId = jobAndDept.department_id;
            },function(err){
            });
            self.$http.post("/Employees/fetchContactStatus", {"statname": self.name}).then(function(res){self.status_name_drop =res.body.result;},function(err){
            });

        },


        select: function () {
             var self = this;

            self.$http.post("/employees/fetchEmployeeName", {"emplyee_name": self.id}).then(function(res){self.emp_table =res.body.result;},function(err){

            });

            self.$http.post("/employees/fetchJobTitles", {"jobTitle": self.job_tittle	}).then(function(res){self.jobPositionsTable =res.body.result;},function(err){

            });

            self.$http.post("/employees/fetchParentDepartmentNames", {"deptName": self.employeename	}).then(function(res){self.dept_table =res.body.result;},function(err){
            });

            self.$http.post("/employees/fetchContractType", {"contractType": self.contract_type}).then(function(res){self.EmployeeContractTypeNames =res.body.result;},function(err){

            });

            self.$http.post("/employees/fetchWorkScheduleName", {"work_schedule_name:'',": self.name}).then(function(res){self.workingSchedule_table_ =res.body.result;},function(err){

            });
            self.$http.post("/employees/fetchParentDepartmentNamesid", {"id": self.abc}).then(function (res) {

                var parentdata = res.body.result[0];
                self.dept_name = parentdata.name;
                console.log(parentdata);

            }, function (err) {

            });

            self.$http.post("/employees/fetchWorkingAddresses", {"workingAddress": self.address}).then(function (res) {
                self.workingAddresses = res.body.result;
            }, function (err) {

            });

            // self.$http.post("/employees /fetchdeparments", {"id": self.$route.params.id}).then(function (res) {
            //     self.names = res.body.data;
            //
            //     alert(self.names);
            // },function(err){
            //     // alert(err);
            // });

            self.$http.post("/employees/fetchDepartments", {"deptName": self.name}).then(function (res) {
                self.departnents = res.body.result;
            }, function (err) {

            });
            self.$http.post("/employees/fetchDepartments1", {"deptName": self.name}).then(function (res) {
                self.departnents1 = res.body.result;
            }, function (err) {

            });

            self.$http.post("/employees/fetchJobTitles", {"jobTitle_name": self.job_title}).then(function (res) {
                self.jobTitles = res.body.result;
            }, function (err) {
            });

            self.$http.post("/employees/fetchManagers", {"managerName": self.employeename}).then(function (res) {
                self.managers = res.body.result;
            }, function (err) {

            });
            self.$http.post("/employees/fetchManagers1", {"managerName": self.employeename}).then(function (res) {
                self.managers1 = res.body.result;
            }, function (err) {

            });

            self.$http.post("/employees/fetchCoachs", {"coach_name": self.employeename}).then(function (res) {
                self.coachs = res.body.result;
            }, function (err) {

            });

            self.$http.post("/employees/fetchWorkingTimeNames", {"workingTime": self.name}).then(function (res) {
                self.workingScedules = res.body.result;
            }, function (err) {

            });

            // self.$http.post("/employees/fetchmanager", {"manager_name": self.employeename	}).then(function(res){self.emp_table =res.body.result;},function(err){
            //     //alert(err);
            // });


            self.$http.post("/employees/fetchHomeAddresses", {"HomeAddress": self.name}).then(function (res) {
                self.homeAddresses = res.body.result;
            }, function (err) {

            });

            self.$http.post("/employees/FetchBankAccountNumbers", {"AccNo": self.account_number}).then(function (res) {
                self.BankAccountNumbers = res.body.result;
            }, function (err) {

            });

            self.$http.post("/employees/fetchCountries", {"countryName": self.country}).then(function (res) {
                self.countries = res.body.result;
            }, function (err) {

            });
            //acoountTable
            self.$http.post("/employees/fetchAccounts", {"accName": self.name}).then(function (res) {
                self.accounts = res.body.result;
            }, function (err) {

            });

            self.$http.post("/employees/fetchCompanies", {"companyName": self.company_name}).then(function (res) {
                self.companies = res.body.result;
            }, function (err) {
            });

            self.$http.post("/employees/fetchRelatedUsers", {"relatedUser": self.username}).then(function (res) {
                self.relatedUsers = res.body.result;
            }, function (err) {

            });


        },





        submit: function () {
            var self = this;
            alert("self.departmentId  : "+self.departmentId);
            self.$http.post("/Employees/addNewContract", {
                "referenceName": self.referenceName,
                "employeeId":self.employeeId,
                "jobTitleId":self.jobTitleId,
                "departmentId":self.departmentId,
                "contractType_id":self.contractType_id,
                "wageAmount":self.wageAmount,
                "advantage":self.advantage,
                "trialFrom":self.trialFrom,
                "trialTo":self.trialTo,
                "durationFrom":self.durationFrom,
                "durationTo":self.durationTo,
                "visaEpireDate":self.visaEpireDate,
                "notes":self.notes,
                "work_schedule_id":self.work_schedule_id,
                "visaNo":self.visaNo,
                "workPermitNo":self.workPermitNo,
                "status_name": self.status_name,
            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
    },

    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        Modal,
        EmpContract,
        DashboardController

    },

}







