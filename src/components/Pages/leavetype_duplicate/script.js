import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ReqEdit from "./../../partials/ReqEdit/ReqEdit.vue"
import leavetype_create from "./../../partials/leavetype_create/leavetype_create.vue"
export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();
        this.select2();
        $(function() {

            $("#save").click(function () {
                if(self.type=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "../leaves_configuration";
                    self.submit();
                }

            });
            self.btnlinks.discardbtnlink = "/leaves/leaves_configuration";
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
            $("#save").click(function () {
                self.submit();
            });
            $("#num01").click(function () {
                self.psubmit();

            });
            $("#num10").click(function () {
                self.ssubmit();
            });
        });
    },
    props: [
        "edit",
    ],
    data () {
        return {
            nextactivity: "Departments/New",
            a:'',
            type:'',
            num:'',
            counter: 1,
            apply_double_validation:'',
            allow_override_limit:'',
            meeting_type:'',
            color_in_report:'',
            active:'',
            meetingtypeedit: '',
            meetingtypeinsert: '',
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
            names: '',
            options2: '',
            options: '',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/DepsReq",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
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
        submit: function () {
            var self = this;
            self.$http.post("/leaves/leaveinsert", {"color_in_report": self.color_in_report,"type": self.type,"apply_double_validation": self.apply_double_validation,"allow_override_limit": self.allow_override_limit,"meeting_type": self.meeting_type,"active": self.active}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/leaves/numleavestype", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {
                alert(err);
            });
        },
        select2: function () {
            var self = this;
            self.$http.post("/leaves/confitable2", {
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){
                alert(err);
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
        select: function () {
            var self = this;
            self.$http.post("/leaves/leave", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.apply_double_validation = parentdata.apply_double_validation.data;
                self.type = parentdata.type;
                self.allow_override_limit = parentdata.allow_override_limit.data;
                self.meeting_type = parentdata.meeting_type;
                self.color_in_report = parentdata.color_in_report;
                self.active = parentdata.active.data;
                console.log(parentdata);
            }, function (err) {
                alert(err);
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
                alert(err);
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
                alert(err);
            });
        },
        select3: function () {
            var self = this;
            self.num4+1;
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
        leavetype_create,
        ReqEdit,
    },
}