  import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ScheduleanActivity from "./../../partials/ScheduleanActivity/ScheduleanActivity.vue"


export default{
    created: function () {
        document.title = this.title;
        $(function () {
            $("#sortable1, #sortable2").sortable({
                connectWith: ".connectedSortable"
            }).disableSelection();

            $("#click").on("click", function () {
                $('#create').toggle();
            });
            $("#click1").on("click", function () {
                $('#create1').toggle();
            });
            $("#click2").on("click", function () {
                $('#create2').toggle();
            });
            $("#click3").on("click", function () {
                $('#create3').toggle();
            });
            $("#addnew").on("click", function () {
                $('#addshow').show();
                $('#addnew').hide();
            });
            $("#discard").on("click", function () {
                $('#addnew').show();
                $('#addshow').hide();
            });
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
            });
        });


    },
    data(){
        return {

            title : "Issues - Sprout",
            pipeline: "Issues",
            btnlinks: {
                createbtnlink: "/projects/project_issue_create",
                importbtnlink: "/imported",
                firstbtnlink: "/sales/pipeline",
                secondbtnlink: "/sales/salespipelinelistview"
            },
        }
    },
    components: {
        dashconterller: DashboardController,
        ScheduleanActivity

    }
}



