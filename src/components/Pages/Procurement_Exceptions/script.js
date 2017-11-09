import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Procurement Exceptions",
        btnlinks: {
            createbtnlink:"#/app/inventory/procurement_exception_create",
            importbtnlink:"#/app/inventory/procurement_import"
        },
        tableheader: [
            "Scheduled Date",
            "Procurement Location",
            "Source Document",
            "Product",
            "Quantity",
            "Unit of Measure",
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
                    "INV:Starting Inventory",
                    "Chic/IN/00004",
                    "MO/00004",
                    "[C-Case] Computer Case",
                    "500.000",
                    "01/28/2017 19:22:52",
                    "Done",

                ],
                "url": "/#/app/inventory/procurement_exception_table"

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
                "url": "/#/app/inventory/procurement_exception_table"

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
                "url": "/#/app/inventory/procurement_exception_table"

            },

        }
    }
},


components: {
    DashboardController,
        TableMain
}
}