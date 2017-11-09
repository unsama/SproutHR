import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"



export default{

    created: function () {
        var self = this;
        this.select();
        $(function() {
            $("#num01").click(function () {

                self.psubmit();
            });
            $("#num10").click(function () {
                self.ssubmit();
            });
            $(".delete").click(function () {
                var r = confirm("Are you sure you want to  Delete the Department");
                if (r)
                {
                    window.location.href = "/recruitment/ReqStages";
                    self.submit();
                }
                else
                {
                }
            });
            $(".Duplicate").click(function () {
                self.btnlinks.duplicatebtnlink ="/recruitment/stageDuplicate/"+self.$route.params.id
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
            nextactivity: "Stages/",
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
            emailname: '',
            job_specific: '',
            email_template_id: '',
            name: '',
            folded: '',
            description: '',
            job_tittle: '',
            id: '',

            btnlinks: {
                createbtnlink: "/recruitment/Stagecreate",
                discardbtnlink: "#/app/Employees/EmpDash",
                editbtnlink:"/recruitment/StageEdit",
                importbtnlink: "#/app/imported",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/delete", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        dsubmit: function () {
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
                self.job_specific = parentdata.job_specific;
                self.email_template_id = parentdata.email_template_id;
                self.folded = parentdata.folded.data;
                self.description = parentdata.description



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
        // select1: function () {
        //
        //     var self = this;
        //
        //     self.$http.post("/tablestagesselect", {"id": self.$route.params.id}).then(function (res) {
        //
        //         var parentdata = res.body.data[0];
        //         self.name = parentdata.name;
        //         self.id = parentdata.id;
        //         self.job_specific = parentdata.job_specific;
        //         self.email_template_id = parentdata.email_template_id;
        //         self.folded = parentdata.folded.data;
        //         self.description = parentdata.description
        //         alert(self.id);
        //
        //
        //         console.log(res.body)
        //         //console.log(this.$route.query.id);
        //
        //         self.$http.post("/s", {"job_specific":self.job_specific}).then(function (res) {
        //                 var data = res.body.data[0];
        //                 self.job_tittle = data.job_tittle;
        //                 //console.log(self.job_tittle);
        //
        //                 console.log(res.body);
        //                 self.$http.post("/selectemail", {"email_template_id":self.email_template_id}).then(function (res) {
        //                         var data = res.body.data[0];
        //                         self.emailname = data.name;
        //                         //console.log(self.job_tittle);
        //
        //                         console.log(res.body);
        //
        //                     },
        //
        //                     function (err) {
        //                         alert(err);
        //                     });
        //
        //             },
        //
        //             function (err) {
        //                 alert(err);
        //             });
        //
        //
        //     }, function (err) {
        //         alert(err);
        //     });
        //
        //
        //
        //
        // },

    },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,
    },


}