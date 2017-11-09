import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        document.title = this.title;
    },
    data(){
        return {
            head: "Pos Product Categories / Import a File",
            btncancellink: {
                nextactivity: "Payment Methods / Import a File",
                cancelbtnlink:"/pointofsale/categories",

            },

        }
    },

    components: {
        DashboardController,
        Imported
    }
}