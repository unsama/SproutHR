import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "All Expenses",
            title: 'All Expenses - Sprout',
            btnlinks: {
                createbtnlink: "#/app/expenses/expensesreportscreate",
                importbtnlink: "#/app/expenses/expensesapproveimport",
                firstbtnlink:"/expenses/expensesallgrid",
                secondbtnlink:"/expenses/expensesalllist",
                thirdbtnlink:"/expenses/expensesall",

            },
            tableheader: [
                "Date",
                "Expense Description",
                "Employee",
                "Total",
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
                        "Employee",
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