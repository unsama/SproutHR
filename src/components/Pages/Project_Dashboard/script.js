import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"


export default{
    created: function () {
        document.title = this.title;
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
            nextactivity: "Projects",
            title: "Projects - Sprout",
            btnlinks: {
                createbtnlink:"/#/app/manufacturing/manufacturing_bill_create",
                importbtnlink:"/#/app/manufacturing/manufacturing_bill_import"
            },


        }
    },


    components: {
        DashboardController,
        Modal,

    }
}