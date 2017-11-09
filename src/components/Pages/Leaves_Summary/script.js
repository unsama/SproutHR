import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        var self = this;
        this.select();
        this.select1();
        var del = []; // initialize empty arrays
        $(function(){
            $("#action").hide();
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
            });
            $(".delete").click(function () {
                self.delete();
                self.select();
            });
        });
    },
    data () {
        return {
            nextactivity: "Allocation Requests",
            num: '',
            nums: '',
            sum: '',
            names: [],
            checkedNames: [],
            counter: 0,
            btnlinks: {
                createbtnlink:"/leaves/leave_summary_create",
                importbtnlink:"/leaves/leave_summary_import",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
            tableheader: [
                "ID",
                "Employees",
                "Allocation Mode",
                "Leave type",
                "Description",
                "Allocated Days",
                "Start Date",
                "End Date",
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
                "",
                "",
            ],
            tabledata: {
                "row": {
                },
            }
        }
    },
    methods: {
        delete: function (del) {
            var self = this;
            console.log("a"+del);
            self.$http.post("/leaves/delete_allocation", {"delete_items": self.checkedNames}).then(function(res){

                //console.log(res.body);
            },function(err){
                //alert(err);
            });

        },
        select3: function () {
            var self = this;
            self.counter+=10;
            // self.$http.post("/leaves/allocationrequesttablenext", {
            //     "counter": self.counter,
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.employeename,
            //                     val.MODE,
            //                     val.type,
            //                     val.description,
            //                     val.duration,
            //                     val.date_from,
            //                     val.date_to,
            //                     val.status,
            //                 ],
            //                 "url": "/leaves/Department_leave_select/"+val.id,
            //             });
            //             console.log(data);
            //         });
            //     }
            //
            // },function(err){
            //
            // });
            self.$http.post("/leaves/allocationrequesttablenext", { "counter": self.counter}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
        },
        select4: function () {
            var self = this;
            self.counter-=10;
            self.$http.post("/leaves/allocationrequesttableback", { "counter": self.counter}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
            // self.$http.post("/leaves/allocationrequesttableback", {
            //     "counter": self.counter,
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.employeename,
            //                     val.MODE,
            //                     val.type,
            //                     val.description,
            //                     val.duration,
            //                     val.date_from,
            //                     val.date_to,
            //                     val.status,
            //                 ],
            //                 "url": "/leaves/Department_leave_select/"+val.id,
            //             });
            //             console.log(data);
            //         });
            //     }
            //
            // },function(err){
            //
            // });
        },
        select1: function () {
            var self = this;
            self.$http.post("/leaves/leave_allocaion_num", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/leaves/allocationrequesttable", { "counter": self.counter}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
            self.$http.post("/leaves/leave_allocaion_nums", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.nums = parentdata.count;
            }, function (err) {

            });
            // self.$http.post("/leaves/allocationrequesttable", {
            //     "name": self.options,
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.employeename,
            //                     val.MODE,
            //                     val.type,
            //                     val.description,
            //                     val.duration,
            //                     val.date_from,
            //                     val.date_to,
            //                     val.status,
            //                 ],
            //                 "url": "/leaves/leaves_select/"+val.id,
            //             });
            //             console.log(data);
            //         });
            //     }
            //
            // },function(err){
            //
            // });
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
// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import Leaves_Accordion from "./../../partials/Leaves_Accordion/Leaves_Accordion.vue"
//
// export default{
//     created: function () {
//         document.title = this.title;
//     },
//     data () {
//         return {
//             nextactivity: "Leaves Summary",
//             btnlinks: {
//                 createbtnlink:"/leaves/leave_summary_create",
//                 importbtnlink:"/leaves/leave_summary_import"
//             },
//             tableheader: [
//                 "Employees",
//                 "Allocation Mode",
//                 "Employees Tag",
//                 "Leave type",
//                 "Description",
//                 "Allocated Days",
//                 "Start Date",
//                 "End Date",
//                 "Status",
//
//
//
//             ],
//             tabledata: {
//                 "row": {
//                     "data": [
//                         "MO/00003",
//                         "02/18/2017 18:26:08",
//                         "[FURN001] Computer Desk",
//                         "1.000",
//                         "Waiting",
//                         "",
//                         "Confirmed",
//                         "Confirmed",
//                         "Confirmed",
//
//
//
//                     ],
//                     "url": "/inventory/inventory_adjustments_table"
//
//                 },
//                 "row1": {
//                     "data": [
//                         "MO/00003",
//                         "02/18/2017 18:26:08",
//                         "[FURN001] Computer Desk",
//                         "1.000",
//                         "Waiting",
//                         "",
//                         "Confirmed",
//                         "Confirmed",
//                         "Confirmed",
//
//
//
//                     ],
//                     "url": "/inventory/inventory_adjustments_table"
//
//                 },
//                 "row2": {
//                     "data": [
//                         "MO/00003",
//                         "02/18/2017 18:26:08",
//                         "[FURN001] Computer Desk",
//                         "1.000",
//                         "Waiting",
//                         "",
//                         "Confirmed",
//                         "Confirmed",
//                         "Confirmed",
//
//
//
//                     ],
//                     "url": "/inventory/inventory_adjustments_table"
//
//                 },
//
//             }
//         }
//     },
//
//
//     components: {
//         DashboardController,
//         Leaves_Accordion
//     }
// }