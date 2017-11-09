import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posproductedit from "./../../partials/Posproductedit/Posproductedit.vue"
import Requestquotationlower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Posproducteditor from "./../../partials/Posproducteditor/Posproducteditor.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Product / Apple In-Ear ",
            btnlinks: {
                savedbtnlink:"#/app",
                discardbtnlink:"/pointofsale/posproductsedit"
            },

        }
    },


    components: {
        DashboardController,
        Posproductedit,
        Requestquotationlower,
        Posproducteditor

    }
}