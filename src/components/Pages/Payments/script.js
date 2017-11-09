import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Payments",
            title: "Payments - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/paymentscreate",
                importbtnlink:"/accounting/paymentimport",
                firstbtnlink:"/accounting/nextactivities",
                secondbtnlink:"/accounting/salesnextactivitylistview",
            },
            tableheader: [
                "Payment Date",
                "Name",
                "Payment Journal",
                "Payment Method Type",
                "Customer",
                "Payment Amount",
                "Status",
                "Company"

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
                        "03/08/2017",
                        "Draft Payment",
                        "Bank (EUR)",
                        "Manual",
                        "Administrators, Pieter Parter's Farm",
                        "25.00 Rs.",
                        "Draft",
                        "Alupak Industriess"
                    ],
                    "url": "/accounting/paymentstab"

                },
                "row1": {
                    "data": [
                        "03/08/2017",
                        "Draft Payment",
                        "Bank (EUR)",
                        "Manual",
                        "Administrators, Pieter Parter's Farm",
                        "25.00 Rs.",
                        "Draft",
                        "Alupak Industriess"
                    ],
                    "url": "/accounting/paymentstab"

                },
                "row2": {
                    "data": [
                        "03/08/2017",
                        "Draft Payment",
                        "Bank (EUR)",
                        "Manual",
                        "Administrators, Pieter Parter's Farm",
                        "25.00 Rs.",
                        "Draft",
                        "Alupak Industriess"
                    ],
                    "url": "/accounting/paymentstab"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}