import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"
import Expensessubmitcreate from "./../../partials/Expensessubmitcreate/Expensessubmitcreate.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "My Expenses to Submit",
            title: "New - Sprout",
            btnlinks: {
                discardbtnlink: "/expenses/expensessubmit",
                savedbtnlink: ""


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
                    "url": "/#/app/inventory/reordering_rules_table"

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
        Expensessubmitcreate
    },

}