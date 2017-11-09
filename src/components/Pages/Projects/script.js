import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            activities: "Project",
            title: "Projects - Sprout",
            btnlinks: {
                createbtnlink:"/projects/project_create",
                importbtnlink:"/projects/project_import "
            },
            tableheader: [
                "Projects Name",
                "Projects Manager",
                "Contact",

            ],
            tablefooter : [
                "",
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "E-Learning Integration",
                        "Demo User",
                        "Delta Pc",
                    ],
                    "url": "/projects/project_table"

                },
                "row1": {
                    "data": [
                        "E-Learning Integration",
                        "Demo User",
                        "Delta Pc",
                    ],
                    "url": "/projects/project_table"

                },
                "row2": {
                    "data": [
                        "E-Learning Integration",
                        "Demo User",
                        "Delta Pc",

                    ],
                    "url": "/projects/project_table"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}