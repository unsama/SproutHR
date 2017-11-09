import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Customers",
            title : "New - Sprout",
            btnlinks: {
                createbtnlink: "/sales/salescustomeredit",
                discardbtnlink: "/sales/customers",
                importbtnlink: "/sales/imported"
            },
        }
    },
    components: {
        DashboardController,
        ProductEdit,

    },

}