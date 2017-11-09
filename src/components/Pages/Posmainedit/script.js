import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posmaincreate from "./../../partials/Posmaincreate/Posmaincreate.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Point of Sale / Main (Administrators)",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:"/pointofsale/posmain"
            },
        }
    },


    components: {
        DashboardController,
        Posmaincreate
    }
}