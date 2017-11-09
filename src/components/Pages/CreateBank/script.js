import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Bank Accounts/ New",
            btnlinks: {
                savedbtnlink:"/accounting/createbank",
                discardbtnlink:"/accounting/configbank"
            },

        }
    },


    components: {
        DashboardController,

    }
}