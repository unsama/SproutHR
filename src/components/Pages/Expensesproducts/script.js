import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Expensesproductscompo from "./../../partials/Expensesproductscompo/Expensesproductscompo.vue"



export default{
    created: function () {
        document.title = this.title;

    },
    data () {
        return {
            nextactivity: "Expense Products",
            title: 'Expense Products - Sprout',
            btnlinks: {
                createbtnlink: "/expenses/expensesproductscreate",
                importbtnlink: "/imported",
                firstbtnlink:"/expenses/expensesproducts",
                secondbtnlink:"/expenses/expensesproductslist",

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
        Expensesproductscompo,
    },

}