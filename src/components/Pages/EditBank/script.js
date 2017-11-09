import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Bank Accounts/ Bank (EUR)",
            btnlinks: {
                savedbtnlink:"#/app/accounting/editbank",
                discardbtnlink:"#/app/accounting/bankaccount"
            },

        }
    },


    components: {
        DashboardController,

    }
}