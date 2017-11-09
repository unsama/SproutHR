import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        
    },
    data () {
        return {
            head: "Financial ReportsProfit and Loss",
            btnlinks: {
                createbtnlink: "/accounting/accountreportcreate",
                editbtnlink: "/accounting/accountreportedit"
            },


        }
    },


    components: {

        DashboardController,
    }
}