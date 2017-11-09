import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Manufacturing_Product_Boxes from "./../../Pages/Manufacturing_Product_Boxes/Manufacturing_Product_Boxes.vue"

export default{
    data(){
        return {
            nextactivity: "Products",
            btnlinks: {
                createbtnlink:"/manufacturing/manufacturing_product_edit",
            },
            heading: 'Request For Quotation'

        }
    },


    components: {
        DashboardController,
        Manufacturing_Product_Boxes
    }
}