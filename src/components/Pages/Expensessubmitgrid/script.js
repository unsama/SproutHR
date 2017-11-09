import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import SalesGridview from "./../../partials/SalesGridview/SalesGridview.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "My Expenses to Submit",
            btnlinks: {
                createbtnlink:"/expenses/expensessubmitcreatepage",
                importbtnlink:"/sales/salesnextactivityimport",
                firstbtnlink:"/expenses/expensessubmitgrid",
                secondbtnlink:"/expenses/expensessubmit",
            },
            tableheader: [
                "Opportunity",
                "Customer",
                "Next Activity Date",
                "Next Activity",
                "Next Activity Summary",
                "Stage",
                "Expected Revenue",
                "Expected closing"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "02/18/2017",


                    ],
                    "url": "/expenses/expensessubmittable"

                },


            }
        }
    },




    components: {
        DashboardController,
        SalesGridview
    },

}