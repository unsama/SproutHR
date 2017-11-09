import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Product Categories",
        btnlinks: {
            createbtnlink:"#/app/inventory/inventory_categories_create",
            importbtnlink:"#/app/inventory/product_categories_import",
            editbtnlink:"#/app/inventory/inventory_categories_edit"
        },
        tableheader: [
            "Display Name",




        ],
        tablefooter: [
            "",
            "",
            
        ],
        tabledata: {
            "row": {
                "data": [
                    "Starting Inventory",




                ],
                "url": "/#/app/inventory/inventory_categories_table"

            },
            "row1": {
                "data": [
                    "Starting Inventory",




                ],
                "url": "/#/app/inventory/inventory_categories_table"

            },
            "row2": {
                "data": [
                    "Starting Inventory",




                ],
                "url": "/#/app/inventory/inventory_categories_table"

            },


        }
    }
},


components: {
    DashboardController,
        TableMain
}
}