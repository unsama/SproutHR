import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Manufacturing Orders",
        title: "Manufacturing Orders - Sprout",
        btnlinks: {
            createbtnlink:"/manufacturing/manufacturing_order_create",
            importbtnlink:"/manufacturing/manufacturing_import"
        },
        tableheader: [
            "Reference",
            "Deadline Start",
            "Product",
            "Quantity",
            "Availability",
            "Source",
            "State",

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
                    "MO/00003",
                    "02/18/2017 18:26:08",
                    "[FURN001] Computer Desk",
                    "1.000",
                    "Waiting",
                    "",
                    "Confirmed",



                ],
                "url": "/manufacturing/manufacturing_order_table"

            },
            "row1": {
                "data": [
                    "MO/00003",
                    "02/18/2017 18:26:08",
                    "[FURN001] Computer Desk",
                    "1.000",
                    "Waiting",
                    "",
                    "Confirmed",



                ],
                "url": "/manufacturing/manufacturing_order_table"

            },
            "row2": {
                "data": [
                    "MO/00003",
                    "02/18/2017 18:26:08",
                    "[FURN001] Computer Desk",
                    "1.000",
                    "Waiting",
                    "",
                    "Confirmed",



                ],
                "url": "/manufacturing/manufacturing_order_table"

            },

        }
    }
},


components: {
    DashboardController,
        TableMain
}
}