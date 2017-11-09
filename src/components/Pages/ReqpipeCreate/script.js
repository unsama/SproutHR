import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"


export default{
    created: function () {
        var self = this;
        this.selectcontact();
        this.select();
        this.selecttag();
        this.selectid();
        $(function () {
            $("#refuse").click(function(){
                $("#refuse").hide();
                $("#reopen").show();
                $("#create").hide();
            });
            $("#reopen").click(function(){
                $("#refuse").show();
                $("#reopen").hide();
                $("#create").show();
            });
            console.log(self.applications_id);
            $("#save").click(function () {
                $("#save").click(function () {

                    if(self.application_tittle=="")
                    {
                        $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                            $("#success-alert").slideUp(500);
                        });
                    }
                    else{
                        window.location.href = "/recruitment/ReqPosition";
                        self.insert();
                    }

                });

            });
            $('#datepicker').datepicker({
                format: "yyyy/mm/dd",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);
            $('#datepicker1').datepicker({
                format: "yyyy/mm/dd",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate1);
        });
        function showTestDate() {
            var value = $('#datepicker').datepicker('getFormattedDate');
            self.dates_value = value;
            console.log(self.dates_value)
        };
        function showTestDate1() {
            var value1 = $('#datepicker1').datepicker('getFormattedDate');
            self.dates_value1 = value1;
            console.log(self.dates_value1)
        };
    },
    props: [
        "edit",
    ],
    data () {
        return {
            nextactivity: "Job Positions/Applications/New",
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
            applicants_name: '',
            contact_id: '',
            email: '',
            phone: '',
            mobile: '',
            degree: '',
            next_action_date: '',
            next_action_description: '',
            appreciation: '',
            referred_by	: '',
            application_tittle	: '',
            source	: '',
            responsible_id	: '',
            applied_job	: '',
            department_id	: '',
            expected_salary	: '',
            expected_salary_extra	: '',
            proposed_salary	: '',
            proposed_salary_extra	: '',
            availability	: '',
            application_summary	: '',
            name: '',
            job_tittle: '',
            options: '',
            options2: '',
            options3: '',
            options4: '',
            options5: '',
            options6: '',
            options7: '',
            application_status: '',
            appid: '',
            ids: 'ss',
            job_positions_id: '2',
            names: [],
            tagid: '',
            idss: '',
            applications_id: '2',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/ReqPosition",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                importbtnlink: "#/app/imported",
                savebtnlink:"",
            },
        }
    },
    ready() {
    },
    methods: {
        selectids: function (id) {
            var self = this;
            self.application_status=id;
        },
        submit125: function () {
            var self = this;
            self.$http.post("/recruitment/addNewEmployee", {
                "employeeName": self.applicants_name,
                "workingAddressId": self.contact_id,
                "workMobile": self.mobile,//job_title
                "workLocation": self.workLocation,// department name
                "workEmail": self.email,
                "workPhone": self.phone,
                "departmentId": self.department_id,
                "jobtitleId": self.$route.params.id,
            }).then(function (res) {
                console.log(res.body);
            }, function (err) {
                //alert(err);
            });
            self.$http.post("/recruitment/Editstatusreq23", {
                "id": self.$route.params.id,
            }).then(function (res) {
                console.log(res.body);
            }, function (err) {
                //alert(err);
            });


        },
        insert: function () {
            var self = this;
            console.log(self.dates_value);
            self.$http.post("/recruitment/ktry", {
                "applicants_name": self.applicants_name,
                "application_status": self.application_status,
                "applicant_id": self.applicant_id,
                "contact_id": self.contact_id,
                "email": self.email,"phone": self.phone,
                "mobile": self.mobile,
                "degree": self.degree,
                "next_action_date": self.dates_value,
                "next_action_description": self.next_action_description,
                "appreciation": self.appreciation,
                "referred_by": self.referred_by,
                "job_positions_id": self.$route.params.id,
                "application_tittle": self.application_tittle,
                "responsible_id": self.responsible_id,
                "source": self.source,
                "tags_id": self.tagid,
                "applied_job": self.applied_job,
                "department_id": self.department_id,
                "expected_salary": self.expected_salary,
                "expected_salary_extra": self.expected_salary_extra,
                "proposed_salary": self.proposed_salary,
                "proposed_salary_extra": self.proposed_salary_extra,
                "availability": self.dates_value1,
                "application_summary": self.application_summary,
                "stageid": self.idss,
            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        insertstage: function () {
            var self = this;
            self.$http.post("/recruitment/insertstage", {
                "id": self.idss,

            }).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        insert2: function () {
            var self = this;
            self.$http.post("/recruitment/Edit", {
                "id": self.$route.params.id,
            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        insertings: function () {
            var self = this;

        },
        selectid: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/sources", {
                "name": self.name,
            }).then(function(res){
                console.log(res.body);
                self.appid=res.body.data[5].appid;

                //
                // self.options4 =res.body.data;
                //console.log(res.body);
            },function(err){

            });
        },
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/source", {
                "name": self.name,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
                self.$http.post("/recruitment/sourcedep", {
                    "name": self.name,
                }).then(function(res){
                    self.options5 =res.body.data;
                    console.log(res.body);
                    self.$http.post("/recruitment/sourcedeps", {
                        "name": self.name,
                    }).then(function(res){
                        self.options6 =res.body.data;
                        console.log(res.body);
                        self.$http.post("/recruitment/sourcedepss", {
                            "name": self.name,
                        }).then(function(res){
                            self.options7 =res.body.data;
                            console.log(res.body);

                            self.$http.post("/recruitment/selectstages", {"id": self.$route.params.id}).then(function (res) {
                                self.names = res.body.data;
                                console.log(self.names);
                            },function(err){

                            });
                        },function(err){

                        });
                    },function(err){

                    });
                },function(err){

                });
            },function(err){

            });
        },
        select2: function (id) {
            var self = this;
            self.idss=id;
        },
        selecttag: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){

            });
        },
        selectcontacts: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/contacts", {
                "contact_id": self.contact_id,
            }).then(function(res){
                var parentdata = res.body.data[0];
                self.email = parentdata.email;
                self.phone = parentdata.phone_number;
                self.mobile = parentdata.mobile_number;
            },function(err){
            });
        },
        selectcontact: function () {
            var self = this;
            self.$http.post("/recruitment/contact", {
                "id": self.id,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                this.submit125();
            }).catch(() => {

            });
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
    },


}