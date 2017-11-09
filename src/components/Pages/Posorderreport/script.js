import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pivot from "./../../partials/Pivot/Pivot.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Orders Analysis",
            title: 'Orders Analysis - Sprout',
            btnlinks: {
                createbtnlink: "#/app/newuser",
                importbtnlink: "#/app/imported",
                firstbtnlink:"#/app/expenses/expensessubmitgrid",
                secondbtnlink:"#/app/expenses/expensessubmit",

            },
        }
    },
    components: {
        DashboardController,
        Pivot
    },
}