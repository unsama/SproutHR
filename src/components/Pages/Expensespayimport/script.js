import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Expense Reports To Pay / Import a File",
            btncancellink: {
                cancelbtnlink: "/expenses/expensespay",

            },


        }
    },


    components: {
        DashboardController,
        Imported
    },

}