import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data () {
        return {
            head: "Bank Accounts/ Bank (EUR)",
            btnlinks: {
                createbtnlink:"#/app/accounting/createbank",
                editbtnlink:"#/app/accounting/editbank"
            },

        }
    },


    components: {
        DashboardController,

    }
}
