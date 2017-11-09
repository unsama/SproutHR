import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Payment Transactions",
            title: "Payment Transactions - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/createtransaction",
                importbtnlink:"/accounting/paymenttransactionimport"
            },
            tableheader: [
                "Reference",
                "Creation Date",
                "Acquirer",
                "Partner",
                "Partner Name",
                "Amount",
                "Fees",
                "Status"

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
                        "gg",
                        "03/07/2017 19:18:25",
                        "Ingenico",
                        " ",
                        " ",
                        "0.00",
                        "0.00",
                        "Draft"
                    ],
                    "url": "/accounting/paymenttransactiontab"

                },
                "row1": {
                    "data": [
                        " ",
                        " ",
                        " ",
                        " ",
                        " ",
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/accounting/paymenttransactiontab"

                },
                "row2": {
                    "data": [
                        " ",
                        " ",
                        " ",
                        " ",
                        " ",
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/accounting/paymenttransactiontab"

                },
                

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}