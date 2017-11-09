import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Maintenanceequipmentsgrid from "./../../partials/Maintenanceequipmentsgrid/Maintenanceequipmentsgrid.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Equipments",
            btnlinks: {
                createbtnlink: "/maintenance/maintenancerequestcreate",
                editbtnlink: "/maintenance/expensessubmitedit",
                firstbtnlink:  "/maintenance/maintenanceequipments",
                secondbtnlink: "/maintenance/maintenanceequipmentslist",

            },

        }
    },


    components: {
        DashboardController,
        Maintenanceequipmentsgrid
       

    },

}