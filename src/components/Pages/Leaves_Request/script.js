import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Leaves Request",
            btnlinks: {
                createbtnlink:"/Leaves/leaves_request_create",
                importbtnlink:"/Leaves/leaves_request_import",
                secondbtnlink:"/leaves/leaves_request",
                fifthbtnlink:"/leaves/leaves_request_calendar",
            },
            tableheader: [
                "Employees",
                "Leave type",
                "Description",
                "Start Date",
                "End Date",
                "Number of Days",
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
                        "[FURN001] Computer Desk",
                        "",
                        "1.00",
                        "1.00",
                        "1.00",
                        "1.00",
                        "1.00",




                    ],
                    "url": "/leaves/leaves_request_table"

                },
                "row1": {
                    "data": [
                        "[FURN001] Computer Desk",
                        "",
                        "1.00",
                        "1.00",
                        "1.00",
                        "1.00",
                        "1.00",




                    ],
                    "url": "/leaves/leaves_request_table"

                },
                "row2": {
                    "data": [
                        "[FURN001] Computer Desk",
                        "",
                        "1.00",
                        "1.00",
                        "1.00",
                        "1.00",
                        "1.00",



                    ],
                    "url": "/leaves/leaves_request_table"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}