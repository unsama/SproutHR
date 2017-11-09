import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import Request_Quotation_Lower from "./../../partials/Request_Quotation_Lower/Request_Quotation_Lower.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function () {

    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Next ActivitiesNeed / to customize the solution",
            modal: "Log an Activity",
            btnlinks: {
                createbtnlink: "/sales/salesnextactivitiescreate",
                discardbtnlink: "/sales/customers",
                importbtnlink: "/sales/imported",
                editbtnlink: "/sales/salesnextactivityedit"
            },
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Topcontroller,
        Modal,
        Message
    },


}