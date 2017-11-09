import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Expense Products / Import a File",
            btncancellink: {
                cancelbtnlink: "/expenses/expensesproductslist",

            },


        }
    },


    components: {
        DashboardController,
        Imported
    },

}