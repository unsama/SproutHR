import AccountingProductBox from "./../../partials/AccountingProductBox/AccountingProductBox.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function(){
        document.title = this.title;
        console.log("this is some check")
    },
    data () {
        return {
            salesproducts: "Products",
            title: "Products - Odoo",
            btnlinks: {
                createbtnlink: "/accounting/saleableproductcreate",
                importbtnlink: "/accounting/imported",
                firstbtnlink:"/accounting/accountsaleableproduct",
                secondbtnlink:"/accounting/saleablelistview"
            },
        }
    },

    components: {
        DashboardController,
        AccountingProductBox


    }

}