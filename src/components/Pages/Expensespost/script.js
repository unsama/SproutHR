import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"
import Arrowtext from "./../../partials/Arrowtext/Arrowtext.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Reports To Post",
            title: 'Expense Reports To Post - Sprout',
            btnlinks: {
                createbtnlink: "/expenses/expensespostcreate",
                importbtnlink: "/expenses/expensespostimport",
                firstbtnlink:"/expenses/expensespostgrid",
                secondbtnlink:"/expenses/expensespost",

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
                    "url": "/#/app/inventory/reordering_rules_table"

                },
                "row1": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",


                    ],
                    "url": "/#/app/inventory/reordering_rules_table"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tablemain,
        Arrowtext
    },

}