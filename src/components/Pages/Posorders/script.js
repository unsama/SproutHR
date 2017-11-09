import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Orders",
            title: 'Orders - Sprout',
            btnlinks: {
                createbtnlink:"#/app/newuser",
                importbtnlink:"#/app/imported"
            },
            tableheader: [
                "Order Ref",
                "Receipt Ref",
                "Customer",
                "Order Date",
                "Salesman",
                "Total",
                "Company",
                "Status",
                "Session",

            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
                "",
                "25,000,00",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "SO014",
                        "Order5465464",
                        "Administrator,peter",
                        "03/08/2017 02:49:19",
                        "Administrators",
                        "$ 0.00",
                        "Alupak",
                        "Paid",
                        "POS 20176354"
                    ],
                    "url": "/pointofsale/posorderin"

                },
                "row1": {
                    "data": [
                        "SO015",
                        "Order546245464",
                        "Administrator,wasim",
                        "03/08/2017 02:49:19",
                        "Administrators",
                        "$ 0.00",
                        "4slash",
                        "Paid",
                        "POS 20176354"
                    ],
                    "url": "/pointofsale/posorderin"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}