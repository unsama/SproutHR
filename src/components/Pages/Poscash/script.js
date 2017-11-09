import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Cash from "./../../partials/Cash/Cash.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Payment Methods / Cash(EUR)",
            btnlinks: {
                createbtnlink:"/pointofsale/poscasheditt",
                editbtnlink:"/pointofsale/poscashh"
            },
        }
    },

    components: {
        DashboardController,
        Cash
    }
}