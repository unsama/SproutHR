import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
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
            quotation: "Vendor Bills / User",
            modal: "Open: Salesperson",
            modal1: "Open: Sales Team",
            modal2: "Open: Company",
            btnlinks: {
                createbtnlink:"/accounting/salesofinvoicecreate",
                discardbtnlink:"/accounting/accountingvendorbillview",
                editbtnlink:"/accounting/vendorbilledit",
                importbtnlink:"/accounting/imported"
            },
            tableheader: [
                "Product",
                "Description",
                "Amount",
                "Quantity",
                "Unit Price",
                "Amount",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "[LAP-CUS] Laptop Customized",
                        "Laptop Customized",
                        "2.000",
                        "0.000",
                        "0.000",
                        "0.000",

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

                    ],
                    "url": ""

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag,
        Modal,
        Message
    }
}
