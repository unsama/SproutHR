import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Posdefaultedit from "./../Posdefaultedit/Posdefaultedit.vue"


export default{
    created: function () {
        document.title = this.title;

        $(function () {
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#contant').css("display");
                if(check == "none"){
                    $('#contant').show();
                    $('#contant1').hide();
                }else{
                    $('#contant').hide();
                    $('#contant1').show();
                }

            });
        });
    },
    props: [
        "edit"
    ],
    data () {
        return {
            head: "Barcode Nomenclatures / Default Nomenclature",
            aa: "aai",
            btnlinks: {
                createbtnlink: "/pointofsale/posdefaultcreate",
                importbtnlink: "#/app/imported"
            },
            tableheader: [
                "Rule Name",
                "Type",
                "Encoding",
                "Barcode Pattern",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Price Barcodes 2 Decimals",
                        "Priced Product",
                        "EAN-13",
                        "23.....{NNNDD}",
                    ],
                    "url": "",
                    "modal": ".bd-example-modal-lg1"

                },
                "row1": {
                    "data": [
                        "Price Barcodes 2 Decimals",
                        "Priced Product",
                        "EAN-13",
                        "23.....{NNNDD}",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },
                "row2": {
                    "data": [
                        "Price Barcodes 2 Decimals",
                        "Priced Product",
                        "EAN-13",
                        "23.....{NNNDD}",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },
                "row3": {
                    "data": [
                        "Price Barcodes 2 Decimals",
                        "Priced Product",
                        "EAN-13",
                        "23.....{NNNDD}",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain,
        Posdefaultedit

    }
}