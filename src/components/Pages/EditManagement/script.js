import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Payment Terms/ 15 Days",
            btnlinks: {
                savedbtnlink:"#/app/accounting/createmanagement",
                discardbtnlink:"#/app/accounting/configmanagement"
            },
            tableheader: [
                "Due Type",
                "Value",
                "Number of Days"


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Balance ",
                        "0.000000 ",
                        "15 Day(s) after invoice date"
                    ],
                    "url": "",
                    "modal": ".bd-example-modal-lg3"

                },
                "row1": {
                    "data": [
                        " ",
                        " ",
                        " "
                    ],
                    "url": ""

                },
                "row2": {
                    "data": [
                        " ",
                        " ",
                        " "
                    ],
                    "url": ""

                },


            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}