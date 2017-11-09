import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pivot from "./../../partials/Pivot/Pivot.vue"


export default{
    created: function(){
        document.title = this.title;
        
    },
    data () {
        return {
            activityimport: "Tasks Analysis",
            title: "Tasks Analysis - Sprout",

        }
    },
    components: {
        DashboardController,
        Pivot
    }
}