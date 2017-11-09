import Companies from "./../Companies/Companies.vue"
import Dashboardsetting2 from "./../../partials/Dashboardsetting2/Dashboardsetting2.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"



export default{
    created: function() {
        $(document).ready(function () {
            $("#edit").click(function () {
                $("#showedit").show();
                $('#show').hide();
                $('#save').show();
                $('#edit').hide();


            });
             $("#hide").click(function () {
                $("#showedit").hide();
                $('#show').show();
                $('#save').hide();
                $('#edit').show();


            });
        });
    },
    data(){
        return {
            btnlinks: {
                createbtnlink:"#/app/edittab",
                importbtnlink:"#/app/imported"
            },

        }
    },

    components: {
            Companies,
            Dashboardsetting2,
            dashconterller: DashboardController

        }
}



