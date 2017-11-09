import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Journals/ Miscellaneous Operations (EUR)",
            btnlinks: {
                createbtnlink:"/accounting/createjournal",
                editbtnlink:"/accounting/configjournaledit"
            },

        }
    },


    components: {
        DashboardController,
    }
}