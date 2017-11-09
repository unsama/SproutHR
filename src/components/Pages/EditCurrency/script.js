
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data () {
        return {
            head: "Currencies/ AED",
            btnlinks: {
                savebtnlink: "#/app/accounting/currencies",
                discardbtnlink: "#/app/accounting/currencies"
            },


        }
    },


    components: {

        DashboardController,
    }
}
