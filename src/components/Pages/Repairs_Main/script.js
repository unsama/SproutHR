import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Repair Orders",
            btnlinks: {
                createbtnlink:"/repairs/repairs_create",
                importbtnlink:"/repairs/repairs_import"
            },
            tableheader: [
                "Repair Reference",
                "Product to repair",
                "Partner",
                "Delivery Address",
                "Warranty Expiration",
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

            ],
            tabledata: {
                "row": {
                    "data": [
                        "OP/0001",
                        "[PROD_DEL02] Datacard",
                        "5.000",
                        "10.000",
                        "10.000",
                        "10.000",




                    ],
                    "url": "/repairs/repairs_table"

                },
                "row1": {
                    "data": [
                        "OP/0001",
                        "[PROD_DEL02] Datacard",
                        "5.000",
                        "10.000",
                        "10.000",
                        "10.000",




                    ],
                    "url": "/repairs/repairs_table"

                },
                "row2": {
                    "data": [
                        "OP/0001",
                        "[PROD_DEL02] Datacard",
                        "5.000",
                        "10.000",
                        "10.000",
                        "10.000",




                    ],
                    "url": "/repairs/repairs_table"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}