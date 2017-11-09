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
                savebtnlink: "",
                discardbtnlink: "/setting/externallayoutheader",
            },
        }
    },
    components: {
        DashboardController,
    }
}
