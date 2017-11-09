import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Stock Moves / E-COM08: Inventory adjustment>Shelf 1",
        btnlinks: {
            createbtnlink:"#/app/inventory/stock_moves_create",
            importbtnlink:"#/app/imported",
            editbtnlink:"#/app/inventory/stock_moves_edit"
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
                "url": "/#/app/sales/request_quotation_inner"

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
                "url": "/#/app/sales/request_quotation_inner"

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
                "url": "/#/app/sales/request_quotation_inner"

            },

        }
    }
},


components: {
    DashboardController,
        TableMain
}
}