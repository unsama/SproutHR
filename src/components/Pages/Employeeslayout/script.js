import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Employees',
            sidebarData: {
                Employees: "/employees/Gridtwo",
                Contracts: "/employees/CreateDep",
                Departments: "/employees/EmpDash",

            }
        }
    },
    components: {
        Sidebar,
        Topcontroller,
        DashboardController

    }

}