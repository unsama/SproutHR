import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pivot from "./../../partials/Pivot/Pivot.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "All Expense Reports",
            title: 'All Expense Reports - Sprout',
            btnlinks: {
                createbtnlink: "#/app/newuser",
                importbtnlink: "#/app/imported",
                firstbtnlink:"/expenses/expensessubmitgrid",
                secondbtnlink:"/expenses/expensessubmit",

            },
        }
    },
    components: {
        DashboardController,
        Pivot
    },
}