import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Product_Boxes from "./../../partials/Product_Boxes/Product_Boxes.vue"
import Posproductincreate from "./../../partials/Posproductincreate/Posproductincreate.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Products / New",
            btnlinks: {
                savebtnlink:"/pointofsale/posdefaultcreate",
                discardbtnlink:"/pointofsale/posproduct"
            },
        }
    },


    components: {
        DashboardController,
        Product_Boxes,
        Posproductincreate
    }
}