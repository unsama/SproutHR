import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posfruitedit from "./../../partials/Posfruitedit/Posfruitedit.vue"

export default{
    created: function(){
        document.title = this.title;
        $(document).ready(function () {
            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
    data(){
        return {
            head: "Pos Product Categories / New",
            btncancellink: {
                nextactivity: "Payment Methods / Import a File",
                discardbtnlink:"/pointofsale/categories",

            },

        }
    },

    components: {
        DashboardController,
        Posfruitedit
    }
}