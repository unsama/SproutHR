import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posordersedit from "./../../partials/Posordersedit/Posordersedit.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Orders / Main / 0009",
            btnlinks: {
                savedbtnlink:"",
                discardbtnlink:"/pointofsale/posorderin"
            },


        }
    },


    components: {
        DashboardController,
        Posordersedit

    }
}