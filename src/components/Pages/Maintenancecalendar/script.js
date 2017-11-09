import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import CalendarT from "./../../partials/CalendarT/CalendarT.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Equipments",
            btnlinks: {
                createbtnlink: "/maintenance/expensesreportscreate",
                editbtnlink:   "/maintenance/expensessubmitedit",
                firstbtnlink:  "/maintenance/maintenanceequipments",
                secondbtnlink: "/maintenance/maintenanceequipmentslist",

            },

        }
    },


    components: {
        DashboardController,
        CalendarT,

    },

}