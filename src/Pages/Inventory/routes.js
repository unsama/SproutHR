import All_Transfers  from "./../../components/Pages/All_Transfers/All_Transfers.vue"
import Inventory_Product   from "./../../components/Pages/Inventory_Product/Inventory_Product.vue"
import Reordering_Rules   from "./../../components/Pages/Reordering_Rules/Reordering_Rules.vue"
import Inventory_adjustments   from "./../../components/Pages/Inventory_adjustments/Inventory_adjustments.vue"
import Inventory_Scrap   from "./../../components/Pages/Inventory_Scrap/Inventory_Scrap.vue"
import Stock_Moves   from "./../../components/Pages/Stock_Moves/Stock_Moves.vue"
import Procurement_Exceptions   from "./../../components/Pages/Procurement_Exceptions/Procurement_Exceptions.vue"
import Inventory_Settings   from "./../../components/Pages/Inventory_Settings/Inventory_Settings.vue"
import Inventory_Valuation   from "./../../components/Pages/Inventory_Valuation/Inventory_Valuation.vue"
import All_Transfers_Table   from "./../../components/Pages/All_Transfers_Table/All_Transfers_Table.vue"
import Request_quotation_lower  from "./../../components/partials/Request_quotation_lower/Request_quotation_lower.vue"
import Inventory_Product_Box   from "./../../components/Pages/Inventory_Product_Box/Inventory_Product_Box.vue"
import Product_inner  from "./../../components/Pages/Product_inner/Product_inner.vue"
import Reordering_Rules_Table   from "./../../components/Pages/Reordering_Rules_Table/Reordering_Rules_Table.vue"
import Inventory_Adjustments_Table   from "./../../components/Pages/Inventory_Adjustments_Table/Inventory_Adjustments_Table.vue"
import Inventory_Scrap_Create   from "./../../components/Pages/Inventory_Scrap_Create/Inventory_Scrap_Create.vue"
import Inventory_Dashboard   from "./../../components/Pages/Inventory_Dashboard/Inventory_Dashboard.vue"
import SalesProductView   from "./../../components/Pages/SalesProductView/SalesProductView.vue"
import Inventory_Product_Boxes   from "./../../components/partials/Inventory_Product_Boxes/Inventory_Product_Boxes.vue"
import Product_Inner_Edit   from "./../../components/partials/Product_Inner_Edit/Product_Inner_Edit.vue"
import reordering_rules_edit   from "./../../components/Pages/Reordering_Rules_Edit/Reordering_Rules_Edit.vue"
import inventory_adjustments_create   from "./../../components/Pages/Inventory_Adjustments_Create/Inventory_Adjustments_Create.vue"
import Stock_Moves_Table   from "./../../components/Pages/Stock_Moves_Table/Stock_Moves_Table.vue"
import Stock_Moves_Edit   from "./../../components/Pages/Stock_Moves_Edit/Stock_Moves_Edit.vue"
import stock_moves_create   from "./../../components/Pages/Stock_Moves_Create/Stock_Moves_Create.vue"
import Procurement_Exception_Table   from "./../../components/Pages/Procurement_Exception_Table/Procurement_Exception_Table.vue"
import procurement_exception_create   from "./../../components/Pages/Procurement_Exception_Create/Procurement_Exception_Create.vue"
import procurement_exception_edit   from "./../../components/Pages/Procurement_Exception_Edit/Procurement_Exception_Edit.vue"
import All_Transfer_Create   from "./../../components/Pages/All_Transfer_Create/All_Transfer_Create.vue"
import Inventory_Adjustment_Edit   from "./../../components/Pages/Inventory_Adjustment_Edit/Inventory_Adjustment_Edit.vue"
import Inventory_Product_Categories   from "./../../components/Pages/Inventory_Product_Categories/Inventory_Product_Categories.vue"
import Inventory_Categories_Table   from "./../../components/Pages/Inventory_Categories_Table/Inventory_Categories_Table.vue"
import Accordions   from "./../../components/partials/Accordions/Accordions.vue"
import All_Transfer_Import   from "./../../components/Pages/All_Transfer_Import/All_Transfer_Import.vue"
import All_Transfer_Edit   from "./../../components/Pages/All_transfer_Edit/All_Transfer_Edit.vue"
import Inventory_Categories_Create   from "./../../components/Pages/Inventory_Categories_Create/Inventory_Categories_create.vue"
import Reordering_Rules_Import   from "./../../components/Pages/Reordering_Rules_Import/Reordering_Rules_Import.vue"
import Inventory_Valuation_Table   from "./../../components/Pages/Inventory_Valuation_Table/Inventory_Valuation_Table.vue"
import Inventory_Adjustments_Import   from "./../../components/Pages/Inventory_Adjustments_Import/Inventory_Adjustments_Import.vue"
import Inventory_Scrap_Import   from "./../../components/Pages/Inventory_Scrap_Import/Inventory_Scrap_Import.vue"
import Procurement_Import   from "./../../components/Pages/Procurement_Import/Procurement_Import.vue"
import Product_categories_import   from "./../../components/Pages/Product_categories_import/Product_categories_import.vue"
import Grid_View   from "./../../components/partials/Grid_View/Grid_View.vue"
import All_Transfer_Calender   from "./../../components/Pages/All_Transfer_Calender/All_Transfer_Calender.vue"
import Test from "./../../components/Pages/Test/Test.vue"
import Inventorylayout  from "./../../components/Pages/Inventorylayout/Inventorylayout.vue"
import Modal  from "./../../components/partials/Modal/Modal.vue"
import All_Transfer_Grid  from "./../../components/Pages/All_Transfer_Grid/All_Transfer_Grid.vue"

