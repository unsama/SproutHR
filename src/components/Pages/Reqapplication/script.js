import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Reqjobs from "./../../partials/Reqjobs/Reqjobs.vue"


export default{
    created: function () {
        var self =this;
        this.selectid();
        $(function () {
            $(".delete").click(function () {
                var r = confirm("Are you sure you want to  Delete the Application");
                if (r)
                {
                    window.location.href = "/recruitment/ReqPosition";
                    self.submit();
                }
                else
                {
                }
            });
            $(".Duplicate").click(function () {
                self.btnlinks.duplicatebtnlink ="/recruitment/applicationduplicate/"+self.$route.params.id
            });


            self.btnlinks.editbtnlink ="/recruitment/ReqapplicationEdit/"+self.$route.params.id
            self.btnlinks.createbtnlink ="/recruitment/ReqpipeCreate/"+self.$route.params.id
        })
    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Job Positions/Chief Executive Officer",
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
            job_email: '',
            job_tittle: '',
            expected: '',
            department_id: '',
            recruitment_responsible: '',
            description: '',
            job_location: '',
            j: '',
            d: '',
            applicants_name: '',
            contact_id: '',
            email: '',
            phone: '',
            mobile: '',
            degree: '',
            job_positions_id: '2',
            next_action_date: '',
            next_action_description: '',
            appreciation: '',
            referred_by: '',
            num: '',
            name: '',
            jname: '',
            responsible_id: '',
            application_tittle: '',
            applicantid: '7861',
            applications: '2364',
            expected_salary: '',
            expected_salary_extra: '',
            proposed_salary: '',
            proposed_salary_extra: '',
            application_summary: '',
            applied_job: '',
            username: '',
            sname: '',
            cname: '',
            appid: '',
            appids: '',
            idss: '',
            aplicantid: '',
            tagsname: '',
            next_action_date: '',
            next_action_description: '',
            tags_id: '',
            source: '',
            availability: '',
            application_status: '',


            modal61: "Open:Manager",
            btnlinks: {
                createbtnlink: "",
                discardbtnlink: "#/app/Employees/EmpDash",
                editbtnlink:"",
                importbtnlink: "#/app/imported",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
        }
    },
    methods: {
        dsubmit: function () {
            var self = this;
            self.$http.post("/recruitment/ktry", {

                "applicants_name": self.applicants_name,
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
                alert(err);
            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/deletesapp", {"id": self.appid,"ids": self.appids}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });

        },
        select2: function (id) {
            var self = this;
            self.idss=id;
        },
        selectid: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/lastappid", {"applied_job": self.applied_job}).then(function (res) {
                var parentdataos = res.body.data[0];
                self.appid = parentdataos.id;

                alert(self.appid)
            self.$http.post("/recruitment/selectapplication", {"appid": self.appid}).then(function (res) {
                var parentdataos = res.body.data[0];
                self.aplicantid = parentdataos.applicant_id;
                self.application_tittle = parentdataos.application_tittle;
                self.application_status = parentdataos.application_status;
                self.applied_job = parentdataos.applied_job;
                self.department_id = parentdataos.department_id;
                self.responsible_id = parentdataos.responsible_id;
                self.source = parentdataos.source;
                self.expected_salary = parentdataos.expected_salary;
                self.expected_salary_extra = parentdataos.expected_salary_extra;
                self.proposed_salary = parentdataos.proposed_salary;
                self.proposed_salary_extra = parentdataos.proposed_salary_extra;
                self.availability = parentdataos.availability;
                self.application_summary = parentdataos.application_summary;

            self.$http.post("/recruitment/sourceselect", {"source": self.source}).then(function (res) {
                    var parentdataos = res.body.data[0];
                    self.sname = parentdataos.name;
                    console.log(res.body)
            self.$http.post("/recruitment/depsssreq", {"department_id": self.department_id}).then(function (res) {
                    var parentdataos = res.body.data[0];
                    self.name = parentdataos.name;
                    console.log(res.body)
            self.$http.post("/recruitment/response", {"responsible_id": self.responsible_id}).then(function (res) {
                var parentdataos = res.body.data[0];
                self.username = parentdataos.username;
                console.log(res.body)
            self.$http.post("/recruitment/applied_job", {"applied_job": self.applied_job}).then(function (res) {
                var parentdataos = res.body.data[0];
                self.jname = parentdataos.job_tittle;
                console.log(res.body)
            self.$http.post("/recruitment/lastapplicantid", {"applied_job": self.applied_job}).then(function (res) {
                var parentdataos = res.body.data[0];
                self.appids = parentdataos.id;
            self.$http.post("/recruitment/applicationselect", {"appids": self.appids}).then(function (res) {

                var parent = res.body.data[0];
                self.applicants_name = parent.applicants_name;
                self.contact_id = parent.contact_id;
                self.email = parent.email;
                self.phone = parent.phone;
                self.mobile = parent.mobile;
                self.degree = parent.degree;
                self.next_action_date = parent.next_action_date;
                self.next_action_description = parent.next_action_description;
                self.department_id = parent.department_id;
                self.recruitment_responsible = parent.recruitment_responsible;
                self.referred_by = parent.referred_by;
            self.$http.post("/recruitment/contacsss", {"contact_id": self.contact_id}).then(function (res) {
                var contact = res.body.data[0];
                self.cname = contact.name;

            self.$http.post("/recruitment/tagss", {"appid": self.appid}).then(function (res) {
                var tags = res.body.data[0];
                self.tags_id = tags.tags_id;

            self.$http.post("/recruitment/selecttags", {"tags_id": self.tags_id}).then(function (res) {
                var tagsname = res.body.data[0];
                self.tagsname = tagsname.name;


            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });
            },function(err){
                alert(err);
            });

        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/applicationselect", {"applicantid": self.$route.params.applicantid}).then(function (res) {

                var parentdata = res.body.data[0];
                self.applicants_name = parentdata.applicants_name;
                self.contact_id = parentdata.contact_id;
                self.email = parentdata.email;
                self.phone = parentdata.phone;
                self.mobile = parentdata.mobile;
                self.degree = parentdata.degree;
                self.department_id = parentdata.department_id;
                self.recruitment_responsible = parentdata.recruitment_responsible;
                self.job_location = parentdata.job_location;
                self.referred_by = parentdata.referred_by;
                console.log(res.body)
            self.$http.post("/recruitment/applicationselectone", {"applicantid": self.applicantid}).then(function (res) {
                var parentdatao = res.body.data[0];
                self.department_id = parentdatao.department_id;
                self.applied_job = parentdatao.applied_job;
                self.application_tittle = parentdatao.application_tittle;
                self.applied_job = parentdatao.applied_job;
                self.responsible_id = parentdatao.responsible_id;
                self.recruitment_responsible = parentdatao.recruitment_responsible;
                self.job_location = parentdatao.job_location;
                self.description = parentdatao.description;
                self.source = parentdatao.source;
                self.expected_salary = parentdatao.expected_salary;
                self.expected_salary_extra = parentdatao.expected_salary_extra;
                self.proposed_salary = parentdatao.proposed_salary;
                self.proposed_salary_extra = parentdatao.proposed_salary_extra;
                self.application_summary = parentdatao.application_summary;
                console.log(res.body)
            self.$http.post("/recruitment/contacsss", {"contact_id": self.contact_id}).then(function (res) {
                var parentdataos = res.body.data[0];
                self.cname = parentdataos.name;
                console.log(res.body)
                //console.log(this.$route.query.id);
            self.$http.post("/recruitment/sourceselect", {"source": self.source}).then(function (res) {
                    var parentdataos = res.body.data[0];
                    self.sname = parentdataos.name;
                    console.log(res.body)
            self.$http.post("/recruitment/depsssreq", {"department_id": self.department_id}).then(function (res) {
                    var parentdataos = res.body.data[0];
                    self.name = parentdataos.name;
                    console.log(res.body)
            self.$http.post("/recruitment/response", {"responsible_id": self.responsible_id}).then(function (res) {
                    var parentdataos = res.body.data[0];
                    self.username = parentdataos.username;
                    console.log(res.body)
            self.$http.post("/recruitment/applied_job", {"applied_job": self.applied_job}).then(function (res) {
                    var parentdataos = res.body.data[0];
                    self.jname = parentdataos.job_tittle;
                    console.log(res.body)
            self.$http.post("/recruitment/lastappid", {"applied_job": self.applied_job}).then(function (res) {
                    var parentdataos = res.body.data[0];
                    self.appid = parentdataos.id;

                    alert(self.appid)
            },
            function (err) {
                alert(err);
            });
            },
            function (err) {
                alert(err);
            });
            },

            function (err) {
                alert(err);
            });
            },

            function (err) {
                alert(err);
            });
            },
            function (err) {
                alert(err);
            });
            }, function (err) {
                alert(err);
            });
            }, function (err) {
                alert(err);
            });
            }, function (err) {
                alert(err);
            });
        },
        select1: function () {

            var self = this;

            self.$http.post("/recruitment/num", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;



                console.log(res.body)
                alert(self.num);
                console.log(self.num)
                //console.log(this.$route.query.id);



            }, function (err) {
                alert(err);
            });




        },

        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                //this.submit();
                //this.tags();
                //this.insert();
                //this.select();
                //this.insert();
                // this.submiting();

                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Reqjobs,
        Message,
    },


}