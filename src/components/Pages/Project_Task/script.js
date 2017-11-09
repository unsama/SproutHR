import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Project_Grid from "./../../partials/Project_Grid/Project_Grid.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Tasks",
            Title: "Tasks - Sprout",
            btnlinks: {
                createbtnlink: "/projects/project_task_create",
                editbtnlink: "/projects/project_task_edit",
                firstbtnlink:  "/projects/project_task_create",
                secondbtnlink: "/projects/project_task_create",

            },

        }
    },


    components: {
        DashboardController,
        Project_Grid,


    },

}