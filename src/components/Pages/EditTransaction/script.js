import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        $(document).ready(function() {
            $('#dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(function () {

            $( "#o_field_input_16" ).on("change", function() {
                var selVal = $(this).val();
                if(selVal == "1") {
                    $("#o_field_input_21").hide();
                    $("#o_field_input_23").hide();
                    $("#o_field_input_13").hide();
                    $("#o_field_input_2113").hide();
                    $("#o_field_input_746").hide();
                    $("#o_field_input_106").hide();
                    $("#o_field_input_253").hide();


                }
                if(selVal == "2") {
                    $("#o_field_input_21").hide();
                    $("#o_field_input_23").hide();
                    $("#o_field_input_13").hide();
                    $("#o_field_input_2113").hide();
                    $("#o_field_input_746").hide();
                    $("#o_field_input_106").hide();
                    $("#o_field_input_253").hide();


                }
                if(selVal == "3") {
                    $("#o_field_input_21").hide();
                    $("#o_field_input_23").hide();
                    $("#o_field_input_13").hide();
                    $("#o_field_input_2113").hide();
                    $("#o_field_input_746").hide();
                    $("#o_field_input_106").hide();
                    $("#o_field_input_253").hide();


                }
                if(selVal == "4") {
                    $("#o_field_input_21").hide();
                    $("#o_field_input_23").hide();
                    $("#o_field_input_13").hide();
                    $("#o_field_input_2113").hide();
                    $("#o_field_input_746").hide();
                    $("#o_field_input_106").hide();
                    $("#o_field_input_253").hide();


                }
                if(selVal == "true") {
                    $("#o_field_input_21").show();
                    $("#o_field_input_23").show();
                    $("#o_field_input_13").show();
                    $("#o_field_input_2113").show();
                    $("#o_field_input_746").show();
                    $("#o_field_input_106").show();
                    $("#o_field_input_253").show();


                }



            });

        });

    },
    data () {
        return {
            head: "Payment Transactions/ gg",
            btnlinks: {
                savebtnlink: "#/app/accounting/edittransaction",
                discardbtnlink: "#/app/accounting/paymenttransactiontab"
            },


        }
    },


    components: {

        DashboardController,
    }
}