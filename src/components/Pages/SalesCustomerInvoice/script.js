import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            activities: "Customers / Invoices",
            btnlinks: {
                createbtnlink:"/sales/salesactivitycreate",
                importbtnlink:"/sales/salesactivityimport"
            },
            tableheader: [
                "Customer",
                "Invioce Date",
                "Number",
                "Company",
                "Salesperson",
                "Due Date",
                "Source Document",
                "Total",
                "Amount Due",
                "Status",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Agrolait",
                        "01/08/2017",
                        "INV/2017/0003",
                        "Alupak Industriess",
                        "Administrators",
                        "02/07/2017",
                        "",
                        "$ 525.00",
                        "$ 0.00",
                        "Paid",
                    ],
                    "url": "/sales/salesactivityview"

                },
                "row1": {
                    "data": [
                        "Agrolait",
                        "01/08/2017",
                        "INV/2017/0003",
                        "Alupak Industriess",
                        "Administrators",
                        "02/07/2017",
                        "",
                        "$ 525.00",
                        "$ 0.00",
                        "Paid",
                    ],
                    "url": "/sales/salesactivityview"

                },
                "row2": {
                    "data": [
                        "Agrolait",
                        "01/08/2017",
                        "INV/2017/0003",
                        "Alupak Industriess",
                        "Administrators",
                        "02/07/2017",
                        "",
                        "$ 525.00",
                        "$ 0.00",
                        "Paid",

                    ],
                    "url": "/sales/salesactivityview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}