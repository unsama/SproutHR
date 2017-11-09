import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Vendor_Boxes from "./../../partials/Vendor_Boxes/Vendor_Boxes.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            customers: "Customers",
            title : "Customers - Sprout",
            btnlinks: {
                createbtnlink: "/sales/salescustomercreate",
                importbtnlink: "/sales/imported",
                firstbtnlink: "/sales/customers",
                secondbtnlink: "/sales/salescustomerlistview"
            },
        }
    },
    components: {
        DashboardController,
        Vendor_Boxes
    },

}