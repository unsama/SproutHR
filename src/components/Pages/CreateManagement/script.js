import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Payment Terms/ New",
            btnlinks: {
                savedbtnlink:"#/app/accounting/createmanagement",
                discardbtnlink:"#/app/accounting/configmanagement"
            },
            tableheader: [
                "Due Type",
                "Value",
                "Number of Days"


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
                        "Balance ",
                        "0.000000 ",
                        "15 Day(s) after invoice date"
                    ],
                    "url": "/#/app/pos/fruits"

                },
                "row1": {
                    "data": [
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/#/app/pos/fruits"

                },
                "row2": {
                    "data": [
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/#/app/"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}