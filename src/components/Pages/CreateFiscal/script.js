import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        $(function () {
            $("#td1").hide();
            $("#td2").hide();
            $("#td3").hide();
            $("#td4").hide();
            $("#td5").hide();
            $("#td6").hide();
            $("#td7").hide();
            $("#td8").hide();

            $("#box").click(function() {

                if($(this).is(":checked")) {
                    $("#td1").show();
                    $("#td2").show();
                    $("#td3").show();
                    $("#td4").show();
                    $("#td5").show();
                    $("#td6").show();
                    $("#td7").show();
                    $("#td8").show();

                }
                else {
                    $("#td1").hide();
                    $("#td2").hide();
                    $("#td3").hide();
                    $("#td4").hide();
                    $("#td5").hide();
                    $("#td6").hide();
                    $("#td7").hide();
                    $("#td8").hide();


                }




            });

        });




    },
    data () {
        return {
            head: "Fiscal Positions/ New",
            btnlinks: {
                savedbtnlink: "#/app/accounting/createfiscal",
                discardbtnlink: "#/app/accounting/configfiscal"
            },
            tableheader: [
                "Tax on product",
                "Tax to apply"

            ],
            tablefooter: [
                "",
                "",
                "",

            ],
            tablefooter1: [
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },


            },
            tableheader1: [
                "Account on Product",
                "Account to Use Instead "

            ],
            tabledata1: {
                "row": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}

