import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import NotesPipeline from "./../../Pages/NotesPipeline/NotesPipeline.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'inventory',
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController,
        NotesPipeline

    }

}