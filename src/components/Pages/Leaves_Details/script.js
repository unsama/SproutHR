import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Leave Details",
            title: "Leave Details - Sprout",
            btnlinks: {
                createbtnlink:"/leaves/leaves_detail_create",
                importbtnlink:"/leaves/leaves_detail_import"
            },
            tableheader: [
                "Employees",
                "Request Type",
                "Description",
                "Number of Days",
                "Start Date",
                "End Date",
                "Leave Type",
                "Status",
                "HR comments",

            ],
            tablefooter: [
                "",
                "",
                "",
                "",
                "-6.00",
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
                    "url": "/leaves/leaves_detail_table"

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
                    "url": "/leaves/leaves_detail_table"

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
                    "url": "/leaves/leaves_detail_table"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}