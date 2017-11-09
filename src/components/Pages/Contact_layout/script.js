import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Recurtment',
            sidebarData: {
                JobPositions: "/recruitment/ReqPosition",
                ResumesandLetters: "/recruitment/Letters",
                Reports: "/recruitment/ReportRecruitment",
                Configuration: [
                    {
                        url: "/recruitment/RecutSetting",
                        title: "Settings"
                    },
                    {
                        url: "/recruitment/ReqStages",
                        title: "Stages"
                    },
                    {
                        url: "/recruitment/JobPosition",
                        title: "Job Positions"
                    },
                    {
                        url: "/recruitment/DepsReq",
                        title: "Departments"
                    },

                ],


            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController

    }

}