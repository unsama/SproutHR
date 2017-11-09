import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        // $(function () {
        //
        //     $( "#o_field_input_17" ).on("change", function() {
        //         var selVal = $(this).val();
        //         if(selVal == "Create & Edit") {
        //             $("#myModal3").show();
        //
        //         }
        //
        //
        //
        //     });
        //
        // });
    },
    data () {
        return {
            head: "Taxes/ New",
            btnlinks: {
                savedbtnlink:"/accounting/createtax",
                discardbtnlink:"/accounting/configtaxes"
            },

        }
    },


    components: {
        DashboardController,

    }
}