import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Product_Boxes from "./../../partials/Product_Boxes/Product_Boxes.vue"
import Posproductboxes from "./../../partials/Posproductboxes/posproductboxes.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Products",
            btnlinks: {
                createbtnlink:"/pointofsale/posproductcreate",
            },

        }
    },


    components: {
        DashboardController,
        Product_Boxes,
        Posproductboxes
    }
}