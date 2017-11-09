import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Payments/ Draft Payment",
            btnlinks: {
                createbtnlink:"/accounting/paymentscreate",
                editbtnlink:"/accounting/paymentsedit"
            },

        }
    },


    components: {
        DashboardController,

    }
}