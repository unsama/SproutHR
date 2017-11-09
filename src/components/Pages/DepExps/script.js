import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/Tablemain/Tablemain.vue"
import Expensesreportstable from "./../../partials/Expensesreportstable/Expensesreportstable.vue"
import Message from "./../../partials/Message/Message.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"




export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Departments/Expense Reports to Approve/Hotel Expenses",
            btnlinks: {
                createbtnlink: "#/app/Employees/DepExpcreate",
                editbtnlink: "#/app/Employees/DepExpEdit",
                firstbtnlink:  "#/app/expenses/expensessubmitgrid",
                secondbtnlink: "#/app/expenses/expensessubmit",

            },
            tableheader: [
                "Date",
                "Expense Description",
                "Employees",
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
                        "02/18/2017",
                        "Travel by Air",
                        "Administrators",
                        "10.000",
                        "To Submit",


                    ],
                    "url": "/#/app/expenses/expensessubmittable"

                },
                "row1": {
                    "data": [
                        "03/18/2017",
                        "Travel by Air",
                        "Administrators",
                        "20.000",
                        "To Submit",


                    ],
                    "url": "/#/app/inventory/reordering_rules_table"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tablemain,
        Expensesreportstable,
        Request_quotation_lower,
        Message,

    },

}