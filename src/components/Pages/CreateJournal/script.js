import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Journals/ New",
            btnlinks: {
                savedbtnlink:"#/app/accounting/createjournal",
                discardbtnlink:"#/app/accounting/configjournal"
            },

        }
    },


    components: {
        DashboardController,
    }
}