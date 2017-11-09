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
        nextactivity: "Stock Moves / New",
        btnlinks: {
            createbtnlink:"#/app/newuser",
            importbtnlink:"#/app/imported",
            discardbtnlink:"#/app/inventory/stock_moves",
            savebtnlink:"#/app/inventory/stock_moves_table"
        },
        tableheader: [
            "Description",
            "Reference",
            "Source Document",
            "Product",
            "Quantity",
            "Expected Date",
            "Status",

        ],
        tabledata: {
            "row": {
                "data": [
                    "INV:Starting Inventory",
                    "Chic/IN/00004",
                    "MO/00004",
                    "[C-Case] Computer Case",
                    "500.000",
                    "01/28/2017 19:22:52",
                    "Done",

                ],
                "url": "/#/app/inventory/stock_moves_table"

            },
            "row1": {
                "data": [
                    "INV:Starting Inventory",
                    "Chic/IN/00004",
                    "MO/00004",
                    "[C-Case] Computer Case",
                    "500.000",
                    "01/28/2017 19:22:52",
                    "Done",

                ],
                "url": "/#/app/inventory/stock_moves_table"

            },
            "row2": {
                "data": [
                    "INV:Starting Inventory",
                    "Chic/IN/00004",
                    "MO/00004",
                    "[C-Case] Computer Case",
                    "500.000",
                    "01/28/2017 19:22:52",
                    "Done",

                ],
                "url": "/#/app/inventory/stock_moves_table"

            },

        }
    }
},


components: {
    DashboardController,
        TableMain
}
}