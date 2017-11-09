import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"
import Expensesreportstable from "./../../partials/Expensesreportstable/Expensesreportstable.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "My Reports / Hotel Expenses",
            title:"Hotel Expenses - Sprout",
            btnlinks: {
                createbtnlink: "/expenses/expensesreportscreate",
                editbtnlink: "/expenses/expensessubmitedit",
                firstbtnlink:  "/expenses/expensessubmitgrid",
                secondbtnlink: "/expenses/expensessubmit",

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
                    "url": "/expenses/expensessubmittable"

                },
                "row1": {
                    "data": [
                        "03/18/2017",
                        "Travel by Air",
                        "Administrators",
                        "20.000",
                        "To Submit",


                    ],
                    "url": "/expenses/expensessubmittable"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tablemain,
        Expensesreportstable
    },

}