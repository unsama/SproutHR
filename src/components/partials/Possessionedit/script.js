import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Possessionedit from "./../../partials/Possessionedit/Possessionedit.vue"
import Modal from "./../Modal/Modal.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Sessions / POS/2017/03/08/03",
            btnlinks: {
                discardbtnlink:"#/app/pos/possessionin",
                savedbtnlink:"#/app/imported"
            },


        }
    },


    components: {
        DashboardController,
        Possessionedit,
        Modal
    }
}