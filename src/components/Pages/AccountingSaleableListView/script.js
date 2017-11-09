import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#aview').css("display");
                if(check == "none"){
                    $('#aview').show();
                    $('#aedit').hide();
                }else{
                    $('#aview').hide();
                    $('#aedit').show();
                }

            });
        });

    },
    data () {
        return {
            customers: "Products",
            btnlinks: {
                createbtnlink:"/accounting/customercreate",
                importbtnlink: "/accounting/saleableproductimport",
                firstbtnlink:"/accounting/accountsaleableproduct",
                secondbtnlink:"/accounting/saleablelistview"
            },
            tableheader: [
                "Internal Refrence",
                "Name",
                "Sale Price",
                "Cost",
                "Internal Category",
                "Product Type",
                "Quantity On Hand",
                "Forecasted Quantity",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "700.00	",
                        "700.00	",
                        "All / Expenses",
                        "Service",
                        "0.000	",
                        "0.000	",
                    ],
                    "url": "/#/app/accounting/customerview"

                },
                "row1": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "700.00	",
                        "700.00	",
                        "All / Expenses",
                        "Service",
                        "0.000	",
                        "0.000	",
                    ],
                    "url": "/#/app/accounting/customerview"

                },
                "row2": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "700.00	",
                        "700.00	",
                        "All / Expenses",
                        "Service",
                        "0.000	",
                        "0.000	",
                    ],
                    "url": "/#/app/accounting/customerview"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}