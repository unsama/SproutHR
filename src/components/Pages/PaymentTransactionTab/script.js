import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        
    },
    data () {
        return {
            nextactivity: "Payment Transactions/ gg",
            btnlinks: {
                createbtnlink: "/accounting/createtransaction",
                editbtnlink: "/accounting/EditTransaction"
            },


        }
    },


    components: {

        DashboardController,
    }
}