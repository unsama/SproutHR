import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function(){
        $(function(){


            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
    data () {
        return {
            vendormenu: "Customers / Agrolait",
            modal: "Open: Contacts",
            modal1: "Open: Title",
            modal2: "Open: Account Receivable",
            modal3: "Open: Account Payable",
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomercreate",
                discardbtnlink: "#/app/attendance/HrCom",
                importbtnlink: "#/app/imported",
            },
        }
    },
    components: {
        DashboardController,
        ProductEdit,
        Request_quotation_lower,
        Message,
        Modal
    }
}