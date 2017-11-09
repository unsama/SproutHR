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
        this.selectappsid();
        $(function () {
            console.log(self.applications_id);
            $("#save").click(function () {
                self.insert();
                self.inserted();
                self.appinsert();
                self.btnlinks.savebtnlink ="/recruitment/Reqapplication/"+self.$route.params.id;
            });
            $('.dateRangePicker').datepicker({
                format: "yyyy/mm/dd",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);
        });
        function showTestDate() {
            var value = $('.dateRangePicker').datepicker('getFormattedDate');
            self.dates_value = value;
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
            aplicantid: '',
            tagsname: '',
            next_action_date: '',
            next_action_description: '',
            tags_id: '',
            source: '',
            availability: '',
            application_status: '',
            names: [],
            tagid: '',

            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/Reqpipe",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                importbtnlink: "#/app/imported",
                savebtnlink:"",
            },
        }
    },
    ready() {
    },
    methods: {
        insert: function () {
            var self = this;
            console.log(self.$route.params.id);
            self.$http.post("/recruitment/Editapp", {
                "applicants_name": self.applicants_name,
                "applicant_id": self.applicant_id,
                "contact_id": self.contact_id,
                "email": self.email,"phone": self.phone,
                "mobile": self.mobile,
                "degree": self.degree,
                "next_action_date": self.next_action_date,
                "next_action_description": self.next_action_description,
                "appreciation": self.appreciation,
                "referred_by": self.referred_by,
                "job_positions_id": self.$route.params.id,
                "application_tittle": self.application_tittle,
                "responsible_id": self.responsible_id,
                "source": self.source,
                "tags_id": self.tagid,
                "appid": self.appid,
                "applied_job": self.applied_job,
                "department_id": self.department_id,
                "expected_salary": self.expected_salary,
                "expected_salary_extra": self.expected_salary_extra,
                "proposed_salary": self.proposed_salary,
                "proposed_salary_extra": self.proposed_salary_extra,
                "availability": self.availability,
                "application_summary": self.application_summary
            }).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        appinsert: function () {
            var self = this;
            console.log(self.$route.params.id);
            self.$http.post("/recruitment/edittag", {
                "applicants_name": self.applicants_name,
                "applicant_id": self.applicant_id,
                "contact_id": self.contact_id,
                "email": self.email,"phone": self.phone,
                "mobile": self.mobile,
                "degree": self.degree,
                "next_action_date": self.next_action_date,
                "next_action_description": self.next_action_description,
                "appreciation": self.appreciation,
                "referred_by": self.referred_by,
                "job_positions_id": self.$route.params.id,
                "application_tittle": self.application_tittle,
                "responsible_id": self.responsible_id,
                "source": self.source,
                "tags_id": self.tagid,
                "appid": self.appid,
                "appids": self.appids,
                "applied_job": self.applied_job,
                "department_id": self.department_id,
                "expected_salary": self.expected_salary,
                "expected_salary_extra": self.expected_salary_extra,
                "proposed_salary": self.proposed_salary,
                "proposed_salary_extra": self.proposed_salary_extra,
                "availability": self.availability,
                "application_summary": self.application_summary
            }).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        inserted: function () {
            var self = this;
            console.log(self.$route.params.id);
            self.$http.post("/recruitment/Editapplicant", {
                "applicants_name": self.applicants_name,
                "applicant_id": self.applicant_id,
                "contact_id": self.contact_id,
                "email": self.email,"phone": self.phone,
                "mobile": self.mobile,
                "degree": self.degree,
                "appids": self.appids,
                "next_action_date": self.next_action_date,
                "next_action_description": self.next_action_description,
                "appreciation": self.appreciation,
                "referred_by": self.referred_by,
                "job_positions_id": self.$route.params.id,
                "application_tittle": self.application_tittle,
                "responsible_id": self.responsible_id,
                "source": self.source,
                "tags_id": self.tagid,
                "appid": self.appid,
                "applied_job": self.applied_job,
                "department_id": self.department_id,
                "expected_salary": self.expected_salary,
                "expected_salary_extra": self.expected_salary_extra,
                "proposed_salary": self.proposed_salary,
                "proposed_salary_extra": self.proposed_salary_extra,
                "availability": self.availability,
                "application_summary": self.application_summary
            }).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        insertings: function () {

            var self = this;
            alert(self.ids);
            // self.$http.post("/stageinsert", {
            //     "stagename": self.ids,
            // }).then(function(res){
            //     console.log(res.body);
            // },function(err){
            //     alert(err);
            // });
        },
        selectid: function () {

            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/sources", {
                "name": self.name,
            }).then(function(res){
                console.log(res.body);
                self.appid=res.body.data[5].appid;
                alert(self.appid);
                //
                // self.options4 =res.body.data;
                //console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        selectappsid: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/lastappid", {"applied_job": self.applied_job}).then(function (res) {
                var parentdataos = res.body.data[0];
                self.appid = parentdataos.id;

                alert(self.appid);
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


                                    self.$http.post("/recruitment/lastapplicantid", {"applied_job": self.applied_job}).then(function (res) {
                                        var parents = res.body.data[0];
                                        self.appids = parents.id;

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
        selecttag: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){
                alert(err);
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
                alert(err);
            });
        },
        selectcontact: function () {

            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/contact", {
                "id": self.id,

            }).then(function(res){


                self.options2 =res.body.data;
                console.log(res.body);

            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {

            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                //this.submit();
                //this.tags();
                this.insert();
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
        Request_Quotation_Lower,
        Modal,
    },


}