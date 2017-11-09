import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posmaincreate from "./../../partials/Posmaincreate/Posmaincreate.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Barcode Nomenclatures / New",
            btnlinks: {
                savebtnlink:"#/app/pos/posdefaultcreate",
                discardbtnlink:"/pointofsale/pointofsale"
            },
        }
    },


    components: {
        DashboardController,
        Posmaincreate
    }
}