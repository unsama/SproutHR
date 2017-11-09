import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            activities: "Chart of Account",
            title: "Activities - Sprout",
            btnlinks: {
                createbtnlink:"#/salesactivitycreate",
                importbtnlink:"#/salesactivityimport"
            },
            tableheader: [
                "Code",
                "Name",
                "Type",
                "Account Currency",
                "Company",


            ],
            tablefooter : [
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
                        "090000",
                        "Fixed Asset Account",
                        "Current Assets",
                        "EUR",
                        "Alupak Industriesss",

                    ],
                    "url": "#/coatable"

                },
                "row1": {
                    "data": [
                        "090000",
                        "Fixed Asset Account",
                        "Current Assets",
                        "EUR",
                        "Alupak Industriesss",
                    ],
                    "url": "#/coatable "

                },
                "row2": {
                    "data": [
                        "090000",
                        "Fixed Asset Account",
                        "Current Assets",
                        "EUR",
                        "Alupak Industriesss",

                    ],
                    "url": "#/coatable"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}