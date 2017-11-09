import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        $(function(){
           
        });
    },
    data () {
        return {
            activityimport: "My Reports / Import a File",
            title: "Import a File - Sprout",
            btnlinks: {
                // createbtnlink: "/sales/salescustomercreate",
                // discardbtnlink: "/sales/salescustomeredit",
                importbtnlink: "/expenses/expensesreports",
                cancelbtnlink: "/expenses/expensesreports",
            },
        }
    },
    components: {
        DashboardController,
        Imported
    }
}