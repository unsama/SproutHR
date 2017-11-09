import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Expensesreportscreatein from "./../../partials/Expensesreportscreatein/Expensesreportscreatein.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Reports To Post / New",
            btnlinks: {
                savedbtnlink: "#",
                discardbtnlink: "/expenses/expensespostgrid",

            },
        }
    },


    components: {
        DashboardController,
        Expensesreportscreatein,
    },

}