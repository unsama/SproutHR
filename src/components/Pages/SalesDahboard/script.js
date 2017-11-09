import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Barchart from "./../../partials/Barchart/Barchart.vue"

export default{
    created: function () {
        $(function () {
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });

        });
    },
    data () {
        return {
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "/sales/salescustomeredit",
                discardbtnlink: "/sales/Salesnextactivityview",
                importbtnlink: "/sales/app/imported"
            },
        }
    },

    components: {
        DashboardController,
        Barchart



    }

}