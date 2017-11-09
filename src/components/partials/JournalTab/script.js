import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        $(document).ready(function () {
            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },

    data(){
        return {
            nextactivity: "Journal Entries/ * 28",
            btnlinks: {
                editbtnlink:"#/editjournalentry",
                createbtnlink:"#/journalcreate"
            },

        }
    },

    components: {

        DashboardController

    }

}
