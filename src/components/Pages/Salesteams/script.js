import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            salesteams: "Sales Teams",
            title: "Sales Teams -Sprout",
            btnlinks: {
                createbtnlink:"/sales/salesteamcreate",
                importbtnlink:"/sales/salesteamimport"
            },
            tableheader: [
                "Sales Team",
                "Team Leader"

            ],
            tablefooter: [
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Direct Sales",
                        ""
                    ],
                    "url": "/sales/salesteamview"

                },
                "row1": {
                    "data": [
                        "Indirect Sales",
                        ""
                    ],
                    "url": "/sales/salesteamview"

                },
                "row2": {
                    "data": [
                        "Website Sales",
                        ""

                    ],
                    "url": "/sales/salesteamview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}