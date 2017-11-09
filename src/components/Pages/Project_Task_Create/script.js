import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Message from "./../../partials/Message/Message.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"

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
            CKEDITOR.replace( 'editor1' );
        });

    },
    data () {
        return {
            nextactivity: "Tasks / New",
            title: "New - Sprout",
            btnlinks: {
                savebtnlink:"/projects/project_task",
                discardbtnlink:"/projects/project_task"
            },
            tableheader: [
                "Date",
                "User",
                "Description",
                "Duration",


            ],
            tablefooter: [
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


                    ],
                    "url": "/#/app/inventory/all_transfers_table"

                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",


                    ],
                    "url": "/#/app/inventory/all_transfers_table"

                },
                "row2": {
                    "data": [
                        "",
                        "",
                        "",
                        "",


                    ],
                    "url": "/#/app/inventory/all_transfers_table"

                },

            }
        }
    },

    components: {
        DashboardController,
        TableMain,
        Message,
        Request_quotation_lower,
    }
}