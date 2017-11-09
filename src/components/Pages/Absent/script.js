import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

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
            p: "Departments/Absent Employees",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "#/app/Employees/Absentcreate",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported"
            },
        }
    },

    components: {
        DashboardController



    }

}