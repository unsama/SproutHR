import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Journals",
            title: "Journals - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/createjournal",
                importbtnlink:"/accounting/imported"
            },
            tableheader: [
                "Journal Name",
                "Company"


            ],
            tablefooter:[
              "",
              "",
              "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        " Miscellaneous Operations ",
                        " Alupak Industriess "
                    ],
                    "url": "/accounting/configjournaltable"

                },
                "row1": {
                    "data": [
                        " Bank",
                        " Alupak Industriess"
                    ],
                    "url": "/accounting/configjournaltable"

                },
                "row2": {
                    "data": [
                        " Cash",
                        " Alupak Industriess"
                    ],
                    "url": "/accounting/configjournaltable"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}