import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Currencies/ AED/ Currency Rates",
            btnlinks: {
                createbtnlink:"#/app/accounting/createmanagement",
                importbtnlink:"#/app/imported"
            },
            tableheader: [
                "Date",
                "Rate",
                "Company"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "	01/01/2010 05:00:00",
                        "4.512532",
                        "Alupak Industriess "
                    ],
                    "url": "/#/app/accounting/currencyratetable"

                },
                "row1": {
                    "data": [
                        "	01/01/2010 05:00:00",
                        "4.512532",
                        "Alupak Industriess "
                    ],
                    "url": "/#/app/accounting/currencyratetable"

                },
                "row2": {
                    "data": [
                        "	01/01/2010 05:00:00",
                        "4.512532",
                        "Alupak Industriess "
                    ],
                    "url": "/#/app/accounting/currencyratetable"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}