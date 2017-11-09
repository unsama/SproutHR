import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Currencies",
            btnlinks: {
                createbtnlink:"/accounting/createcurrency",
                importbtnlink:"/accounting/imported"
            },
            tableheader: [
                "Currency",
                "Symbol",
                "Date",
                "Current Rate",
                "Active"            ],
            tabledata: {
                "row": {
                    "data": [
                        "ALL",
                        "L",
                        "10/3/2017",
                        "506.02333400",
                        "active"
                    ],
                    "url": "/accounting/currencies"

                },
                "row1": {
                    "data": [
                        "ALL",
                        "L",
                        "10/3/2017",
                        "506.02333400",
                        "active"
                    ],
                    "url": "/accounting/currencies"

                },
                "row2": {
                    "data": [
                        "ALL",
                        "L",
                        "10/3/2017",
                        "506.02333400",
                        "active"
                    ],
                    "url": "/accounting/currencies"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}