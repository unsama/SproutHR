import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
// import Request_Quotation_Lower from "./../../partials/Request_Quotation_Lower/Request_Quotation_Lower.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"

export default{
    created: function () {



    },
    data () {
        return {
            activities: "Activities / Email",
            modal: "Open: Contacts",
            btnlinks: {
                createbtnlink:"/sales/newuser",
                importbtnlink:"/sales/imported",
                discardbtnlink:"/sales/Salesnextactivityview"
            },
            tableheader: [
                "Pricelist Name",
                "Currency"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Public Pricelist",
                        "USD"
                    ],
                    "url": "/sales/salesactivityview"

                },
                "row1": {
                    "data": [
                        " Sales",
                        ""
                    ],
                    "url": "/sales/salesactivityview"

                },
                "row2": {
                    "data": [
                        " Sales",
                        ""

                    ],
                    "url": "/sales/salesactivityview"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag,
        Request_Quotation_Lower,
        Message,
        Modal
    }
}