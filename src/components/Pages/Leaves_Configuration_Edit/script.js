import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import leaveallocationRequest from "./../../partials/leaveallocationRequest/leaveallocationRequest.vue"
import leavetype_create from "./../../partials/leavetype_create/leavetype_create.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        document.title = this.title;
        var self = this;
        this.select();
        this.select1();
        this.select2();
        $(function(){
            $("#success-alert").hide();
            $(".dept_dropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit..."){
                    $(".bd-example-modal-lg1").modal('show');
                }
            });
            $('#abcs').on('change',function(){
                var ab = $('#abcs option:selected').val();
                if(ab== null){
                    $('#ss').show();
                }
                else{
                    $('#ss').show();
                }
            });
            $('#r').hide();

            $("#save").click(function () {
                if(self.type=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "../leaves_configuration_table/"+self.$route.params.id;
                    self.submit();
                }

            });
            self.btnlinks.discardbtnlink = "/leaves/leaves_configuration_table/"+self.$route.params.id;

            $("#one").click(function () {
                if($(this).prop('checked')){
                    self.apply_double_validation=1;
                }else{
                    self.apply_double_validation=0;
                }
            });
            $("#two").click(function () {
                if($(this).prop('checked')){
                    self.allow_override_limit=1;
                }else{
                    self.allow_override_limit=0;
                }
            });
            $("#three").click(function () {
                if($(this).prop('checked')){
                    self.active=1;
                }else{
                    self.active=0;
                }
            });
            $("#num01").click(function () {
                self.psubmit();
            });
            $("#num10").click(function () {
                self.psubmit();
                self.ssubmit();
            });
            $('#o_field_input_105').on('change',function(){
                var ab = $('#o_field_input_105 option:selected').val();
                if(ab=="employee"){
                    $('.e').show();
                    $('#r').hide();
                }
                else
                {
                    $('#r').show();
                    $('.e').hide();
                }
            });
        });
    },
    data () {
        return {
            heading : "Administrator - Sprout",
            options: '',
            options2: '',
            employee_id: '',
            description: '',
            leave_type_id: '',
            mode: '',
            typeid: '',
            counter: 1,
            duration: '',
            meetingtypeinsert: '',
            meetingtypeedit: '',
            status: '',
            reason: '',
            department_id: '',
            department_name: '',
            name:'',
            employeename:'',
            type:'',

            comment_manager: '',
            nextactivity: "Allocation Request / New",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:"",
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
            tablefooter: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",

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
                    "url": "/sales/request_quotation_inner"
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
                    "url": "/sales/request_quotation_inner"

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
                    "url": "/sales/request_quotation_inner"
                },

            }
        }
    },
    methods: {
        submits: function () {
            var self = this;

            self.$http.post("/leaves/meeting_type", {"meetingtype": self.meetingtypeinsert}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/leaves/confitable2", { "id": self.meeting_type
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){
            });
        },
        submitss: function () {
            var self = this;
            self.$http.post("/leaves/meeting_typeedit", {"id": self.meeting_type,"meetingtype": self.meetingtypeedit}).then(function(res){
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/leaves/confitable2", { "id": self.meeting_type
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){
            });
        },
        selectmeetings: function () {
            var self = this;
            self.$http.post("/leaves/selectmeetingtypemodal", { "id": self.meeting_type
            }).then(function(res){
                var parentdata = res.body.data[0];
                self.meetingtypeedit = parentdata.meeting_type_name;
                console.log(res.body);
            },function(err){
            });
        },
        submit: function () {
            var self = this;

            self.$http.post("/leaves/leaveedit", {"ids": self.typeid,"color_in_report": self.color_in_report,"type": self.type,"apply_double_validation": self.apply_double_validation,"allow_override_limit": self.allow_override_limit,"meeting_type": self.meeting_type,"active": self.active}).then(function(res){
                console.log(res.body);
            },function(err){

            });
            // self.$http.post("/recruitment/leaveallocationinsert", {"comment_manager": self.comment_manager,"description": self.description,"leave_type_id": self.leave_type_id,"mode": self.mode,"duration": self.duration,"department_id": self.department_id,"employee_id": self.employee_id}).then(function(res){
            //     console.log(res.body);
            // },function(err){
            //
            // });
        },
        select1: function () {
            var self = this;
            self.$http.post("/leaves/numleavestype", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {

            });
        },
        select2: function () {
            var self = this;
            self.$http.post("/leaves/confitable2", {
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/leaves/leave", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.apply_double_validation = parentdata.apply_double_validation.data;
                self.typeid = parentdata.id;
                self.type = parentdata.type;
                self.allow_override_limit = parentdata.allow_override_limit.data;
                self.meeting_type = parentdata.meeting_type;
                self.color_in_report = parentdata.color_in_report;
                self.active = parentdata.active.data;
                console.log(parentdata);
            }, function (err) {

            });
        },
        ssubmit: function () {
            var self = this;
            self.$http.post("/leaves/leave_type_perivious", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.apply_double_validation = parentdata.apply_double_validation.data;
                self.type = parentdata.type;
                self.allow_override_limit = parentdata.allow_override_limit.data;
                self.meeting_type = parentdata.meeting_type;
                self.color_in_report = parentdata.color_in_report;
                self.active = parentdata.active.data;
                self.$route.params.id = parentdata.id;
                console.log(parentdata);
            }, function (err) {

            });
        },
        psubmit: function () {
            var self = this;
            self.$http.post("/leaves/leaves", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.apply_double_validation = parentdata.apply_double_validation.data;
                self.type = parentdata.type;
                self.allow_override_limit = parentdata.allow_override_limit.data;
                self.meeting_type = parentdata.meeting_type;
                self.color_in_report = parentdata.color_in_report;
                self.active = parentdata.active.data;
                self.$route.params.id = parentdata.id;
                console.log(parentdata);
            }, function (err) {

            });
        },
        // selectcontacts: function () {
        //     var self = this;
        //     //alert(self.companyName);
        //     self.$http.post("/recruitment/selectdepname", {
        //         "id": self.employee_id,
        //     }).then(function(res){
        //         var parentdata = res.body.data[0];
        //         self.department_id = parentdata.department_id;
        //         console.log(self.department_id);
        //         self.$http.post("/recruitment/selectdepleave", {
        //             "id": self.department_id,
        //         }).then(function(res){
        //             var parentdata = res.body.data[0];
        //             self.department_name = parentdata.name;
        //             console.log(self.department_name);
        //
        //         },function(err){
        //             alert(err);
        //         });
        //     },function(err){
        //         alert(err);
        //     });
        // },
        // select: function () {
        //     var self = this;
        //     self.$http.post("/recruitment/confitable", {
        //     }).then(function(res){
        //         self.options =res.body.data;
        //         console.log(res.body);
        //     },function(err){
        //         alert(err);
        //     });
        //
        //     self.$http.post("/recruitment/selectemployee", {
        //     }).then(function(res){
        //         self.options2 =res.body.data;
        //         console.log(res.body);
        //     },function(err){
        //         alert(err);
        //     });
        //
        //
        //     //console.log(this.$route.query.id);
        //     // self.$http.post("/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
        //     //         var data = res.body.data[0];
        //     //         self.j = data.name;
        //     //         //console.log(self.job_tittle);
        //     //         console.log(res.body);
        //     //         self.$http.post("/manager", {"manager_id":self.manager_id}).then(function (res) {
        //     //                 var data = res.body.data[0];
        //     //                 self.d = data.employeename;
        //     //                 //console.log(self.job_tittle);
        //     //
        //     //                 console.log(res.body);
        //     //
        //     //
        //     //             },
        //     //
        //     //             function (err) {
        //     //                 alert(err);
        //     //             });
        //     //     },
        //
        //
        //     // function (err) {
        //     //     alert(err);
        //     // });
        //
        //
        //
        //
        //
        // },

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

            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },


    components: {
        TableMain,
        Modal,
        Request_quotation_lower,
        DashboardController,
        leaveallocationRequest,
        leavetype_create,
    }
}