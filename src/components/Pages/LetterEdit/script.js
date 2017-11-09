
import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import EmpContract from "./../../partials/EmpContract/EmpContract.vue"
export default{
    created: function () {
        var self = this;
        this.select();
        function showDiv(elem){
            if(elem.value == 'false')
                document.getElementById('#urls').style.display = "block";
        }
        $(function(){


            // $("#save").click(function () {
            //     self.submit();
            // });
            $("#save").click(function () {
                if(self.application_tittle=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "../ResumeandLetters/"+self.$route.params.id;
                    self.submit();
                }

            });
            self.btnlinks.discardbtnlink = "/recruitment/ResumeandLetters/"+self.$route.params.id;
            $(".delete").click(function () {
                var r = confirm("Are you sure you want to  Delete the Document");
                if (r)
                {
                    window.location.href = "/recruitment/Letters";
                    self.submit2();
                }
                else
                {
                    // x="You pressed Cancel!";
                }
            });

            // $('#o_field_input_65').on('change',function(){
            //    var ab = $('#o_field_input_65 option:selected').val();
            //
            //    if(ab=="url"){
            //        $('#urls').show();
            //        $('#fils').hide();
            //    }
            //    else if(ab=="File")
            //     {
            //        $('#fils').show();
            //        $('#urls').hide();
            //    }
            // });
        });
    },
    data(){
        return {
            r: true,
            t:false,
            k:false,
            y:false,
            p:true,
            f:false,
            l:false,
            document_url: '',
            type: '',
            application_tittle: '',
            u:false,
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            nextactivity: "Resumes and Letters/Williams_CV.doc",
            btnlinks: {
                createbtnlink:"#/app/attendance/Createemp",
                importbtnlink:"#/app/imported",
                discardbtnlink: "/recruitment/ResumeandLetters",
                savebtnlink:"",
            },
            tableheader: [
                "Reference",
                "Destination Location Zone",
                "Partner",
                "Schduled Date",
                "Source Document",
                "Back Order Of",
                "Status",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },

            }

        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/letterEdit", {"application_id": self.$route.params.id,"document_url": self.document_url,"type": self.type}).then(function(res){
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/recruitment/letterEditss", {"application_id": self.$route.params.id,"application_tittle": self.application_tittle}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        submit2: function () {
            var self = this;
            self.$http.post("/recruitment/deleteletter", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },

        select: function () {
            var self = this;
            self.$http.post("/recruitment/letterEdits", {
                "application_id": self.$route.params.id,
            }).then(function(res){
                var parentdata = res.body.data[0];
                self.document_url = parentdata.document_url;
                self.type = parentdata.type;
                console.log(self.parentdata);
            },function(err){

            });
            self.$http.post("/recruitment/letterEditsjobs", {
                "application_id": self.$route.params.id,

            }).then(function(res){
                var parentdata = res.body.data[0];
                self.application_tittle = parentdata.application_tittle;

                console.log(self.parentdata);

            },function(err){

            });

            //console.log(this.$route.query.id);
            // console.log(self.job_specific);
        },


        // select: function () {
        //     var self = this;
        //     self.$http.post("/letter", {"id": self.$route.params.id}).then(function (res) {
        //         self.names = res.body.data;
        //
        //
        //         console.log(self.names);
        //     },function(err){
        //         alert(err);
        //     });
        //     //console.log(this.$route.query.id);
        //     // console.log(self.job_specific);
        // },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                this.submit();

            }).catch(() => {
                // eslint-disable-next-line

            });
        }


    },
    components: {
        Emptyform,
        Tabs,
        Modal,
        ModelDescription,
        Componame,
        DashboardController,
        Tableview,
        Editing,
        Request_quotation_lower,
        Message,
        EmpContract,




    }

}
