import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        $(document).ready(function () {

            $("#searchbutton1").click(function () {
                $("#searchbtn").toggle();
            });


        });

        $(document).ready(function () {

            $("#searchbutton3").click(function () {
                $("#searchbtn3").toggle();
            });


        });
        $(document).ready(function () {

            $("#searchbutton2").click(function () {
                $("#searchbtn2").toggle();
                $("#searchbutton3").toggle();
                $("#searchbtn3").hide();
            });


        });


    },
    data () {
        return {
            nextactivity: "Financial Reports Hierarchy",
            title: "Financial Reports Hierarchy - Sprout",

            tableheader: [
                "Profit",
                "Type",
                "Report Value"


            ],
            tabledata: {


            }



        }
    },


    components: {

        DashboardController,
        TableMain
    }
}