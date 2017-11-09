import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
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
        nextactivity: "Stock Operations / New",
        title: "New - Sprout",
        btnlinks: {
            savebtnlink:"/inventory/all_transfers_table",
            discardbtnlink:"/inventory/all_transfers_table"
        },
        tableheader: [
            "Reference",
            "Destination Location Zone",
            "Partner",
            "Schduled Date",
            "Source Document",
            "Back Order Of",
            "Status",

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

                ],
                "url": "/inventory/all_transfers_table"

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

                ],
                "url": "/inventory/all_transfers_table"

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

                ],
                "url": "/inventory/all_transfers_table"

            },

        }
    }
},

components: {
    DashboardController,
        TableMain,
}
}