import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Currencies/ New",
            btnlinks: {
                savedbtnlink:"#/app/accounting/createcurrency",
                discardbtnlink:"#/app/accounting/configcurrencies"
            },

        }
    },


    components: {
        DashboardController,

    }
}