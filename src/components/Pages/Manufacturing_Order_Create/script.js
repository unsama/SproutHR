import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function () {
        document.title = this.title;
        $(document).ready(function () {
            $('#dateRangePicker').datepicker({
                format: 'mm/dd/yyyy',
                startDate: '01/01/2010',
                endDate: '12/30/2020'
            })
        });
    },
    data () {
        return {
            nextactivity: "Manufacturing Orders / New",
            btnlinks: {
                savebtnlink: "/manufacturing",
                discardbtnlink: "/manufacturing",
            },
            tableheader: [
                "Product",
                "Quantity Available",
                "To consume",
                "Consumed",


            ],
            tablefooter: [
                "",
                "",
                "",
                "",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "",
                        "",
                        "",
                        "",


                    ],
                    "url": ""

                },
                "row1": {
                    "data": [
                        "",
                        "",
                        "",
                        "",


                    ],
                    "url": ""

                },
                "row2": {
                    "data": [
                        "",
                        "",
                        "",
                        "",


                    ],
                    "url": ""

                },

            }
        }
    },


    components: {
        TableMain,
        Request_quotation_lower,
        DashboardController,
        Message,
    }
}