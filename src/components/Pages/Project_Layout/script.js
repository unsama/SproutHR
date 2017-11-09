import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'inventory',
            sidebarData: {
                Dashboard: "/projects ",
                Search: [
                    {
                        url: "/projects/project_task",
                        title: "Task"
                    },
                    {
                        url: "/projects/project_issues",
                        title: "Issues"
                    },

                ],
                Reports: [
                    {
                        url: "/projects/task_analysis",
                        title: "Tasks Analysis"
                    },
                    {
                        url: "/projects/issue_analysis",
                        title: "Issues Analysis"
                    },
                ],

                Configuration:[
                    {
                        url: "/projects/project_settings",
                        title: "Settings"
                    },
                    {
                        url: "/projects/project_stages",
                        title: "Stages"
                    },
                    {
                        url: "/projects/Projects",
                        title: "Projects"
                    },

                ],


            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController,
        Modal,
        TableMain,

    }

}