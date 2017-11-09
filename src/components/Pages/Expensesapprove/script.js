import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Reports to Approve",
            title: 'Expense Reports to Approve - Sprout',
            btnlinks: {
                createbtnlink: "#/app/expenses/expensesreportscreate",
                importbtnlink: "#/app/expenses/expensesapproveimport",
                firstbtnlink:"/expenses/expensessubmitgrid",
                secondbtnlink:"/expenses/expensessubmit",

            },
            tableheader: [
                "Expense Sheet",
                "Accounting Date",
                "Employees",
                "Total Amount",
                "Status",


            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "30.000",
                "",




            ],
            tabledata: {
                "row": {
                    "data": [
                        "Hotel Expenses",
                        "Travel",
                        "Employees",
                        "10.000",
                        "Submitted",


                    ],
                    "url": "/expenses/expensesreportsin"

                },
                "row1": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",


                    ],
                    "url": "/expenses/expensesreportsin"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tablemain,
    },

}