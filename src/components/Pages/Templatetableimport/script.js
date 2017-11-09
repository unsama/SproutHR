import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../../Pages/Imported/Imported.vue"

export default{
    created: function () {

    },
    data(){
        return{
            nextactivity: "Templates / Import a File",
            btnlinks: {
                importbtnlink: "/setting/Manage",
                cancelbtnlink:"/setting/Templatetable"

            },
        }
    },
    components: {

        DashboardController,
        Imported


    }
}