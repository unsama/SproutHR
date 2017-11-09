import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            quotation: "Quotations",
            title: "Quotations - Sprout",
            btnlinks: {
                createbtnlink:"/sales/salesquotationcreate",
                importbtnlink:"/sales/salesquotationimport",
                cancelbtnlink:"/sales/quotation",
                firstbtnlink:"/sales/quotation",
                secondbtnlink:"/sales/salesquotationgridview",
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
                "",
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
                    "url": "/sales/salesquotationview"

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
                    "url": "/sales/salesquotationview"

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
                    "url": "/sales/salesquotationview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}