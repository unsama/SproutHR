import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Expensesreportscreatein from "./../../partials/Expensesreportscreatein/Expensesreportscreatein.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Reports To Pay / New",
            btnlinks: {
                savedbtnlink: "#",
                discardbtnlink: "/expenses/expensespay",
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
                    "url": "/inventory/reordering_rules_table"

                },


            }
        }
    },


    components: {
        DashboardController,
        Expensesreportscreatein,
    },

}