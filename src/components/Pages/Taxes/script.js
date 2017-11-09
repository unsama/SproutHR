import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        $(document).ready(function () {
            $('#tax2').hide();
            $("#clk").click(function () {
                $("#tax2").show();
                $('#tax1').hide();

            });

        });
    },
    data () {
        return {
            head: "Taxes/ Tax 15.00%",
            btnlinks: {
                createbtnlink:"/accounting/createtax",
                editbtnlink:"/accounting/edittax"
            },

        }
    },


    components: {
        DashboardController,

    }
}
