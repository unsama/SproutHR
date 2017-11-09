import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Import_Board from "./../../partials/Import_Board/Import_Board.vue"

export default{
    created: function () {
        document.title = this.title;


    },
    data () {
        return {
            salesorder: "Orders to Upsell",
            title: "Orders to Upsell - Sprout",
            btnlinks: {
                createbtnlink: "/sales/ordertoupsellcreate",
                importbtnlink: "/sales/salesordertoupsellimport"
            },
        }
    },

    components: {
        DashboardController,
        Import_Board

    }
}