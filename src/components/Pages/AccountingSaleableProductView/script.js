import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import SalesProductInner from "./../../partials/SalesProductInner/SalesProductInner.vue"
import SalesProductInnerEdit from "./../../partials/SalesProductInnerEdit/SalesProductInnerEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#productcreate1').css("display");
                if(check == "none"){
                    $('#productcreate1').show();
                    $('#productedit1').hide();
                }else{
                    $('#productcreate1').hide();
                    $('#productedit1').show();
                }

            });
        });

    },
    data(){
        return {
            quotation: "Products / [AT] Air Flight",
            modal: "Open: Salesperson",
            modal1: "Open: Sales Team",
            btnlinks: {
                createbtnlink:"/accounting/saleableproductcreate",
                editbtnlink:"/accounting/sellableproductedit",
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
                    "url": ""

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

            }
        }
    },




    components: {
        DashboardController,
        SalesProductInner,
        SalesProductInnerEdit,
        ProductEdit,
        Message,
        Request_quotation_lower
    }
}
