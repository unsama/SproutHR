import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        $(document).ready(function() {
            $('#dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });
    },
    data () {
        return {
            nextactivity: "Repair Orders / RMA00001",
            btnlinks: {
                editbtnlink:"/repairs/repairs_edit",
                createbtnlink:"/repairs/repairs_create"
            },
            tableheader: [
                "Type",
                "Product",
                "Description",
                "Quantity",
                "Unit Price",
                "Taxes",
                "To Invoice",
                "Subtotal",

            ],
            tablefooter: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",
                        "Available",

                    ],
                    "url": "#/all_transfers_table"

                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",
                        "Available",

                    ],
                    "url": "#/all_transfers_table"

                },
                "row2": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",
                        "Available",

                    ],
                    "url": "#/all_transfers_table"

                },

            }
        }
    },

    components: {
        DashboardController,
        Request_quotation_lower,
        Message,
        TableMain,

    }
}