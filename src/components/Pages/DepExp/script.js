import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/Tablemain/Tablemain.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Departments/Expense Reports to Approve",
            btnlinks: {
                createbtnlink: "#/app/Employees/DepExpcreate",
                importbtnlink: "#/app/Employees/Expsimport",
                firstbtnlink:"#/app/expenses/expensessubmitgrid",
                secondbtnlink:"#/app/expenses/expensessubmit",

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
                        "Employee",
                        "10.000",
                        "Submitted",


                    ],
                    "url": "/employee/DepExps"

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
    },

}