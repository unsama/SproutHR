import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        $(function () {
            $("#tb").hide();
            $("#tabs").hide();
            $("#table").hide();
            $("#table2").hide();
            $("#tbl").hide();

            $( "#check1" ).on("change", function() {
                var selVal = $(this).val();
                if(selVal == "View") {
                    $("#tb").hide();
                    $("#tabs").hide();
                    $("#table").hide();
                    $("#table2").hide();
                    $("#tbl").hide();
                }
                else if (selVal == "Accounts") {
                    $("#tb").show();
                    $("#tabs").show();
                    $("#table").show();
                    $("#table2").hide();
                    $("#tbl").hide();
                }
                else if (selVal == "Account Type") {
                    $("#tb").hide();
                    $("#tabs").show();
                    $("#table").show();
                    $("#table2").hide();
                    $("#tbl").show();
                }
                else if (selVal == "Report Value") {
                    $("#tb").hide();
                    $("#tabs").show();
                    $("#table").hide();
                    $("#table2").show();
                    $("#tbl").hide();
                }


            });

        });

    },
    data () {
        return {
            nextactivity: "Financial Reports/ Profit and Loss",
            btnlinks: {
                savedbtnlink:"/accounting/accountreportedit",
                discardbtnlink:"/accounting/Financialaccount"
            },

            tableheader: [
                "Code",
                "Name",
                "Type",
                "Account Type",
                "Company"

            ],
            tabletooter1: [
              "",
              "",
              "",
              "",
              "",
              "",
            ],
            tabletooter: [
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        " ",
                        " ",
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/accounting/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        " ",
                        " ",
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/accounting/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        " ",
                        " ",
                        " ",
                        " ",
                        " "
                    ],
                    "url": "/accounting/request_quotation_inner"

                },

            },
            tableheader1: [

                "Account Type",
                "Type"

            ],
            tabledata1: {
                "row": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/accounting/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/accounting/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/accounting/request_quotation_inner"

                },

            }

        }
    },


    components: {
        DashboardController,
        TableMain
    }
}