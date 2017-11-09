import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"


export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Discuss',
            sidebarData: {
                MyTimesheet: [
                    {
                        url: "/timesheet/detailedactivity",
                        title: "DetailedActivity"
                    },
                ],
                Reports: [
                    {
                        url: "/timesheet/report",
                        title: "ActivityAnalysis"
                    },
                ],

            }
        }
    },
    components: {
        Sidebar,
        Topcontroller
    }

}