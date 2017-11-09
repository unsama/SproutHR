import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            activities: "Journal Entries",
            title: "Activities - Sprout",
            btnlinks: {
                createbtnlink:"#/salesactivitycreate",
                importbtnlink:"#/salesactivityimport"
            },
            tableheader: [
                "Date",
                "Number",
                "Partner",
                "Refrence",
                "Journal",
                "Amount",
                "Status",

            ],
            tablefooter : [
                "",
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
                        "03/29/2017",
                        "MISC/2017/0011",
                        "",
                        "reversal of: MISC/2017/0008",
                        "Miscellaneous Operations (EUR)",
                        "0.00 €	",
                        "Posted",
                        "",
                    ],
                    "url": "#/JournalTab"

                },
                "row1": {
                    "data": [
                        "03/29/2017",
                        "MISC/2017/0011",
                        "",
                        "reversal of: MISC/2017/0008",
                        "Miscellaneous Operations (EUR)",
                        "0.00 €	",
                        "Posted",
                        "",
                    ],
                    "url": "#/JournalTab"

                },
                "row2": {
                    "data": [
                        "03/29/2017",
                        "MISC/2017/0011",
                        "",
                        "reversal of: MISC/2017/0008",
                        "Miscellaneous Operations (EUR)",
                        "0.00 €	",
                        "Posted",
                        "",

                    ],
                    "url": "#/JournalTab"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}