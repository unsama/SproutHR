import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pivot from "./../../partials/Pivot/Pivot.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "All Expenses",
            title: 'All Expenses - Sprout',
            btnlinks: {
                createbtnlink: "#/app/newuser",
                importbtnlink: "#/app/imported",
                firstbtnlink:"/expenses/expensesallgrid",
                secondbtnlink:"/expenses/expensesalllist",
                thirdbtnlink:"/expenses/expensesall",

            },

        }
    },


    components: {
        DashboardController,
        Pivot
    },

}