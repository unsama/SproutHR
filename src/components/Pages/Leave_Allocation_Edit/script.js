import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import leaveallocationRequest from "./../../partials/leaveallocationRequest/leaveallocationRequest.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        document.title = this.title;
        var self = this;
        this.select();
        this.select1();
        $(function(){
            $("#one").click(function () {
                if($(this).prop('checked')){
                    self.apply_double_validation1=1;
                }else{
                    self.apply_double_validation1=0;
                }
            });
            $("#two").click(function () {
                if($(this).prop('checked')){
                    self.allow_override_limit1=1;
                }else{
                    self.allow_override_limit1=0;
                }
            });
            $("#three").click(function () {
                if($(this).prop('checked')){
                    self.active1=1;
                }else{
                    self.active1=0;
                }
            });
            $(".dept_dropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){
                    $(".bd-example-modal-lg1").modal('show');
                }
            });
            $('#abcs').on('change',function(){
                var ab = $('#abcs option:selected').val();
                if(ab== null){
                    $('#ss').hide();
                }
                else{
                    $('#ss').show();
                }
            });
            $(document).ready(function(){
                $("#a").click(function(){
                    $("#a").hide();
                    document.getElementById("aprroved").classList.add("oe_active");
                    document.getElementById("toapprrove").classList.remove("oe_active");
                    document.getElementById("submit").classList.remove("oe_active");
                    document.getElementById("resused").classList.remove("oe_active");

                });

                $("#a").click(function(){
                    $("#d").hide();

                });
                $("#d").click(function(){
                    $("#c").show();

                });
                $("#d").click(function(){
                    $("#resused").hide();
                    $("#d").hide();
                    document.getElementById("submit").classList.add("oe_active");
                    document.getElementById("toapprrove").classList.remove("oe_active");
                    document.getElementById("aprroved").classList.remove("oe_active");
                    document.getElementById("resused").classList.remove("oe_active");
                });
                $("#c").click(function(){
                    $("#resused").hide();
                    document.getElementById("toapprrove").classList.add("oe_active");
                    document.getElementById("submit").classList.remove("oe_active");
                    document.getElementById("aprroved").classList.remove("oe_active");
                    document.getElementById("resused").classList.remove("oe_active");
                });
                $("#q").click(function(){
                    $("#a").hide();
                    $('#resused').show();
                    document.getElementById("resused").classList.add("oe_active");
                    document.getElementById("toapprrove").classList.remove("oe_active");
                    document.getElementById("submit").classList.remove("oe_active");
                    document.getElementById("aprroved").classList.remove("oe_active");

                });
                $("#c").click(function(){

                    $("#a").show();

                });
                $("#c").click(function(){
                    $("#d").show();


                });
                $("#c").click(function(){

                    $("#c").hide();

                });
                $("#c").click(function(){
                    $("#q").show();

                });
                $("#q").click(function(){
                    $("#q").hide();

                });
                $("#q").click(function(){
                    $("#d").show();
                });
                $("#ab").click(function(){
                    $("#ab").hide();

                });
                $("#ab").click(function(){
                    $("#b").show();
                });
                $("#b").click(function(){
                    $("#b").hide();

                });
                $("#b").click(function(){
                    $("#ab").show();
                });
            });
            $('#r').hide();
            $("#save").click(function () {
                if(self.leave_type_id=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "../leave_allocation_table/"+self.$route.params.id;
                    self.submit();
                }
            });
            self.btnlinks.discardbtnlink = "/leaves/leave_allocation_table/"+self.$route.params.id;
            $("#num01").click(function () {

                self.psubmit();

            });
            $("#num10").click(function () {
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
            apply_double_validation1: '',
            allow_override_limit1: '',
            active1: '',
            color_in_report1: '',
            meeting_type1: '',
            options2: '',
            options7: '',
            employee_id: '',
            description: '',
            counter: 1,
            leave_type_id: '',
            mode: '',
            duration: '',
            status: '',
            employee_tag_id: '',
            num: '',
            test: '',
            reason: '',
            department_id: '',
            department_name: '',
            comment_manager: '',
            nextactivity: "Allocation Request / New",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:"/leaves/leaves_allocation",
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
        select13: function () {
            var self = this;
            self.$http.post("/leaves/leave", {"id": self.leave_type_id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.apply_double_validation1 = parentdata.apply_double_validation.data;
                self.typeid = parentdata.id;
                self.type1 = parentdata.type;
                self.allow_override_limit1 = parentdata.allow_override_limit.data;
                self.meeting_type1 = parentdata.meeting_type;
                self.color_in_report1 = parentdata.color_in_report;
                self.active1 = parentdata.active.data;
                console.log(parentdata);
            }, function (err) {

            });
        },
        submitmodal: function () {
            var self = this;
            self.$http.post("/leaves/leaveinsert", {"id": self.leave_type_id,"color_in_report": self.color_in_report,"type": self.type,"apply_double_validation": self.apply_double_validation,"allow_override_limit": self.allow_override_limit,"meeting_type": self.meeting_type,"active": self.active}).then(function(res){
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/leaves/confitableall", {
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
        },
        submitmodaledit: function () {
            var self = this;
            self.$http.post("/leaves/leaveedit", {"ids": self.leave_type_id,"color_in_report": self.color_in_report1,"type": self.type1,"apply_double_validation": self.apply_double_validation1,"allow_override_limit": self.allow_override_limit1,"meeting_type": self.meeting_type1,"active": self.active1}).then(function(res){
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/leaves/confitableall", {
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });

        },
        select13: function () {
            var self = this;
            self.$http.post("/leaves/leave", {"id": self.leave_type_id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.apply_double_validation1 = parentdata.apply_double_validation.data;
                self.typeid = parentdata.id;
                self.type1 = parentdata.type;
                self.allow_override_limit1 = parentdata.allow_override_limit.data;
                self.meeting_type1 = parentdata.meeting_type;
                self.color_in_report1 = parentdata.color_in_report;
                self.active1 = parentdata.active.data;
                console.log(parentdata);
            }, function (err) {

            });
        },
        submitmodal: function () {
            var self = this;
            self.$http.post("/leaves/leaveinsert", {"id": self.leave_type_id,"color_in_report": self.color_in_report,"type": self.type,"apply_double_validation": self.apply_double_validation,"allow_override_limit": self.allow_override_limit,"meeting_type": self.meeting_type,"active": self.active}).then(function(res){
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/leaves/confitableall", {
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
        },
        submitmodaledit: function () {
            var self = this;
            self.$http.post("/leaves/leaveedit", {"ids": self.leave_type_id,"color_in_report": self.color_in_report1,"type": self.type1,"apply_double_validation": self.apply_double_validation1,"allow_override_limit": self.allow_override_limit1,"meeting_type": self.meeting_type1,"active": self.active1}).then(function(res){
                console.log(res.body);
            },function(err){

            });

        },
        submit3: function (id) {
            var self = this;
            self.test=id;

        },
        submit: function () {
            var self = this;
            self.$http.post("/leaves/leave_allcation_edit", {"employee_tag_id": self.employee_tag_id,"test": self.test,"id": self.$route.params.id,"comment_manager": self.comment_manager,"description": self.description,"leave_type_id": self.leave_type_id,"mode": self.mode,"duration": self.duration,"department_id": self.department_id,"employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/leaves/leave_allocaion_num", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {

            });
        },
        selectcontacts: function () {
            var self = this;

            self.$http.post("/leaves/selectdepname", {
                "id": self.employee_id,
            }).then(function(res){
                var parentdata = res.body.data[0];
                self.department_id = parentdata.department_id;
                console.log(self.department_id);
                self.$http.post("/leaves/selectdepleave", {
                    "id": self.department_id,
                }).then(function(res){
                    var parentdata = res.body.data[0];
                    self.department_name = parentdata.name;
                    console.log(self.department_name);
                },function(err){

                });
            },function(err){

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/leaves/confitableall", {
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/leaves/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/leaves/confitableinfo", {
            }).then(function(res){
                self.options7 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/leaves/confitableinfo", {
            }).then(function(res){
                self.options7 =res.body.data;
                console.log(res.body);
            },function(err){

            });

            self.$http.post("/leaves/selectemployee", {
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/leaves/leaverequestselect", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.description = parentdata.description;
                self.leave_type_id = parentdata.leave_type_id;
                self.mode = parentdata.mode;
                self.duration = parentdata.duration;
                self.employee_id = parentdata.employee_id;
                self.department_id = parentdata.department_id;
                self.comment_manager = parentdata.comment_manager;
                console.log(parentdata);
                self.$http.post("/leaves/selectleavedep", {"id": self.department_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.department_name = parentdata.department_name;
                    console.log(parentdata);
                    self.$http.post("/leaves/selectleaveemp", {"id": self.employee_id}).then(function (res) {
                        var parentdata = res.body.data[0];
                        self.employeename = parentdata.employeename;
                        console.log(parentdata);
                        self.$http.post("/leaves/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
                            var parentdata = res.body.data[0];
                            self.type = parentdata.type;
                            console.log(parentdata);

                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });
        },
        ssubmit: function () {
            var self = this;
            self.$http.post("/leaves/leave_allocation_perivious", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.description = parentdata.description;
                self.leave_type_id = parentdata.leave_type_id;
                self.mode = parentdata.mode;
                self.duration = parentdata.duration;
                self.employee_id = parentdata.employee_id;
                self.department_id = parentdata.department_id;
                self.comment_manager = parentdata.comment_manager;
                self.$route.params.id = parentdata.id;
                console.log(parentdata);
                self.$http.post("/leaves/selectleavedep", {"id": self.department_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.name = parentdata.name;
                    console.log(parentdata);
                    self.$http.post("/leaves/selectleaveemp", {"id": self.employee_id}).then(function (res) {
                        var parentdata = res.body.data[0];
                        self.employeename = parentdata.employeename;
                        console.log(parentdata);
                        self.$http.post("/leaves/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
                            var parentdata = res.body.data[0];
                            self.type = parentdata.type;
                            console.log(parentdata);

                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });
        },
        psubmit: function () {
            var self = this;
            self.$http.post("/leaves/leave_allocation_next", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.description = parentdata.description;
                self.leave_type_id = parentdata.leave_type_id;
                self.mode = parentdata.mode;
                self.duration = parentdata.duration;
                self.employee_id = parentdata.employee_id;
                self.department_id = parentdata.department_id;
                self.comment_manager = parentdata.comment_manager;
                self.$route.params.id = parentdata.id;
                console.log(parentdata);
                self.$http.post("/leaves/selectleavedep", {"id": self.department_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.name = parentdata.name;
                    console.log(parentdata);
                    self.$http.post("/leaves/selectleaveemp", {"id": self.employee_id}).then(function (res) {
                        var parentdata = res.body.data[0];
                        self.employeename = parentdata.employeename;
                        console.log(parentdata);
                        self.$http.post("/leaves/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
                            var parentdata = res.body.data[0];
                            self.type = parentdata.type;
                            console.log(parentdata);

                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

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
        TableMain,
        Modal,
        Request_quotation_lower,
        DashboardController,
        leaveallocationRequest,
    }
}
// import TableMain from "./../../partials/TableMain/TableMain.vue"
// import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import leaveallocationRequest from "./../../partials/leaveallocationRequest/leaveallocationRequest.vue"
// import Modal from "./../../partials/Modal/Modal.vue"
//
// export default{
//     created: function () {
//         document.title = this.title;
//         var self = this;
//         this.select();
//         this.select1();
//         $(function(){
//             $("#one").click(function () {
//                 if($(this).prop('checked')){
//                     self.apply_double_validation1=1;
//                 }else{
//                     self.apply_double_validation1=0;
//                 }
//             });
//             $("#two").click(function () {
//                 if($(this).prop('checked')){
//                     self.allow_override_limit1=1;
//                 }else{
//                     self.allow_override_limit1=0;
//                 }
//             });
//             $("#three").click(function () {
//                 if($(this).prop('checked')){
//                     self.active1=1;
//                 }else{
//                     self.active1=0;
//                 }
//             });
//             $(".dept_dropdown").on('change',function(){
//                 var value = $(this).val();
//                 if(value=="Create and Edit"){
//                     $(".bd-example-modal-lg1").modal('show');
//                 }
//             });
//             $('#abcs').on('change',function(){
//                 var ab = $('#abcs option:selected').val();
//                 if(ab== null){
//                     $('#ss').hide();
//                 }
//                 else{
//                     $('#ss').show();
//                 }
//             });
//             $(document).ready(function(){
//                 $("#a").click(function(){
//                     $("#a").hide();
//                     document.getElementById("aprroved").classList.add("oe_active");
//                     document.getElementById("toapprrove").classList.remove("oe_active");
//                     document.getElementById("submit").classList.remove("oe_active");
//                     document.getElementById("resused").classList.remove("oe_active");
//                 });
//                 $("#d").click(function(){
//                     $("#resused").hide();
//                     document.getElementById("submit").classList.add("oe_active");
//                     document.getElementById("toapprrove").classList.remove("oe_active");
//                     document.getElementById("aprroved").classList.remove("oe_active");
//                     document.getElementById("resused").classList.remove("oe_active");
//                 });
//                 $("#a").click(function(){
//                     $("#d").hide();
//                 });
//                 $("#q").click(function(){
//                     $("#a").hide();
//                     $('#resused').show();
//                     document.getElementById("resused").classList.add("oe_active");
//                     document.getElementById("toapprrove").classList.remove("oe_active");
//                     document.getElementById("submit").classList.remove("oe_active");
//                     document.getElementById("aprroved").classList.remove("oe_active");
//                 });
//                 $("#q").click(function(){
//                     $("#q").hide();
//                 });
//                 $("#q").click(function(){
//                     $("#d").show();
//                 });
//             });
//             $('#r').hide();
//
//             $("#save").click(function () {
//                 var r = confirm("Are you sure update Allocation Request");
//                 if (r)
//                 {
//                     // x="You pressed OK!";
//                     //console.log("asdasdas");
//                     window.location.href = "../leave_allocation_table/"+self.$route.params.id;
//                     self.submit();
//                 }
//                 else
//                 {
//
//                 }
//             });
//             self.btnlinks.discardbtnlink = "/leaves/leave_allocation_table/"+self.$route.params.id;
//             $("#num01").click(function () {
//                 self.ssubmit();
//
//             });
//             $("#num10").click(function () {
//                 self.psubmit();
//             });
//
//             $('#o_field_input_105').on('change',function(){
//                 var ab = $('#o_field_input_105 option:selected').val();
//                 if(ab=="employee"){
//                     $('.e').show();
//                     $('#r').hide();
//                 }
//                 else
//                 {
//                     $('#r').show();
//                     $('.e').hide();
//                 }
//             });
//
//         });
//     },
//     data () {
//         return {
//             heading : "Administrator - Sprout",
//             options: '',
//             options3: '',
//             options7: '',
//             employee_tag_id: '',
//             apply_double_validation1: '',
//             allow_override_limit1: '',
//             active1: '',
//             color_in_report1: '',
//             meeting_type1: '',
//             options2: '',
//             employee_id: '',
//             description: '',
//             counter: 1,
//             leave_type_id: '',
//             mode: '',
//             duration: '',
//             status: '',
//             num: '',
//             test: '',
//             reason: '',
//             department_id: '',
//             department_name: '',
//             comment_manager: '',
//             nextactivity: "Allocation Request / New",
//             btnlinks: {
//                 savebtnlink:"",
//                 discardbtnlink:"/leaves/leaves_allocation",
//             },
//             tableheader: [
//                 "Reference",
//                 "Destination Location Zone",
//                 "Partner",
//                 "Schduled Date",
//                 "Source Document",
//                 "Back Order Of",
//                 "Status",
//
//             ],
//             tablefooter: [
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//
//             ],
//             tabledata: {
//                 "row": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/sales/request_quotation_inner"
//                 },
//                 "row1": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//                     ],
//                     "url": "/sales/request_quotation_inner"
//                 },
//                 "row2": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//                     ],
//                     "url": "/sales/request_quotation_inner"
//                 },
//
//             }
//         }
//     },
//     methods: {
//         select13: function () {
//             var self = this;
//             self.$http.post("/recruitment/leave", {"id": self.leave_type_id}).then(function (res) {
//                 var parentdata = res.body.data[0];
//                 self.apply_double_validation1 = parentdata.apply_double_validation.data;
//                 self.typeid = parentdata.id;
//                 self.type1 = parentdata.type;
//                 self.allow_override_limit1 = parentdata.allow_override_limit.data;
//                 self.meeting_type1 = parentdata.meeting_type;
//                 self.color_in_report1 = parentdata.color_in_report;
//                 self.active1 = parentdata.active.data;
//                 console.log(parentdata);
//             }, function (err) {
//
//             });
//         },
//         submitmodal: function () {
//             var self = this;
//             self.$http.post("/recruitment/leaveinsert", {"id": self.leave_type_id,"color_in_report": self.color_in_report,"type": self.type,"apply_double_validation": self.apply_double_validation,"allow_override_limit": self.allow_override_limit,"meeting_type": self.meeting_type,"active": self.active}).then(function(res){
//                 console.log(res.body);
//             },function(err){
//             });
//             self.$http.post("/recruitment/confitableall", {
//             }).then(function(res){
//                 self.options =res.body.data;
//                 console.log(res.body);
//             },function(err){
//             });
//         },
//         submitmodaledit: function () {
//             var self = this;
//             self.$http.post("/recruitment/leaveedit", {"ids": self.leave_type_id,"color_in_report": self.color_in_report1,"type": self.type1,"apply_double_validation": self.apply_double_validation1,"allow_override_limit": self.allow_override_limit1,"meeting_type": self.meeting_type1,"active": self.active1}).then(function(res){
//                 console.log(res.body);
//             },function(err){
//
//             });
//             self.$http.post("/recruitment/confitableall", {
//             }).then(function(res){
//                 self.options =res.body.data;
//                 console.log(res.body);
//             },function(err){
//             });
//         },
//         submit3: function (id) {
//             var self = this;
//             self.test=id;
//         },
//         submit: function () {
//             var self = this;
//             self.$http.post("/recruitment/leave_allcation_edit", {"employee_tag_id": self.employee_tag_id,"test": self.test,"id": self.$route.params.id,"comment_manager": self.comment_manager,"description": self.description,"leave_type_id": self.leave_type_id,"mode": self.mode,"duration": self.duration,"department_id": self.department_id,"employee_id": self.employee_id}).then(function(res){
//                 console.log(res.body);
//             },function(err){
//
//             });
//         },
//         select1: function () {
//             var self = this;
//             self.$http.post("/recruitment/leave_allocaion_num", {"id": self.$route.params.id}).then(function (res) {
//                 var parentdata = res.body.data[0];
//                 self.num = parentdata.count;
//             }, function (err) {
//
//             });
//         },
//         selectcontacts: function () {
//             var self = this;
//
//             self.$http.post("/recruitment/selectdepname", {
//                 "id": self.employee_id,
//             }).then(function(res){
//                 var parentdata = res.body.data[0];
//                 self.department_id = parentdata.department_id;
//                 console.log(self.department_id);
//                 self.$http.post("/recruitment/selectdepleave", {
//                     "id": self.department_id,
//                 }).then(function(res){
//                     var parentdata = res.body.data[0];
//                     self.department_name = parentdata.name;
//                     console.log(self.department_name);
//
//                 },function(err){
//
//                 });
//             },function(err){
//
//             });
//         },
//         select: function () {
//             var self = this;
//             self.$http.post("/recruitment/confitableall", {
//             }).then(function(res){
//                 self.options =res.body.data;
//                 console.log(res.body);
//             },function(err){
//
//             });
//             self.$http.post("/recruitment/confitableinfo", {
//             }).then(function(res){
//                 self.options7 =res.body.data;
//                 console.log(res.body);
//             },function(err){
//
//             });
//
//             self.$http.post("/recruitment/selectemployee", {
//             }).then(function(res){
//                 self.options2 =res.body.data;
//                 console.log(res.body);
//             },function(err){
//
//             });
//             self.$http.post("/recruitment/leavess", {"id": self.$route.params.id}).then(function (res) {
//                 var parentdata = res.body.data[0];
//                 self.description = parentdata.description;
//                 self.leave_type_id = parentdata.leave_type_id;
//                 self.mode = parentdata.mode;
//                 self.duration = parentdata.duration;
//                 self.employee_id = parentdata.employee_id;
//                 self.department_id = parentdata.department_id;
//                 self.comment_manager = parentdata.comment_manager;
//                 console.log(parentdata);
//                 self.$http.post("/recruitment/selectleavedep", {"id": self.department_id}).then(function (res) {
//                     var parentdata = res.body.data[0];
//                     self.department_name = parentdata.department_name;
//                     console.log(parentdata);
//                     self.$http.post("/recruitment/selectleaveemp", {"id": self.employee_id}).then(function (res) {
//                         var parentdata = res.body.data[0];
//                         self.employeename = parentdata.employeename;
//                         console.log(parentdata);
//                         self.$http.post("/recruitment/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
//                             var parentdata = res.body.data[0];
//                             self.type = parentdata.type;
//                             console.log(parentdata);
//
//                         }, function (err) {
//
//                         });
//                     }, function (err) {
//
//                     });
//                 }, function (err) {
//
//                 });
//             }, function (err) {
//
//             });
//
//             //console.log(this.$route.query.id);
//             // self.$http.post("/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
//             //         var data = res.body.data[0];
//             //         self.j = data.name;
//             //         //console.log(self.job_tittle);
//             //         console.log(res.body);
//             //         self.$http.post("/manager", {"manager_id":self.manager_id}).then(function (res) {
//             //                 var data = res.body.data[0];
//             //                 self.d = data.employeename;
//             //                 //console.log(self.job_tittle);
//             //
//             //                 console.log(res.body);
//             //
//             //
//             //             },
//             //
//             //             function (err) {
//             //
//             //             });
//             //     },
//
//
//             // function (err) {
//             //     alert(err);
//             // });
//
//
//
//
//
//         },
//         ssubmit: function () {
//             var self = this;
//             self.$http.post("/recruitment/leave_allocation_perivious", {"id": self.$route.params.id}).then(function (res) {
//                 var parentdata = res.body.data[0];
//                 self.description = parentdata.description;
//                 self.leave_type_id = parentdata.leave_type_id;
//                 self.mode = parentdata.mode;
//                 self.duration = parentdata.duration;
//                 self.employee_id = parentdata.employee_id;
//                 self.department_id = parentdata.department_id;
//                 self.comment_manager = parentdata.comment_manager;
//                 self.$route.params.id = parentdata.id;
//                 console.log(parentdata);
//                 self.$http.post("/recruitment/selectleavedep", {"id": self.department_id}).then(function (res) {
//                     var parentdata = res.body.data[0];
//                     self.name = parentdata.name;
//                     console.log(parentdata);
//                     self.$http.post("/recruitment/selectleaveemp", {"id": self.employee_id}).then(function (res) {
//                         var parentdata = res.body.data[0];
//                         self.employeename = parentdata.employeename;
//                         console.log(parentdata);
//                         self.$http.post("/recruitment/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
//                             var parentdata = res.body.data[0];
//                             self.type = parentdata.type;
//                             console.log(parentdata);
//
//                         }, function (err) {
//
//                         });
//                     }, function (err) {
//
//                     });
//                 }, function (err) {
//
//                 });
//             }, function (err) {
//
//             });
//         },
//         psubmit: function () {
//             var self = this;
//             self.$http.post("/recruitment/leave_allocation_next", {"id": self.$route.params.id}).then(function (res) {
//                 var parentdata = res.body.data[0];
//                 self.description = parentdata.description;
//                 self.leave_type_id = parentdata.leave_type_id;
//                 self.mode = parentdata.mode;
//                 self.duration = parentdata.duration;
//                 self.employee_id = parentdata.employee_id;
//                 self.department_id = parentdata.department_id;
//                 self.comment_manager = parentdata.comment_manager;
//                 self.$route.params.id = parentdata.id;
//                 console.log(parentdata);
//                 self.$http.post("/recruitment/selectleavedep", {"id": self.department_id}).then(function (res) {
//                     var parentdata = res.body.data[0];
//                     self.name = parentdata.name;
//                     console.log(parentdata);
//                     self.$http.post("/recruitment/selectleaveemp", {"id": self.employee_id}).then(function (res) {
//                         var parentdata = res.body.data[0];
//                         self.employeename = parentdata.employeename;
//                         console.log(parentdata);
//                         self.$http.post("/recruitment/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
//                             var parentdata = res.body.data[0];
//                             self.type = parentdata.type;
//                             console.log(parentdata);
//
//                         }, function (err) {
//
//                         });
//                     }, function (err) {
//
//                     });
//                 }, function (err) {
//
//                 });
//             }, function (err) {
//
//             });
//         },
//         validateBeforeSubmit() {
//             var self = this;
//             this.$validator.validateAll().then(() => {
//                 // eslint-disable-next-line
//                 //this.submit();
//                 //this.tags();
//                 //this.insert();
//                 //this.select();
//                 //this.insert();
//                 // this.submiting();
//
//             }).catch(() => {
//                 // eslint-disable-next-line
//                 //  alert('Correct them errors!');
//             });
//         }
//     },
//     components: {
//         TableMain,
//         Request_quotation_lower,
//         DashboardController,
//         leaveallocationRequest,
//         Modal,
//     }
// }