const routes = [
    { path: '/inventory', component: Test,
        children: [
            { path: '', component: Inventorylayout,
                children: [
                    { path: 'all_transfers', component: All_Transfers},
                    { path: 'inventory_product', component: Inventory_Product},
                    { path: 'reordering_rules', component: Reordering_Rules},
                    { path: 'inventory_adjustments', component: Inventory_adjustments},
                    { path: 'inventory_scrap', component: Inventory_Scrap},
                    { path: 'stock_moves', component: Stock_Moves},
                    { path: 'Procurement_Exceptions', component: Procurement_Exceptions},
                    { path: 'inventory_settings', component: Inventory_Settings},
                    { path: 'inventory_valuation', component: Inventory_Valuation},
                    { path: 'all_transfers_table', component: All_Transfers_Table},
                    { path: 'request_quotation_lower', component: Request_quotation_lower},
                    { path: 'inventory_product_box', component: Inventory_Product_Box},
                    { path: 'product_inner', component: Product_inner},
                    { path: 'reordering_rules_table', component: Reordering_Rules_Table},
                    { path: 'inventory_adjustments_table', component: Inventory_Adjustments_Table},
                    { path: 'inventory_scrap_create', component: Inventory_Scrap_Create},
                    { path: '', component: Inventory_Dashboard},
                    { path: 'salesproductview', component: SalesProductView},
                    { path: 'inventory_product_boxes', component: Inventory_Product_Boxes},
                    { path: 'product_inner_edit', component: Product_Inner_Edit},
                    { path: 'reordering_rules_edit', component: reordering_rules_edit},
                    { path: 'inventory_adjustments_create', component: inventory_adjustments_create},
                    { path: 'stock_moves_table', component: Stock_Moves_Table},
                    { path: 'stock_moves_edit', component: Stock_Moves_Edit},
                    { path: 'stock_moves_create', component: stock_moves_create},
                    { path: 'procurement_exception_table', component: Procurement_Exception_Table},
                    { path: 'procurement_exception_create', component: procurement_exception_create},
                    { path: 'procurement_exception_edit', component: procurement_exception_edit},
                    { path: 'all_transfer_create', component: All_Transfer_Create},
                    { path: 'inventory_adjustment_edit', component: Inventory_Adjustment_Edit},
                    { path: 'inventory_product_categories', component: Inventory_Product_Categories},
                    { path: 'inventory_categories_table', component: Inventory_Categories_Table},
                    { path: 'accordions', component: Accordions},
                    { path: 'all_transfer_import', component: All_Transfer_Import},
                    { path: 'all_transfer_edit', component: All_Transfer_Edit},
                    { path: 'inventory_categories_create', component: Inventory_Categories_Create},
                    { path: 'modal', component: Modal},
                    { path: 'reordering_rules_import', component: Reordering_Rules_Import},
                    { path: 'inventory_valuation_table', component: Inventory_Valuation_Table},
                    { path: 'inventory_adjustments_import', component: Inventory_Adjustments_Import},
                    { path: 'inventory_scrap_import', component: Inventory_Scrap_Import},
                    { path: 'procurement_import', component: Procurement_Import},
                    { path: 'product_categories_import', component: Product_categories_import},
                    { path: 'all_transfer_grid', component: All_Transfer_Grid},
                    { path: 'grid_view', component: Grid_View},
                    { path: 'all_transfer_calender', component: All_Transfer_Calender},

                ]
            },

        ]

    },


];

module.exports = routes