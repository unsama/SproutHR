import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Newuser from "./../../Pages/Newuser/Newuser.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data(){
        return {
            head: "Users / New",
            title: 'New - Sprout',
            btnlinks: {
                discardbtnlink: "/setting/users",
                savebtnlink: "/setting/"
            },
        }
    },


    components: {
        DashboardController,
        Newuser

    }
}
