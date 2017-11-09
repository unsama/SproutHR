import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        var self = this;
        this.select();
        var del = []; // initialize empty arrays
        $(function () {


            $(".delete").click(function () {
                self.delete();
                self.select();
            });

            $("#action").hide();
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
            });


            self.btnlinks.editbtnlink ="/leaves/leaves_configuration_edit/"+self.$route.params.id
        })
    },
    data () {
        return {
            nextactivity: "Leave Types",
            title: "Leave Types - Sprout",
            num: '',
            names: [],
            checkedNames: [],
            counter: 0,
            btnlinks: {
                createbtnlink:"/leaves/leaves_configuration_create",
                importbtnlink:"/leaves/leaves_configuration_import",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
            tableheader: [
                "ID",
                "Leave type",
                "Allow To Override Limit",
            ],
            tablefooter: [
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "[FURN001] Computer Desks",
                    ],
                    "url": "/leaves/leaves_configuration_table",
                    "checkbox":true,
                },
                "row1": {
                    "data": [
                        "[FURN001] Computer Desk",
                    ],
                    "url": "/leaves/leaves_configuration_table",
                    "checkbox":true,
                },
                "row2": {
                    "data": [
                        "[FURN001] Computer Desk",
                    ],
                    "url": "/leaves/leaves_configuration_table",
                    "checkbox":true,
                },
                "row3": {
                    "data": [
                        "[FURN001] Computer Desk",
                    ],
                    "url": "/leaves/leaves_configuration_table",
                    "checkbox":true,

                },

            }
        }
    },
    methods: {
        delete: function (del) {
            var self = this;
            console.log("a"+del);
            self.$http.post("/leaves/delete_leaves", {"delete_items": self.checkedNames}).then(function(res){
            },function(err){
            });
            // self.$http.post("/leaves/delete_leaves", {"delete_items": del}).then(function(res){
            // },function(err){
            // });
        },
        select3: function () {
            var self = this;
            self.counter+=10;
            self.$http.post("/leaves/confitableback", { "counter": self.counter}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
            // self.$http.post("/leaves/confitablenext", {
            //     "counter": self.counter,
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.type,
            //                 ],
            //                 "url": "/leaves/leaves_configuration_table/"+val.id,
            //                 "checkbox":true,
            //
            //             });
            //             console.log(data);
            //         });
            //     }
            //
            // },function(err){
            // });
        },
        select4: function () {
            var self = this;
            self.counter-=10;
            self.$http.post("/leaves/confitableback", { "counter": self.counter}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
            // self.$http.post("/leaves/confitableback", {
            //     "counter": self.counter,
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.type,
            //                 ],
            //                 "url": "/leaves/leaves_configuration_table/"+val.id,
            //                 "checkbox":true,
            //
            //             });
            //             console.log(data);
            //         });
            //     }
            //
            // },function(err){
            //
            // });
        },
        select45: function () {
            var self = this;
            self.counter=self.counter+2;
        },
        ssubmit: function () {
            var self = this;
            self.$http.post("/leaves/confitablenext", {
                "id": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.type,
                            ],
                            "url": "/leaves/leaves_configuration_table/"+val.id,
                            "checkbox":true,
                        });
                        console.log(data);
                    });
                }
            },function(err){
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
        select: function () {
            var self = this;
            self.$http.post("/leaves/confitable", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
            console.log(this.$route.query.id);
            console.log(self.job_specific);
            // self.$http.post("/leaves/confitable", {
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.type,
            //
            //                 ],
            //                 "url": "/leaves/leaves_configuration_table/"+val.id,
            //                 "checkbox":true,
            //
            //             });
            //             console.log(data);
            //         });
            //     }
            // },function(err){
            //
            // });
            self.$http.post("/leaves/numleavestype", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {

            });

        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                // this.submiting();

            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}