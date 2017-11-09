import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Companycreatecompo from "./../../partials/Companycreatecompo/Companycreatecompo.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data(){
        return {
            head: "Companies / Alupak Industries",
            title: "Import a File - Sprout",
            btnlinks: {
                savedbtnlink:"#/app/setting/",
                discardbtnlink:"#/app/setting/companyin"
            },

        }
    },

    components: {
        DashboardController,
        Companycreatecompo
    }
}
