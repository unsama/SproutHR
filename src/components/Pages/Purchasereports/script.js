import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pivot from "./../../partials/Pivot/Pivot.vue"
import Pivotview  from "./../../partials/Pivotview/Pivotview.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import RQin from "./../../partials/RQin/RQin.vue"


export default{
    created: function () {

    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Requests for Quotation/PO00007: 637.50 Rs.",
            btnlinks: {
                createbtnlink: "/purchase/RQcreate",
                editbtnlink:"/purchase/RQEdit",
                thirdbtnlink:"/purchase/purchasereports",
                fourthbtnlink:"/purchase/purchasereportsgraph",
                sixthbtnlink:"",
                seventhbtnlink:"",
                eighthbtnlink:"",
            },
        }
    },
    components: {
        DashboardController,
        Pivot,
        Pivotview,
        Modal,
        Message,
        RQin
    },


}