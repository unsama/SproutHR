import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            salesorder: "Sales Orders",
            title: "Sales Orders -Sprout",
            btnlinks: {
                createbtnlink:"/sales/salesordercreate",
                importbtnlink:"/sales/salesorderimport",
                firstbtnlink:"/sales/order",
                secondbtnlink:"/sales/salesordergridview",
            },
            tableheader: [
                "Quotations Number",
                "Order Date",
                "Customer",
                "Salesperson",
                "Total",
                "Status"

            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
                "25,000,00",
                ""
            ],
            tabledata: {
                "row": {
                    "data": [
                        "SO014",
                        "03/08/2017 02:49:19",
                        "Camptocamp",
                        "Administrators",
                        "$ 0.00",
                        "Cancelled"
                    ],
                    "url": "/sales/salesorderview"

                },
                "row1": {
                    "data": [
                        "SO014",
                        "03/08/2017 02:49:19",
                        "Camptocamp",
                        "Administrators",
                        "$ 0.00",
                        "Quotation"
                    ],
                    "url": "/sales/salesorderview"

                },
                "row2": {
                    "data": [
                        "SO014",
                        "03/08/2017 02:49:19",
                        "Camptocamp",
                        "Administrators",
                        "$ 0.00",
                        "Cancelled"
                    ],
                    "url": "/sales/salesorderview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}