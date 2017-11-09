import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Message from "./../../partials/Message/Message.vue"
import pivot from "./../../partials/Pivot/Pivot.vue"

export default{
    created: function(){
        document.title = this.title;
        $(function(){
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
                anch.css({"backgroundColor":col});
            });
        });
    },
    data () {
        return {
            vendormenu: "Invoices Analysis",
            modal: "Open: Contacts",
            title: "Invoices Analysis - Sprout",
            btnlinks: {
                createbtnlink: "/accounting/customercreate",
                discardbtnlink: "/accounting/salescustomeredit",
                importbtnlink: "/accounting/salescustomerimport",
                editbtnlink: "/accounting/customeredit",
            },
        }
    },
    components: {
        DashboardController,
        ProductEdit,
        Request_quotation_lower,
        Modal,
        Message,
        pivot
    }
}