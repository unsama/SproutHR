import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Expensesproductscreatecompo from "./../../partials/Expensesproductscreatecompo/Expensesproductscreatecompo.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Products / New",
            btnlinks: {
                savedbtnlink: "#",
                discardbtnlink: "/expenses/expensesproducts",


            },
            tableheader: [
                "Expense Sheet",
                "Accounting Date",
                "Employee",
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
        Expensesproductscreatecompo
    },

}