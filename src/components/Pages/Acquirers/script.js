import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        


    },
    data () {
        return {
            head: "Payment Acquirers/ Paypal",
            btnlinks: {
                createbtnlink: "/accounting/createacquirer",
                editbtnlink: "/accounting/editacquirer"
            },


        }
    },


    components: {

        DashboardController,
    }
}