import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../../Pages/Imported/Imported.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data(){
        return {
            head: "Users / Import a File",
            title: "Import a File - Sprout",
            btnlinks: {
                savedbtnlink:"#/app/setting/newuser",
                cancelbtnlink:"#/app/setting/users"
            },

        }
    },

    components: {
        DashboardController,
        Imported
    }
}
