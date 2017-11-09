import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"
import Arrowtext from "./../../partials/Arrowtext/Arrowtext.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Reports To Post",
            btnlinks: {
                createbtnlink: "/expenses/expensespostgridcreate",
                firstbtnlink:"/expenses/expensespostgrid",
                secondbtnlink:"/expenses/expensespost",

            },
        }
    },


    components: {
        DashboardController,
        Tablemain,
        Arrowtext
    },

}