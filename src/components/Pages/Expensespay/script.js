import DashboardController from "./../../partials/DashboardController/DashboardController.vue"




export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Reports To pay",
            title: 'Expense Reports To Pay - Sprout',
            btnlinks: {
                createbtnlink: "/expenses/expensespaycreate",
                importbtnlink: "/expenses/expensespayimport",
                firstbtnlink:"/expenses/expensespaygrid",
                secondbtnlink:"/expenses/expensespay",

            },


        }
    },


    components: {
        DashboardController,

    },

}