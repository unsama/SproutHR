import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Journals/ Miscellaneous Operations (EUR)",
            btnlinks: {
                savedbtnlink:"/accounting/createjournal",
                discardbtnlink:"/accounting/configjournaltable"
            },

        }
    },


    components: {
        DashboardController,
    }
}