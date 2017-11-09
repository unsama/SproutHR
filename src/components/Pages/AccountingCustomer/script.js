import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import AccountingVendorBox from "./../../partials/AccountingVendorBox/AccountingVendorBox.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            customers: "Customers",
            title: "Customer - Sprout",
            btnlinks: {
                createbtnlink: "/accounting/customercreate",
                importbtnlink: "/accounting/imported",
                firstbtnlink: "/accounting/customer",
                secondbtnlink: "/accounting/customerlistview"
            },
        }
    },
    components: {
        DashboardController,
        AccountingVendorBox
    },

}