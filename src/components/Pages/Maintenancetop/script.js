import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Maintenancepipeline from "./../../partials/Maintenancepipeline/Maintenancepipeline.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Maintenance Teams / Maintenance Requests",
            title:"Maintenance Requests - Sprout",
            btnlinks: {
                createbtnlink: "#/app/maintenance/maintenancedashboard",
            },
        }
    },
    components: {
        DashboardController,
        Maintenancepipeline

    },

}