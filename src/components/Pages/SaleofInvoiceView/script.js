import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Message from "./../../partials/Message/Message.vue"
export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#create').css("display");
                if(check == "none"){
                    $('#create').show();
                    $('#show').hide();
                }else{
                    $('#create').hide();
                    $('#show').show();
                }

            });
        });

    },
    data(){
        return {
            quotation: "Sales to Invoices / Invoice",
            modal: "Open: Salesperson",
            modal1: "Open: Sales Team",
            modal2: "Open: Company",
            btnlinks: {
                createbtnlink:"/sales/salesofinvoicecreate",
                editbtnlink:"/sales/salesofinvoiceedit",
                importbtnlink:"/sales/imported"
            },
            tableheader: [
                "Product",
                "Description",
                "Amount",
                "Quality",
                "Unit Price ",
                "Taxes",
                "Subtotal"

            ],
            tablefooter:[
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
                        "[LAP-CUS] Laptop Customized",
                        "Laptop Customized",
                        "2.000",
                        "0.000",
                        "0.000",
                        "3,645.00",
                        "7,290.00"
                    ],
                    "url": "",
                    "modal": ".bd-example-modal-lg3"

                },
                "row1": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },
                "row2": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },

            },
            tableheader1: [
                "Tax Description",
                "Tax Account",
                "Amount",

            ],
            tabledata1: {
                "row": {
                    "data": [
                        "",
                        "",
                        "",
                    ],
                    "url": "",
                    "modal": ""

                },
            },
        }
    },


    components: {
        DashboardController,
        TableMain,
        Modal,
        Message
    }
}
