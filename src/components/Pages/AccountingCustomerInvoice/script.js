import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            salesofinvoices: "Customer Invoices",
            title: "Customer Invoice - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/customerinvoicecreate",
                importbtnlink:"/accounting/customerinvoiceimport"
            },
            tableheader: [
                "Customer",
                "Invoice Date",
                "Number",
                "Company",
                "SalesPerson",
                "Due Date",
                "Source Document",
                "Total",
                "Amount Due",
                "Status",

            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "25,000,00",
                "47,00",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Agrolait, Laith Jubair",
                        "03/17/2017",
                        "INV/2017/0008",
                        "Alupak Industriess",
                        "Administrators",
                        "04/16/2017",
                        "Main/0005",
                        "$ 1,731.85",
                        "$ 897.64",
                        "Open",                    ],
                    "url": "/accounting/customerinvoiceview"

                },
                "row1": {
                    "data": [
                        "Agrolait, Laith Jubair",
                        "03/17/2017",
                        "INV/2017/0008",
                        "Alupak Industriess",
                        "Administrators",
                        "04/16/2017",
                        "Main/0005",
                        "$ 1,731.85",
                        "$ 897.64",
                        "Open",
                    ],
                    "url": "/accounting/saleofinvoiceview"

                },
                "row2": {
                    "data": [
                        "Agrolait, Laith Jubair",
                        "03/17/2017",
                        "INV/2017/0008",
                        "Alupak Industriess",
                        "Administrators",
                        "04/16/2017",
                        "Main/0005",
                        "$ 1,731.85",
                        "$ 897.64",
                        "Open",
                    ],
                    "url": "/accounting/saleofinvoiceview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}