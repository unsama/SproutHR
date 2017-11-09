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
        self.select1();
        var links = $('a.link').click(function() {
            links.removeClass('active');
            $(this).addClass('active');
        });


        $(function(){
            $("select#o_field_input_933 option").each(function(){
                if($(this).val()==self.employeeId){
                    $(this).attr("selected","selected");
                }
            });
            $("select#o_field_input_934 option").each(function(){
                if($(this).val()==self.jobTitle){
                    $(this).attr("selected","selected");
                }
            });

            $("select#o_field_input_935 option").each(function(){
                if($(this).val()==self.departmentId){
                    $(this).attr("selected","selected");
                }
            });

            $("select#o_field_input_936 option").each(function(){
                if($(this).val()==self.contractType_id){
                    $(this).attr("selected","selected");
                }
            });
            $("#num01").click(function () {
                self.nextsubmit();
            });

            $("#num10").click(function () {
                self.backsubmit();
            });



            // self.$watch('employeeId', function (val) {
            //     self.emp_table.forEach(function (row) {
            //         if (row.employeename === val) {
            //             self.employeeId = row.id;
            //         }
            //     });
            // });

            self.$watch('jobTitle', function (val) {
                self.jobTitles.forEach(function (row) {
                    if (row.job_tittle === val) {
                        self.jobTitle = row.id;
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


            $("#save").click(function () {
                self.submit();
                window.location.href = "/Employees/contractone/"+self.$route.params.id;
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

            dept_name:'',
            emplyee_name:'',
            emp_table:'',

            jobTitle:'',// Used to store jobtitle temporarily for inertion purpose, it is v-model value
            jobTitles:'',//used to store all the rerods from database table to use in the browser from



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
            departmentId:'',
            department_id:'',
            contractType_id:'',
            wageAmount:'',
            advantage:'',
            abc:'',
            status_name:'',
            status_name_drop:'',
            work_schedule_id:'',
            job_tittle:'',
            dates_value1:'',// trial_period_duration_from
            dates_value2:'',// trial_period_duration_to
            dates_value3:'',// duration_from
            dates_value4:'',// duration_to
            dates_value5:'',// visa_expire_date
            notes:'',
            visaNo:'',
            workPermitNo:'',
            trialFrom:'',
            trialTo:'',
            durationFrom:'',
            durationTo:'',
            visaEpireDate:'',

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
            },
            r: true,
            p: false,
            k: true,
            nextactivity: "Contracts/New",
            counter: 0,
            num:'',
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
        // select2: function (id) {
        //     var self = this
        //     self.status_name=id;
        //
        //
        // },
        selectJobtitleAndDepartmentName: function () {
            var self = this;
            self.$http.post("/Employees/fetchJobTitleAndDept", {
                "employeeId": self.employeeId,

            }).then(function(res){
                var jobAndDept = res.body.data[0];
                console.log(jobAndDept);
                self.job = jobAndDept.job_tittle;
                self.abc = jobAndDept.name;

            },function(err){
            });
            self.$http.post("/Employees/fetchContactStatus", {"statname": self.name}).then(function(res){self.status_name_drop =res.body.result;},function(err){
            });

        },
        backsubmit: function () {
            var self = this;
            self.$http.post("/Employees/selectcontractinfoForFormBack", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.referenceName = parentdata.reference;
                self.employeeId = parentdata.employee_id;
                self.jobTitle = parentdata.job_tittle;
                self.departmentId = parentdata.department_id;
                self.contractType_id = parentdata.contract_type;
                self.wageAmount = parentdata.wage;
                self.advantage = parentdata.advantages;
                self.status_name = parentdata.contract_status_id;
                self.work_schedule_id = parentdata.working_schedule_id;
                self.trialFrom = parentdata.trial_period_duration_from;
                self.trialTo = parentdata.trial_period_duration_to;
                self.durationFrom = parentdata.duration_from;
                self.durationTo = parentdata.duration_to;
                self.visaEpireDate = parentdata.visa_expire_date;
                self.notes = parentdata.notes;
                self.workPermitNo = parentdata.work_permit_no;
                self.visaNo = parentdata.visa_no;
                self.$route.params.id = parentdata.id;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){
                        // $('#new').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById("new").classList.add("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "running")
                    {
                        // $('#running').classList.add("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById('running').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');

                        // document.getElementbyId('toRenew').classList.add('oe_active');
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "expired")
                    {
                        // $('#expired').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");

                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        // document.getElementbyId('expired').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }
                    else if( self.status_name == null)
                    {
                        $("#expired").removeClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');

                        // document.getElementbyId('expired').classList.remove('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }

                })

            }, function (err) {

            });

        },
        nextsubmit: function () {

            var self = this;
            self.$http.post("/Employees/selectcontractinfoForFormNext", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.referenceName = parentdata.reference;
                self.employeeId = parentdata.employee_id;
                self.jobTitle = parentdata.job_tittle;
                self.departmentId = parentdata.department_id;
                self.contractType_id = parentdata.contract_type;
                self.wageAmount = parentdata.wage;
                self.advantage = parentdata.advantages;
                self.status_name = parentdata.contract_status_id;
                self.work_schedule_id = parentdata.working_schedule_id;
                self.trialFrom = parentdata.trial_period_duration_from;
                self.trialTo = parentdata.trial_period_duration_to;
                self.durationFrom = parentdata.duration_from;
                self.durationTo = parentdata.duration_to;
                self.visaEpireDate = parentdata.visa_expire_date;
                self.notes = parentdata.notes;
                self.workPermitNo = parentdata.work_permit_no;
                self.visaNo = parentdata.visa_no;
                self.$route.params.id = parentdata.id;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){
                        // $('#new').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById("new").classList.add("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "running")
                    {
                        // $('#running').classList.add("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById('running').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');

                        // document.getElementbyId('toRenew').classList.add('oe_active');
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "expired")
                    {
                        // $('#expired').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");

                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        // document.getElementbyId('expired').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }
                    else if( self.status_name == null)
                    {
                        $("#expired").removeClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');

                        // document.getElementbyId('expired').classList.remove('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }

                })


            }, function (err) {

            });




        },
        select: function () {
            var self = this;

            self.$http.post("/Employees/selectcontractinfo", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];

                self.referenceName = parentdata.reference;
                self.employeeId = parentdata.employee_id;
                self.jobTitle = parentdata.job_tittle;
                self.departmentId = parentdata.department_id;
                self.contractType_id = parentdata.contract_type;
                self.wageAmount = parentdata.wage;
                self.advantage = parentdata.advantages;
                self.status_name = parentdata.contract_status_id;
                self.work_schedule_id = parentdata.working_schedule_id;
                self.trialFrom = parentdata.trial_period_duration_from;
                self.trialTo = parentdata.trial_period_duration_to;
                self.durationFrom = parentdata.duration_from;
                self.durationTo = parentdata.duration_to;
                self.visaEpireDate = parentdata.visa_expire_date;
                self.notes = parentdata.notes;
                self.workPermitNo = parentdata.work_permit_no;
                self.visaNo = parentdata.visa_no;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){
                        // $('#new').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById("new").classList.add("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "running")
                    {
                        // $('#running').classList.add("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById('running').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');

                        // document.getElementbyId('toRenew').classList.add('oe_active');
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "expired")
                    {
                        // $('#expired').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");

                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        // document.getElementbyId('expired').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }
                    else if( self.status_name == null)
                    {
                        $("#expired").removeClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');

                        // document.getElementbyId('expired').classList.remove('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }

                })


            }, function (err) {

            });




            self.$http.post("/employees/fetchEmployeeName", {"emplyee_name": self.id}).then(function(res){self.emp_table =res.body.result;},function(err){

            });

            self.$http.post("/employees/fetchJobTitles", {"jobTitle": self.job_tittle	}).then(function(res){self.jobTitles =res.body.result;},function(err){

            });

            self.$http.post("/employees/fetchParentDepartmentNames", {"deptName": self.employeename	}).then(function(res){self.dept_table =res.body.result;},function(err){

            });

            self.$http.post("/employees/fetchContractType", {"contractType": self.contract_type}).then(function(res){self.EmployeeContractTypeNames =res.body.result;},function(err){

            });

            self.$http.post("/employees/fetchWorkScheduleName", {"work_schedule_name:'',": self.name}).then(function(res){self.workingSchedule_table_ =res.body.result;},function(err){

            });
            self.$http.post("/employees/fetchParentDepartmentNamesid", {"id": self.departmentId}).then(function (res) {
                var parentdata = res.body.result[0];
                self.dept_name = parentdata.name;

            }, function (err) {

            });


        },
        select1: function () {

            var self = this;

            self.$http.post("/Employees/countContract", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;



                console.log(res.body)
                //console.log(this.$route.query.id);



            }, function (err) {

            });




        },





        submit: function () {
            var self = this;
            self.$http.post("/Employees/EditContract", {
                "id": self.$route.params.id,
                "referenceName": self.referenceName,
                "employeeId":self.employeeId,
                "jobTitle":self.jobTitle,//job_title
                "departmentId":self.departmentId,// department name
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







