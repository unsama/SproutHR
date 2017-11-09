import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        document.title = this.title;



    },
    data () {
        return {
            head: "Payment Terms/ 15 Days",
            modal1: "Open: Terms",
            btnlinks: {
                createbtnlink:"#/app/accounting/createmanagement",
                editbtnlink:"#/app/accounting/editmanagement"
            },
            tableheader: [
                "Due Type",
                "Value",
                "Number of Days"

            ],
            tablefooter:[
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
                    "url": "",
                    "modal": ".bd-example-modal-lg21"

                },
                "row1": {
                    "data": [
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain,
        Modal
    }
}