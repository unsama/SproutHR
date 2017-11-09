import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#pshow').css("display");
                if(check == "none"){
                    $('#pshow').show();
                    $('#pedit').hide();
                }else{
                    $('#pshow').hide();
                    $('#pedit').show();
                }

            });

        });
    },
    data () {
        return {
            pricelists: "Pricelists / Public Pricelist (USD)",
            btnlinks: {
                createbtnlink:"/sales/salespricelistscreate",
                importbtnlink:"/sales/imported",
                editbtnlink:"/sales/salespricelistedit",
                discardbtnlink:"/sales/salespricelists"
            },
            tableheader: [
                "Name"


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Add an Items",

                    ],
                    "url": "/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "",

                    ],
                    "url": "/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "",


                    ],
                    "url": "/sales/request_quotation_inner"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag,
        TableMain,
        Modal
    }
}