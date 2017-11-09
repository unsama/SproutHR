import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posmarketcustomercompo from "./../../partials/Posmarketcustomercompo/Posmarketcustomercompo.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Orders / Main / 0009",
            btnlinks: {
                savedbtnlink:"#/app/newuser",
                discardbtnlink:"#/app/pos/posorderin"
            },


        }
    },


    components: {
        DashboardController,
        Posmarketcustomercompo

    }
}