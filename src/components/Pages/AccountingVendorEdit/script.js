import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

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
            vendormenu: "Vendors / Camptocamp",
            modal: "Open: Contacts",
            modal1: "Open: Title",
            modal2: "Open: Account Receivable",
            modal3: "Open: Account Payable",
            btnlinks: {
                createbtnlink: "/accounting/salescustomercreate",
                discardbtnlink: "/accounting/vendorview",
                importbtnlink: "/accounting/imported",
            },
            tableheader: [
                "Name"
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Add an Items",

                    ],
                    "url": "/accounting/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "",

                    ],
                    "url": "/accounting/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "",


                    ],
                    "url": "/accounting/request_quotation_inner"

                },

            }
        }
    },

    components: {
        DashboardController,
        ProductEdit,
        Request_quotation_lower,
        Message,
        Modal,
        TableMain
    }
}