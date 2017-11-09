import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "My Expenses to Submit / Import a File",
            title: "Import a File - Sprout",
            btncancellink: {
                cancelbtnlink: "/expenses/expensessubmit",

            },


        }
    },


    components: {
        DashboardController,
        Imported
    },

}