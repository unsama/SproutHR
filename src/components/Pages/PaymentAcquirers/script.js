import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Payment Acquirers",
            title: "Payment Acquirers -Sprout",
            btnlinks: {
                createbtnlink:"/accounting/createacquirer"
            },

        }
    },


    components: {
        DashboardController,

    }
}