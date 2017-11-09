import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posproductedit from "./../../partials/Posproductedit/Posproductedit.vue"
import Requestquotationlower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Product / Apple In-Ear ",
            btnlinks: {
                editbtnlink:"/pointofsale/posproductsedits",
                createbtnlink:"/pointofsale/posproductcreate"
            },

        }
    },


    components: {
        DashboardController,
        Posproductedit,
        Requestquotationlower

    }
}