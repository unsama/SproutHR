import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Cashedit from "./../../partials/Cashedit/Cashedit.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Payment Methods / Cash(EUR)",
            btnlinks: {
                savedbtnlink:"#/app/pos/",
                discardbtnlink:"/pointofsale/pospayment"
            },
        }
    },

    components: {
        DashboardController,
        Cashedit
    }
}