import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Financial Reports",
            title: "Financial Reports - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/accountreportcreate",
                importbtnlink:"/accounting/accountreportimport"
            },
            tableheader: [
                "Reporrt Name",
                "Type",
                "Report Value"

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
                        "Profit and Loss",
                        "View",
                        " "
                    ],
                    "url": "/accounting/Financialaccount"

                },
                "row1": {
                    "data": [
                        "Income",
                        "Account Type",
                        " "
                    ],
                    "url": "/accounting/FinancialAccount"

                },
                "row2": {
                    "data": [
                        "Balance Sheet",
                        "Account ",
                        " "
                    ],
                    "url": "/accounting/FinancialAccount"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}