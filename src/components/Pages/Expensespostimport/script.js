import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Expense Reports To Post / Import a File",
            title: "Import a File - Sprout",
            btncancellink: {
                cancelbtnlink: "/expenses/expensespost",

            },


        }
    },


    components: {
        DashboardController,
        Imported
    },

}