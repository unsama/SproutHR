
import Manufacturing_Settings   from "./../../components/Pages/Manufacturing_Settings/Manufacturing_Settings.vue"
import Manufacturing_Order   from "./../../components/Pages/Manufacturing_Order/Manufacturing_Order.vue"
import Manufacturing_Layout   from "./../../components/Pages/Manufacturing_Layout/Manufacturing_Layout.vue"
import Unbuild_Order   from "./../../components/Pages/Unbuild_Order/Unbuild_Order.vue"
import Manufacturing_Scrap   from "./../../components/Pages/Manufacturing_Scrap/Manufacturing_Scrap.vue"
import Manufacturing_Workload   from "./../../components/Pages/Manufacturing_Workload/Manufacturing_Workload.vue"
import Manufacturing_Product_Boxes   from "./../../components/Pages/Manufacturing_Product_Boxes/Manufacturing_Product_Boxes.vue"
import Manufacturing_Product   from "./../../components/Pages/Manufacturing_Product/Manufacturing_Product.vue"
import Manufacturing_Bills   from "./../../components/Pages/Manufacturing_Bills/Manufacturing_Bills.vue"
import Manufacturing_Order_Table  from "./../../components/Pages/Manufacturing_Order_Table/Manufacturing_Order_Table.vue"
import Unbulid_Order_Create  from "./../../components/Pages/Unbulid_Order_Create/Unbulid_Order_Create.vue"
import Manufacturing_Scrap_Create  from "./../../components/Pages/Manufacturing_Scrap_Create/Manufacturing_Scrap_Create.vue"
import Manufacturing_Order_Edit  from "./../../components/Pages/Manufacturing_Order_Edit/Manufacturing_Order_Edit.vue"
import Manufacturing_Order_Create  from "./../../components/Pages/Manufacturing_Order_Create/Manufacturing_Order_Create.vue"
import Workload_Create  from "./../../components/Pages/Workload_Create/Workload_Create.vue"
import Manufacturing_Product_Inner  from "./../../components/Pages/Manufacturing_Product_Inner/Manufacturing_Product_Inner.vue"
import Manufacturing_Product_Edit  from "./../../components/Pages/Manufacturing_Product_Edit/Manufacturing_Product_Edit.vue"
import Manufacturing_Bill_Inner  from "./../../components/Pages/Manufacturing_Bill_Inner/Manufacturing_Bill_Inner.vue"
import Manufacturing_Bill_Edit  from "./../../components/Pages/Manufacturing_Bill_Edit/Manufacturing_Bill_Edit.vue"
import Manufacturing_Bill_Create  from "./../../components/Pages/Manufacturing_Bill_Create/Manufacturing_Bill_Create.vue"
import Manufacturing_Import  from "./../../components/Pages/Manufacturing_Import/Manufacturing_Import.vue"
import Unbuild_Import  from "./../../components/Pages/Unbuild_Import/Unbuild_Import.vue"
import Manufacturing_Order_Pivot  from "./../../components/Pages/Manufacturing_Order_Pivot/Manufacturing_Order_Pivot.vue"
import Manufacturing_Workload_Import  from "./../../components/Pages/Manufacturing_Workload_Import/Manufacturing_Workload_Import.vue"
import Test from "./../../components/Pages/Test/Test.vue"









const routes = [
    { path: '/manufacturing', component: Test,
        children: [
            { path: '', component: Manufacturing_Layout,
                children: [
                    { path: 'manufacturing_settings', component: Manufacturing_Settings},
                    { path: '', component: Manufacturing_Order},
                    { path: 'unbuild_order', component: Unbuild_Order},
                    { path: 'manufacturing_scrap', component: Manufacturing_Scrap},
                    { path: 'manufacturing_workload', component: Manufacturing_Workload},
                    { path: 'manufacturing_product_boxes', component: Manufacturing_Product_Boxes},
                    { path: 'manufacturing_product', component: Manufacturing_Product},
                    { path: 'manufacturing_bills', component: Manufacturing_Bills},
                    { path: 'manufacturing_order_table', component: Manufacturing_Order_Table},
                    { path: 'unbulid_order_create', component: Unbulid_Order_Create},
                    { path: 'manufacturing_scrap_create', component: Manufacturing_Scrap_Create},
                    { path: 'manufacturing_order_edit', component: Manufacturing_Order_Edit},
                    { path: 'manufacturing_order_create', component: Manufacturing_Order_Create},
                    { path: 'workload_create', component: Workload_Create},
                    { path: 'manufacturing_product_inner', component: Manufacturing_Product_Inner},
                    { path: 'manufacturing_product_edit', component: Manufacturing_Product_Edit},
                    { path: 'manufacturing_bill_inner', component: Manufacturing_Bill_Inner},
                    { path: 'manufacturing_bill_edit', component: Manufacturing_Bill_Edit},
                    { path: 'manufacturing_bill_create', component: Manufacturing_Bill_Create},
                    { path: 'manufacturing_import', component: Manufacturing_Import},
                    { path: 'unbuild_import', component: Unbuild_Import},
                    { path: 'manufacturing_order_pivot', component: Manufacturing_Order_Pivot},
                    { path: 'manufacturing_workload_import', component: Manufacturing_Workload_Import},

                ]
            },

        ]

    },


];

module.exports = routes