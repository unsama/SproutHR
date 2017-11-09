import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"
export default{
    created: function () {
        document.title = this.title;
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
            title: "New - Sprout",
            quotation: "Customer Invoices / Invoice",
            modal: "Open: Salesperson",
            modal1: "Open: Sales Team",
            modal2: "Open: Company",
            btnlinks: {
                createbtnlink:"/accounting/salesnextactivitiescreate",
                importbtnlink:"/accounting/salesorderimport",
                discardbtnlink:"/accounting/customerinvoice"
            },
            tableheader: [
                "Product",
                "Description",
                "Ordered Qty",
                "Delivered",
                "Invoiced",
                "Unit Price",
                "Taxes",
                "Subtotal"

            ],
            tableheader1: [
                "Tax Description",
                "Tax Account",
                "Amount",
            ],
            tablefooter: [
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
            tablefooter1: [
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
                        "",
                        "7,290.00"
                    ],
                    "url": "",
                    "modal": ".bd-example-modal-lg21"

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
                        "",
                    ],
                    "url": ""

                },

            },
            tabledata1: {
                "row": {
                    "data": [
                        "",
                        "",
                        "",
                    ],
                    "url": "",
                    "modal": ".bd-example-modal-lg21"

                },
                "row1": {
                    "data": [
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

                    ],
                    "url": ""

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
