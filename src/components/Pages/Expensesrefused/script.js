import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Arrowtext from "./../../partials/Arrowtext/Arrowtext.vue"




export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Refused Expenses",
            title: 'Refused Expenses - Sprout',
            btnlinks: {
                createbtnlink: "/expenses/expensesrefusedcreate",
                importbtnlink: "/expenses/expensesrefusedimport",
                firstbtnlink:"/expenses/expensessubmitgrid",
                secondbtnlink:"/expenses/expensessubmit",

            },

        }
    },


    components: {
        DashboardController,
        Arrowtext
    },

}