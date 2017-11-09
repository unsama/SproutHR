import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        var self = this;
        this.select();
    },
    data () {
        return {
            nextactivity: "Allocation Request",
            btnlinks: {
                createbtnlink:"/leaves/leave_allocation_create",
                importbtnlink:"/leaves/leaves_allocation_import"
            },
            tableheader: [
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




                    ],
                    "url": "/leaves/leave_allocation_table"

                },
                "row2": {
                    "data": [




                    ],
                    "url": "/leaves/leave_allocation_table"

                },

            }
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/recruitment/allocationrequesttable", {

            }).then(function(res){
                var data = res.body.data;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.employeename,
                                val.MODE,
                                val.type,
                                val.description,
                                val.duration,
                                val.date_from,
                                val.date_to,
                                val.status,
                            ],
                            "tablefooter": [
                                val.employeename,

                            ],
                            "url": "/leaves/leave_allocation_table/"+val.id,
                        });

                    });
                }
            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                // this.submiting();
                alert('From Submitted!');
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