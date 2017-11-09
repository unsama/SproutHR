import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Bills of Materials",
            btnlinks: {
                createbtnlink:"/manufacturing/manufacturing_bill_create",
                importbtnlink:"/manufacturing/manufacturing_bill_import"
            },
            tableheader: [
                "Product",
                "Reference",
                "Quantity",




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
                        "[FURN001] Computer Desk",
                        "",
                        "1.00",




                    ],
                    "url": "/manufacturing/manufacturing_bill_inner"

                },
                "row1": {
                    "data": [
                        "[FURN001] Computer Desk",
                        "",
                        "1.00",




                    ],
                    "url": "/manufacturing/manufacturing_bill_inner"

                },
                "row2": {
                    "data": [
                        "[FURN001] Computer Desk",
                        "",
                        "1.00",



                    ],
                    "url": "/manufacturing/manufacturing_bill_inner"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}