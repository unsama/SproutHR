import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function () {
        document.title = this.title;
        $(function(){
            CKEDITOR.replace('editor1');
        });

    },
    data () {
        return {
            activityimport: "",
            btnlinks: {
                savebtnlink: "/setting/",
                discardbtnlink: "/setting/internalheader",
            },
        }
    },
    components: {
        DashboardController,
    }
}