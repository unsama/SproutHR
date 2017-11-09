import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Maintenanceequipmentsinner from "./../../partials/Maintenanceequipmentsinner/Maintenanceequipmentsinner.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Equipments / Samsung Monitor",
            btnlinks: {
                createbtnlink: "/maintenance/expensesreportscreate",
                editbtnlink: "/maintenance/expensessubmitedit",
                firstbtnlink:  "/maintenance/maintenanceequipments",
                secondbtnlink: "/maintenance/maintenanceequipmentslist",

            },
        }
    },


    components: {
        DashboardController,
        Maintenanceequipmentsinner

    },

}