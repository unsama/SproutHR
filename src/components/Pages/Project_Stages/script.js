import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Stages",
            title: "Stages - Sprout",
            btnlinks: {
                createbtnlink:"/#/app/projects/project_stage_create",
                importbtnlink:"/#/app/projects/project_stage_import"
            },
            tableheader: [
                "Stage Name",
                "Folded in Kanban",
                "Description",

            ],
            tablefooter: [
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "[FURN001] Computer Desk",
                        "[FURN001] Computer Desk",


                    ],
                    "url": "/#/app/projects/project_stage_table",
                    "checkbox":true,


                },
                "row1": {
                    "data": [
                        "[FURN001] Computer Desk",
                        "[FURN001] Computer Desk",

                    ],
                    "url": "//#/app/projects/project_stage_table",
                    "checkbox":true,

                },
                "row2": {
                    "data": [
                        "[FURN001] Computer Desk",
                        "[FURN001] Computer Desk",

                    ],
                    "url": "/#/app/projects/project_stage_table",
                    "checkbox":true,

                },
                "row3": {
                    "data": [
                        "[FURN001] Computer Desk",
                        "[FURN001] Computer Desk",

                    ],
                    "url": "/#/app/projects/project_stage_table",
                    "checkbox":true,

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}