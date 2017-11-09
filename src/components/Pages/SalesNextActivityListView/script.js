import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import PipelineComponent from "./../../partials/PipelineComponent/PipelineComponent.vue"

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
            nextactivity: "Next Activity",
            btnlinks: {
                createbtnlink:"/sales/newuser",
                importbtnlink: "/sales/salesproductsimport",
                firstbtnlink:"/sales/nextactivities",
                secondbtnlink:"/sales/salesnextactivitylistview",
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
        PipelineComponent
    }
}