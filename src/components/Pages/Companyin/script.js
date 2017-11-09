import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Profile from "./../../Pages/Profile/Profile.vue"


export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Companies / Alupak Industries",
            title: 'Companies - Sprout',
            btnlinks: {
                createbtnlink: "#/app/setting/companycreate",
                editbtnlink: "#/app/setting/companyinedit",
            },
        }
    },


    components: {
        DashboardController,
        Profile

    }
}
