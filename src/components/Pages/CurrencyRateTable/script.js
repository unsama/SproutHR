import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data () {
        return {
            head: "Currencies/ AED / Currency Rates/ 2010-01-01 01:00:00",
            btnlinks: {
                createbtnlink: "#/app/accounting/currencyratecreate",
                editbtnlink: "#/app/accounting/CurrencyrateEdit"
            },


        }
    },


    components: {

        DashboardController,
    }
}