import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import SalesNextActivityView from "./../SalesNextActivityView/SalesNextActivityView.vue"
import Pipelineview from "./../../partials/Pipelineview/Pipelineview.vue"
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
            quotation: "Your Pipeline / Need to customize the solution",
            title : "Users - Sprout",
            modal: "Open: Salesperson",
            modal1: "Open: Sales Team",
            btnlinks: {
                createbtnlink:"/sales/salesnextactivitiescreate",
                importbtnlink:"/sales/imported"
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
        SalesNextActivityView,
        Pipelineview
    }
}
