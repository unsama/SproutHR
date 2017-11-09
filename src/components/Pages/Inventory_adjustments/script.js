import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Inventory Adjustments",
        btnlinks: {
            createbtnlink:"#/app/inventory/inventory_adjustments_create",
            importbtnlink:"#/app/inventory/inventory_adjustments_import"
        },
        tableheader: [
            "Inventory Reference",
            "Inventory Date",
            "Status",



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
                    "Starting Inventory",
                    "01/28/2017 19:22:52",
                    "Validated",



                ],
                "url": "/#/app/inventory/inventory_adjustments_table"

            },
            "row1": {
                "data": [
                    "Starting Inventory",
                    "01/28/2017 19:22:52",
                    "Validated",



                ],
                "url": "/#/app/inventory/inventory_adjustments_table"

            },
            "row2": {
                "data": [
                    "Starting Inventory",
                    "01/28/2017 19:22:52",
                    "Validated",



                ],
                "url": "/#/app/inventory/inventory_adjustments_table"

            },

        }
    }
},


components: {
    DashboardController,
        TableMain
}
}