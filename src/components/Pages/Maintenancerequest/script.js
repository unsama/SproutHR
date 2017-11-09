import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Maintenancepipeline from "./../../partials/Maintenancepipeline/Maintenancepipeline.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Maintenance Requests",
            title:"Maintenance Requests - Sprout",
            btnlinks: {
                createbtnlink: "#/app/maintenance/maintenancerequestcreate",
                editbtnlink: "#/app/expenses/expensessubmitedit",
                firstbtnlink:  "#/app/expenses/expensessubmitgrid",
                secondbtnlink: "#/app/expenses/expensessubmit",

            },

        }
    },


    components: {
        DashboardController,
        Maintenancepipeline

    },

}