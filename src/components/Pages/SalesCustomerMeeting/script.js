import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Calendar from "./../../partials/Calendar/Calendar.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function(){
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
            vendormenu: "Customers / Agrolait",
            modal: "Open: Contacts",
            btnlinks: {
                createbtnlink: "/sales/salescustomercreate",
                discardbtnlink: "/sales/salescustomeredit",
                importbtnlink: "/sales/imported",
                editbtnlink: "/sales/salescustomeredit",
            },
        }
    },
    components: {
        DashboardController,
        ProductEdit,
        Calendar,
        Modal
    }
}