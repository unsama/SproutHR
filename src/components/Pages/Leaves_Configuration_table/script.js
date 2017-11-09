import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Message from "./../../partials/Message/Message.vue"
import leave_type from "./../../partials/leave_type/leave_type.vue"

export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();
        document.title = this.title;
        self.btnlinks.duplicatebtnlink ="/leaves/leavetype_duplicate/"+self.$route.params.id
        $(function () {
            $(".delete").click(function () {
                var r = confirm("Are you sure you want to  Delete the Leave Configuration");
                if (r)
                {
                    window.location.href = "/leaves/leaves_configuration";
                    self.submit();
                }
                else
                {

                }
            });

            $("#num01").click(function () {

                self.psubmit();

            });
            $("#num10").click(function () {
                self.ssubmit();
            });
            self.btnlinks.editbtnlink ="/leaves/leaves_configuration_edit/"+self.$route.params.id
        })
    },
    data () {
        return {
            a:'',
            type:'',
            num:'',
            counter: 1,
            apply_double_validation:'',
            allow_override_limit:'',
            meeting_type:'',
            meeting_type1:'',
            color_in_report:'',
            active:'',
            nextactivity: "Leave Type / Unpaid",
            btnlinks: {
                createbtnlink:"/leaves/leaves_configuration_create",
                editbtnlink:"",
                deletedropbtnlink:"",
                duplicatebtnlink:"",

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
        select1: function () {
            var self = this;
            self.$http.post("/leaves/numleavestype", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {

            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/leaves/deleteleaves", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/leaves/leave", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.apply_double_validation = parentdata.apply_double_validation.data;
                self.type = parentdata.type;
                self.allow_override_limit = parentdata.allow_override_limit.data;
                self.meeting_type1 = parentdata.meeting_type;
                self.color_in_report = parentdata.color_in_report;
                self.active = parentdata.active.data;
                console.log(parentdata);
            self.$http.post("/leaves/selectconfigmtype", {"meeting_type1": self.meeting_type1}).then(function (res) {
                var parentdata = res.body.data[0];
                self.meeting_type = parentdata.meeting_type_name;
                console.log(parentdata);
            }, function (err) {

            });
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
                self.meeting_type1 = parentdata.meeting_type;
                self.color_in_report = parentdata.color_in_report;
                self.active = parentdata.active.data;
                self.$route.params.id = parentdata.id;
                console.log(parentdata);
            self.$http.post("/leaves/selectconfigmtype", {"meeting_type1": self.meeting_type1}).then(function (res) {
                var parentdata = res.body.data[0];
                self.meeting_type = parentdata.meeting_type_name;
                console.log(parentdata);
            }, function (err) {

            });
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
                self.meeting_type1 = parentdata.meeting_type;
                self.color_in_report = parentdata.color_in_report;
                self.active = parentdata.active.data;
                self.$route.params.id = parentdata.id;
                console.log(parentdata);
            self.$http.post("/leaves/selectconfigmtype", {"meeting_type1": self.meeting_type1}).then(function (res) {
                var parentdata = res.body.data[0];
                self.meeting_type = parentdata.meeting_type_name;
                console.log(parentdata);
            }, function (err) {

            });
            }, function (err) {

            });
        },
        select3: function () {
            var self = this;
            self.num4+1;
        },

        dsubmit: function () {
            var self = this;
            self.$http.post("/leaves/depinserts", {"f": self.f,"parent_dept_id": self.parent_dept_id,"manager_id": self.manager_id}).then(function(res){
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
        TableMain,
        leave_type,
        Request_quotation_lower,
        DashboardController,
        Message,
    }
}