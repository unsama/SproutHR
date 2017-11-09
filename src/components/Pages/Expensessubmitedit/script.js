import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"
import Expensessubmitinedit from "./../../partials/Expensessubmitinedit/Expensessubmitinedit.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "My Expenses to Submit / Travel by Air",
            title: "Travel by Air - Sprout",
            btnlinks: {
                discardbtnlink: "/expenses/expensessubmittable",
                savedbtnlink: ""


            },


        }
    },


    components: {
        DashboardController,
        Tablemain,
        Expensessubmitinedit
    },

}