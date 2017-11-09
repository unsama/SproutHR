import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Maintenancedashedit from "./../../partials/Maintenancedashedit/Maintenancedashedit.vue"

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
            nextactivity: "Maintenance Teams / Internal Maintenance",
            btnlinks: {
                createbtnlink:"#/app/newuser",
                importbtnlink:"#/app/imported"
            },
        }
    },


    components: {
        DashboardController,
        Maintenancedashedit

    }
}