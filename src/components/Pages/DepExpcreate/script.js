import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Expensesreportscreatein from "./../../partials/Expensesreportscreatein/Expensesreportscreatein.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Departments/Expense Reports to ApproveNew",
            btnlinks: {
                savedbtnlink: "#",
                discardbtnlink: "#/app/Employees/DepExp",
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
                        "Employees",
                        "10.000",
                        "Submitted",


                    ],
                    "url": "/#/app/expenses/expensesreportsin"

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
        Expensesreportscreatein,
    },

}