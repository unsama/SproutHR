import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import NextActivitiesCreate from "./../../partials/NextActivitiesCreate/NextActivitiesCreate.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            salesnextactivities: "Next Activities / New",
            title: "New - Sprout",
            btnlinks: {
                createbtnlink: "/sales/salescustomeredit",
                discardbtnlink: "/sales/nextactivities",
                importbtnlink: "/sales/imported"
            },
        }
    },
    components: {
        DashboardController,
        NextActivitiesCreate
    },

}