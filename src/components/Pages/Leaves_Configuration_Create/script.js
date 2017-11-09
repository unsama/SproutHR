import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ReqEdit from "./../../partials/ReqEdit/ReqEdit.vue"
import leavetype_create from "./../../partials/leavetype_create/leavetype_create.vue"
export default{
    created: function () {
        var self = this;
        this.select();
        $(function() {
            $("#success-alert").hide();
            $("#save").click(function () {
                if(self.type=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "../leaves/leaves_configuration";
                    self.submit();
                }
                // var r = confirm("Are you sure you want to  Insert New  leave type");
                // if (r)
                // {
                //     window.location.href = "../leaves/leaves_configuration";
                //     self.submit();
                // }
                // else
                // {
                // }
            });
            // $("#savemodal").click(function () {
            //     self.submit1();
            // });
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
        });
    },
    props: [
        "edit",
    ],
    data () {
        return {
            nextactivity: "Departments/New",
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
            name: '',
            parent_dept_id: '',
            manager_id: '',
            j: '',
            d: '',
            meetingtype: '',
            modal: "Open: Meeting Type",
            apply_double_validation:0,
            allow_override_limit:0,
            meeting_type:0,
            color_in_report:'',
            active:0,
            type:'',
            names: '',
            meetingtypeinsert: '',
            options: '',
            meetingtypeedit: '',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/leaves/leaves_configuration",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/leaves/leaveinsert", {"color_in_report": self.color_in_report,"type": self.type,"apply_double_validation": self.apply_double_validation,"allow_override_limit": self.allow_override_limit,"meeting_type": self.meeting_type,"active": self.active}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
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
        select: function () {
            var self = this;
                self.$http.post("/leaves/confitable2", {
                }).then(function(res){
                    self.options =res.body.data;
                    console.log(res.body);
                },function(err){

                });
                //console.log(this.$route.query.id);
                // self.$http.post("/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                //         var data = res.body.data[0];
                //         self.j = data.name;
                //         //console.log(self.job_tittle);
                //         console.log(res.body);
                //         self.$http.post("/manager", {"manager_id":self.manager_id}).then(function (res) {
                //                 var data = res.body.data[0];
                //                 self.d = data.employeename;
                //                 //console.log(self.job_tittle);
                //
                //                 console.log(res.body);
                //
                //
                //             },
                //
                //             function (err) {
                //                 alert(err);
                //             });
                //     },
                // function (err) {
                //     alert(err);
                // });
        },
        selectmeeting: function () {
            var self = this;
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
        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {
            }).catch(() => {
            });
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
        leavetype_create,
        ReqEdit,
    },


}