import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        var self = this;
        this.select();
        this.select1();
        var del = [];
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
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());
                });
                console.log(del);
                self.delete(del);
                self.select();
            });
        });
    },
    data () {
        return {
            num: '',
            counter: 1,
            nextactivity: "Department Leaves Allocations",
            btnlinks: {
                createbtnlink:"/Employees/Allocationcreate",
                importbtnlink:"/Employees/AllocationImport",
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
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",
                    ],
                    "url": "/leaves/leave_allocation_table"
                },
                "row1": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",
                    ],
                    "url": "/leaves/leave_allocation_table"

                },
                "row2": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",
                    ],
                    "url": "/leaves/leave_allocation_table"
                },

            }
        }
    },
    methods: {
        delete: function (del) {
            var self = this;
            console.log("a"+del);
            self.$http.post("/Employees/delete_allocation", {"delete_items": del}).then(function(res){
                if(res){
                    self.select();
                }else {
                    alert("something went wrong");
                }
            },function(err){
            });
        },
        select3: function () {
            var self = this;
            self.counter+=1;
            self.$http.post("/Employees/allocationrequesttablenext", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.employeename,
                                val.MODE,
                                val.type,
                                val.description,
                                val.duration,
                                val.date_from,
                                val.date_to,
                                val.status,
                            ],
                            "url": "/Employees/AllocationRequestShow/"+val.id,
                        });
                        console.log(data);
                    });
                }

            },function(err){

            });
        },
        select4: function () {
            var self = this;
            self.counter-=1;
            self.$http.post("/Employees/allocationrequesttableback", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.tabledata = [];
                self.tablefooter = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.employeename,
                                val.MODE,
                                val.type,
                                val.description,
                                val.duration,
                                val.date_from,
                                val.date_to,
                                val.status,
                            ],
                            "url": "/Employees/AllocationRequestShow/"+val.id,
                        });

                        console.log(data);
                    });
                }

            },function(err){

            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/Employees/leave_allocaion_num", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/Employees/allocationrequesttable", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.tabledata = [];

                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.employeename,
                                val.MODE,
                                val.type,
                                val.description,
                                val.duration,
                                val.date_from,
                                val.date_to,
                                val.status,
                            ],
                            "url": "/Employees/AllocationRequestShow/"+val.id,
                        });
                        console.log(data);
                    });
                }

            },function(err){

            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                // this.submiting();

            }).catch(() => {
                // eslint-disable-next-line

            });
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}