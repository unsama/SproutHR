import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;



    },
    data () {
        return {
            head: "Fiscal Positions/ New",
            btnlinks: {
                savedbtnlink:"#/app/accounting/createfiscal",
                discardbtnlink:"#/app/accounting/taxes"
            },

        }
    },


    components: {
        DashboardController,
        TableMain
    }
}

