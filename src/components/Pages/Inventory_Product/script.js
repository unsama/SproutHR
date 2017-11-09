import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Inventory_Product_Boxes from "./../../partials/Inventory_Product_Boxes/Inventory_Product_Boxes.vue"

export default{
    data(){
    return {
        nextactivity: "Products",
        btnlinks: {
            createbtnlink:"#/app/inventory/product_inner_edit",
        },
        heading: 'Request For Quotation'

    }
},


    components: {
        DashboardController,
        Inventory_Product_Boxes
    }
}