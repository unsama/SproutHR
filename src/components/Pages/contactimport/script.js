import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../../Pages/Imported/Imported.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return{
            title:"Import a file - Contact",

            btnlinks: {
                importbtnlink: "/setting/",
                cancelbtnlink:"/contact/contacttable"

            },
        }
    },
    components: {

        DashboardController,
        Imported


    }
}