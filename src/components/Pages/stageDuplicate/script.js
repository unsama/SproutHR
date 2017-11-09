import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import StagesEdits from "./../../partials/StagesEdits/StagesEdits.vue"
export default{
    created: function () {
        console.log('From Submitted21!');
        var self = this;
        this.select();
        this.select1();
        $(function() {
            $(document).ready (function(){
                $("#success-alert").hide();

            });
            $("#save").click(function () {
                if(self.name=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "../ReqStages";
                    self.submit();
                }
            });
            self.btnlinks.discardbtnlink = "/recruitment/ReqStages";
            $("#num01").click(function () {

                self.psubmit();
            });
            $("#num10").click(function () {
                self.ssubmit();
            });

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
            nextactivity: "Stages/asad",
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
            stagename: '',
            name: '',
            counter: 1,
            id: '',
            num: '',
            jobspecific: '',
            options: '',
            options2: '',
            folded: '',
            Usetemplate: '',
            job_specific: '',

            email_template_id: '',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/Stages",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/stages", {"name": self.name,"job_specific": self.job_specific,"email_template_id": self.email_template_id,"folded": self.folded,"description": self.description}).then(function(res){
                console.log(res.body);

            },function(err){

            });
        },
        ssubmit: function () {

            var self = this;
            self.$http.post("/recruitment/stagepage", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.id = parentdata.id;
                self.job_specific = parentdata.job_specific;
                self.email_template_id = parentdata.email_template_id;
                self.folded = parentdata.folded.data;
                self.$route.params.id = parentdata.id;
                self.description = parentdata.description;
                self.$http.post("/recruitment/s", {"job_specific":self.job_specific}).then(function (res) {
                        var data = res.body.data[0];
                        self.job_tittle = data.job_tittle;
                        self.$http.post("/recruitment/selectemail", {"email_template_id":self.email_template_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.emailname = data.name;
                            },
                            function (err) {
                            });
                    },
                    function (err) {
                    });
            }, function (err) {

            });
        },
        psubmit: function () {
            var self = this;
            self.$http.post("/recruitment/stagespages1", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.id = parentdata.id;
                self.job_specific = parentdata.job_specific;
                self.email_template_id = parentdata.email_template_id;
                self.folded = parentdata.folded.data;
                self.$route.params.id = parentdata.id;
                self.description = parentdata.description;
                //console.log(this.$route.query.id);

                self.$http.post("/recruitment/s", {"job_specific":self.job_specific}).then(function (res) {
                        var data = res.body.data[0];
                        self.job_tittle = data.job_tittle;
                        //console.log(self.job_tittle);
                        // console.log(res.body);
                        self.$http.post("/recruitment/selectemail", {"email_template_id":self.email_template_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.emailname = data.name;
                                //console.log(self.job_tittle);

                                // console.log(res.body);

                            },

                            function (err) {

                            });

                    },

                    function (err) {

                    });


            }, function (err) {

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/tablestagesselect", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.id = parentdata.id;

                self.folded = parentdata.folded.data;
                self.description = parentdata.description

                console.log(res.body)
            },function(err){

            });
            //console.log(this.$route.query.id);
            // console.log(self.job_specific);

            //alert(self.companyName);
            self.$http.post("/recruitment/emailss", {
                "name": self.Usetemplate,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/recruitment/jobspecific", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);

            },function(err){

            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/num", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }
    },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,
        StagesEdits,
    },


}