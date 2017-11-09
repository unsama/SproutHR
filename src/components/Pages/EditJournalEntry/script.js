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
            nextactivity: "Journal Entries/ MISC/2017/0008",
            btnlinks: {
                savebtnlink:"#/editjournalentry",
                discardbtnlink:"#/journaltab"
            },

        }
    },

    components: {

        DashboardController

    }

}
