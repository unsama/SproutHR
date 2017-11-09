import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Poscreatemodal from "./../../partials/Poscreatemodal/Poscreatemodal.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Barcode Nomenclatures / New",
            btnlinks: {
                savebtnlink:"/pointofsale/posdefaultcreate",
                discardbtnlink:"/pointofsale/posbarcode"
            },
        }
    },


    components: {
        DashboardController,
        Tabledrag,
        Modal,
        Poscreatemodal,
    }
}