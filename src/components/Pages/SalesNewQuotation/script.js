import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import SalesofInvoiceCreate from "./../../Pages/SalesofInvoiceCreate/SalesofInvoiceCreate.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            salesnextactivities: "Next Activities / Need to customize the solution / New",
            btnlinks: {
                createbtnlink: "/sales/salescustomeredit",
                discardbtnlink: "/sales/Salesnextactivityview",
                importbtnlink: "/sales//imported"
            },
        }
    },
    components: {
        DashboardController,
        Modal,
        SalesofInvoiceCreate
    },

}