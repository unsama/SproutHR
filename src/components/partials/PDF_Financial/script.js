import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
export default{
    created: function () {
        $(document).ready(function() {
            $('#dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(document).ready(function() {
            $('#dateRangePicker1')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(document).ready(function() {
            $('#dateRangePicker2')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(document).ready(function() {
            $('#dateRangePicker3')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });


        $(function () {
            $("#tab1").hide();
            $("#tab2").hide();
            $("#tabs1").hide();

            $("#chkbox").click(function() {

                if($(this).is(":checked")) {
                    $("#tab1").show();
                    $("#tabs1").show();
                    $("#td1").hide();
                    $("#td2").hide();
                }
                else {
                    $("#tab1").hide();
                    $("#tab2").hide();
                    $("#tabs1").hide();
                    $("#td1").show();
                    $("#td2").show();

                }




            });

        });

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





        $(function () {
            $( "#o_field_input_18" ).on("change", function() {
                var selVal = $(this).val();
                if(selVal == "nofilter") {
                    $("#tab2").hide();

                }
                else if (selVal == "date") {
                    $("#tab2").show();

                }


            });

        });


        $(document).ready(function(){
            $("#box").click(function(){
                $("#tab").hide();
                $("#tab1").hide();
                $("#tab2").hide();
            });

        });

    },
    data(){
        return{
            nextactivity: "Next Activity",
            btnlinks: {
                createbtnlink:"#/app/sales/nextactivitiescreate",
                importbtnlink:"#/app/imported"
            },
            tableheader: [
                "Code",
                "Name",
                "Type",
                "Account Type",
                "Company"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Need 20 ",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need of tancy",
                        "testt"
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test"
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test"
                    ],
                    "url": "/#/app/sales/request_quotation_inner"

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

