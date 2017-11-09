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

        $(function() {
            $(document).ready(function() {
                $('.dateRangePicker')
                    .datepicker({
                        format: 'yyyy/mm/dd',
                        startDate: '2010/01/01',
                        endDate: '2020/12/30'
                    })
            });

            $(document).ready(function() {
                $('.dateRangePicker1')
                    .datepicker({
                        format: 'yyyy/mm/dd ',
                        startDate: '2010/01/01',
                        endDate: '2020/12/30'
                    });
                $('.datetimepicker1').datetimepicker();
            });
            //use this method to add new colors to pallete
            //$.fn.colorPicker.addColors(['000', '000', 'fff', 'fff']);

            $('#color1').colorPicker();

            $('#color2').colorPicker();

            $('#color3').colorPicker({pickerDefault: "ffffff", colors: ["ffffff", "000000", "111FFF", "C0C0C0", "FFF000"], transparency: true});

            $('#color4').colorPicker();

            $('#color5').colorPicker({showHexField: false});

            //fires an event when the color is changed
            //$('#color1').change(function(){
            //alert("color changed");
            //});

            $("#button1").click(function(){
                $("#color1").val("#ffffff");
                $("#color1").change();
            });

            $("#button2").click(function(){
                $("#color2").val("#000000");
                $("#color2").change();
            });

        });
        $(function(){
            $('.samobuttopcontroller1').off('click');
            $('.samobuttopcontroller1').on('click', function () {
                let check = $('#createform').css("display");
                if(check == "none"){
                    $('#createform').show();
                    $('#createedit').hide();
                }else{
                    $('#createform').hide();
                    $('#createedit').show();
                }

            });
        });
        $(function(){
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
        });


    },
    props: [
        "edit",

    ],
    data () {
        return {

            benefits:[1],

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
            id: '',
            job_positions_id: '1',
            appid: '',
            tagid: '',
            applications_id: '2323',

            btnlinks: {

                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/Reqpipe",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                importbtnlink: "#/app/imported",
                savebtnlink:""
            },

        }
    },
    ready() {

    },
    methods: {



        insert: function () {
            var self = this;

            console.log(self.dates_value);
            self.$http.post("/ktry", {
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
                "job_positions_id": self.job_positions_id,
                "application_tittle": self.application_tittle,
                "responsible_id": self.responsible_id,
                "source": self.source,
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
            self.$http.post("/inserted", {"applications_id": self.applications_id,"tagid": self.tagid}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
            self.$http.post("/inserted", {"applications_id": self.applications_id,"tagid": self.tagid}).then(function(res){
                console.log(res.body);

            },function(err){
                alert(err);
            });
        },
        // submit: function () {
        //     var self = this;
        //
        //     self.$http.post("/inserting", {"applicants_name": self.applicants_name,"applicant_id": self.applicant_id,"contact_id": self.contact_id,"email": self.email,"phone": self.phone,"mobile": self.mobile,"degree": self.degree,"next_action_date": self.next_action_date,"next_action_description": self.next_action_description,"appreciation": self.appreciation,"referred_by": self.referred_by}).then(function(res){
        //         console.log(res.body);
        //
        //     },function(err){
        //         alert(err);
        //     });
        // },
        selectid: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/sources", {
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

        select: function () {

            var self = this;
            //alert(self.companyName);
            self.$http.post("/source", {
                "name": self.name,

            }).then(function(res){


                self.options =res.body.data;
                console.log(res.body);


                self.$http.post("/sourcedep", {
                    "name": self.name,

                }).then(function(res){


                    self.options5 =res.body.data;
                    console.log(res.body);
                    self.$http.post("/sourcedeps", {
                        "name": self.name,

                    }).then(function(res){


                        self.options6 =res.body.data;
                        console.log(res.body);
                        self.$http.post("/sourcedepss", {
                            "name": self.name,

                        }).then(function(res){


                            self.options7 =res.body.data;
                            console.log(res.body);

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
            self.$http.post("/tags", {
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
            self.$http.post("/contacts", {
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
            self.$http.post("/contact", {
                "id": self.id,

            }).then(function(res){


                self.options2 =res.body.data;
                console.log(res.body);

            },function(err){
                alert(err);
            });
        },
        // insertapplications() {
        //
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         // this.submit();
        //         //this.select();
        //         //this.insert();
        //
        //         // this.submiting();
        //
        //         //  alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         //  alert('Correct them errors!');
        //     });
        // } ,
        // validateBeforeSelect() {
        //
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         // this.submit();
        //
        //        // this.select();
        //       //  this.selectcontact();
        //         //this.insert();
        //
        //         // this.submiting();
        //
        //         //  alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         //  alert('Correct them errors!');
        //     });
        // } ,
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