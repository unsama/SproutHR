import Product_Boxes from "./../../partials/Product_Boxes/Product_Boxes.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function(){
        document.title = this.title;
        console.log("this is some check")
    },
    data () {
        return {
            salesproducts: "Products",
            title: "Products - Sprout",
            btnlinks: {
                createbtnlink: "/sales/salesproductcreate",
                importbtnlink: "/sales/imported",
                firstbtnlink:"/sales/products",
                secondbtnlink:"/sales/salesproductlistview"
            },
        }
    },

    components: {
        DashboardController,
        Product_Boxes


    }

}