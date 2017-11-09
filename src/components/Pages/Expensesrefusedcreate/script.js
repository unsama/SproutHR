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
                discardbtnlink: " /expenses/expensesrefused",
                savedbtnlink: ""


            },
            
        }
    },


    components: {
        DashboardController,
        Tablemain,
        Expensessubmitcreate
    },

}