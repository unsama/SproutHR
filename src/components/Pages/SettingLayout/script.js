import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"


export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Setting',
            sidebarData: {
                Dashboard: "/setting/",
                Users: [
                    {
                        url: "/setting/users",
                        title: "Users"
                    },
                    {
                        url: "/setting/company",
                        title: "Companies"
                    },
                ],
                GeneralSettings: "/setting/generalsetting",
                Translations:[
                    {
                        url: "/setting/setting",
                        title: "Load a Translation"
                    },
                ],
                GoogleDrive:[
                    {
                        url: "/setting/templatetable",
                        title: "Templates"
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