import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Bill of Materials / New",
            btnlinks: {
                savebtnlink:"/manufacturing/manufacturing_bills",
                discardbtnlink:"/manufacturing/manufacturing_bills"
            },
            tableheader: [
                "Product",
                "Product Quantity",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "",
                        "",

                    ],
                    "url": ""

                },
                "row1": {
                    "data": [
                        "",
                        "",

                    ],
                    "url": ""

                },
                "row2": {
                    "data": [
                        "",
                        "",


                    ],
                    "url": ""

                },

            }
        }
    },

    components: {
        DashboardController,
        TableMain,
        Request_quotation_lower,
        Message,
    }
}