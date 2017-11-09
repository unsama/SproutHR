import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import TableDrag from "./../../partials/TableDrag/TableDrag.vue"
import TableDrag from "./../../partials/Tabledrag/Tabledrag.vue"

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
                createbtnlink:"/sales/newuser",
                importbtnlink: "/sales/salesproductsimport",
                firstbtnlink:"/sales/products",
                secondbtnlink:"/sales/salesproductlistview"
            },
            tableheader: [
                "Internal Refrence",
                "Name",
                "Sales Price",
                "Cost",
                "Internal Catories",
                "Product Type",
                "Quantity On Hand",
                "Forecasted Quality",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "E-COM08",
                        "Apple In-Ear Headphones",
                        "79.00	",
                        "70.00",
                        "All / Saleable / Physical",
                        "Stockable Product",
                        "18.000	",
                        "18.000	",
                    ],
                    "url": "/sales/salesproductview"

                },
                "row1": {
                    "data": [
                        "E-COM08",
                        "Apple In-Ear Headphones",
                        "79.00	",
                        "70.00",
                        "All / Saleable / Physical",
                        "Stockable Product",
                        "18.000	",
                        "18.000	",
                    ],
                    "url": "/sales/salesproductview"

                },
                "row2": {
                    "data": [
                        "E-COM08",
                        "Apple In-Ear Headphones",
                        "79.00	",
                        "70.00",
                        "All / Saleable / Physical",
                        "Stockable Product",
                        "18.000	",
                        "18.000	",
                    ],
                    "url": "/sales/salesproductview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableDrag
    }
}