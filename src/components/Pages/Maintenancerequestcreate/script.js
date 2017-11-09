import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Maintenancereqcreate from "./../../partials/Maintenancereqcreate/Maintenancereqcreate.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Maintenance Requests / New",
            title:"Maintenance Requests - Sprout",
            btnlinks: {
                discardbtnlink: "#/app/maintenance/maintenancerequest",
                savedbtnlink: "#/app/expenses/expensessubmitedit",

            },

        }
    },


    components: {
        DashboardController,
        Maintenancereqcreate

    },

}