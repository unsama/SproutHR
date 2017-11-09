import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Posfruitwoedit from "./../../partials/Posfruitwoedit/Posfruitwoedit.vue"
import Posfruitedit from "./../../partials/Posfruitedit/Posfruitedit.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Pos Product Categories / Fruits and Vegetables",
            btnlinks: {
                savedbtnlink: "",
                discardbtnlink: "/pointofsale/fruits"
            },
        }
    },

    components: {
        DashboardController,
        Posfruitwoedit,
        Posfruitedit
    }
}