import Vendormenu  from "./../../components/Pages/Vendormenu/Vendormenu.vue"
import Incomingmenu  from "./../../components/Pages/Incomingmenu/Incomingmenu.vue"
import Request_quotation_inner  from "./../../components/Pages/Request_quotation_inner/Request_quotation_inner.vue"
import Request_quotation_lower  from "./../../components/partials/Request_quotation_lower/Request_quotation_lower.vue"
import Vendor_inner  from "./../../components/Pages/Vendor_inner/Vendor_inner.vue"
import EditProduct from "./../../components/Pages/EditProduct/EditProduct.vue"
import CreateProduct from "./../../components/Pages/CreateProduct/CreateProduct.vue"
import Productingcreate  from "./../../components/Pages/Productingcreate/Productingcreate.vue"
import RQorder from "./../../components/Pages/RQorder/RQorder.vue"
import incomcreate from "./../../components/Pages/incomcreate/incomcreate.vue"
import RQEdit from "./../../components/Pages/RQEdit/RQEdit.vue"
import RQcreate from "./../../components/Pages/RQcreate/RQcreate.vue"
import RequestQuotation from "./../../components/Pages/RequestQuotation/RequestQuotation.vue"
import RQ from "./../../components/Pages/RQ/RQ.vue"
import VendorBillEdits from "./../../components/Pages/VendorBillEdits/VendorBillEdits.vue"
import VendorBillCreate from "./../../components/Pages/VendorBillCreate/VendorBillCreate.vue"
import VendorsEdit from "./../../components/Pages/VendorsEdit/VendorsEdit.vue"
import VendorCreate from "./../../components/Pages/VendorCreate/VendorCreate.vue"
import PurchaseorderImport from "./../../components/Pages/PurchaseorderImport/PurchaseorderImport.vue"
import VendorbillImport from "./../../components/Pages/VendorbillImport/VendorbillImport.vue"
import IncomingProductImport from "./../../components/Pages/IncomingProductImport/IncomingProductImport.vue"
import vendors from "./../../components/Pages/vendors/vendors.vue"
import VendorBills from "./../../components/Pages/VendorBills/VendorBills.vue"
import Vendorpkr  from "./../../components/Pages/Vendorpkr/Vendorpkr.vue"
import Vendoredit  from "./../../components/Pages/Vendoredit/Vendoredit.vue"
import IncomingProducts from "./../../components/Pages/IncomingProducts/IncomingProducts.vue"
import product from "./../../components/Pages/product/product.vue"
import GateEntry from "./../../components/Pages/GateEntry/GateEntry.vue"
import PurchaseSetting from "./../../components/Pages/PurchaseSetting/PurchaseSetting.vue"
import Companies  from "./../../components/Pages/Companies/Companies.vue"
import Calendar from "./../../components/partials/Calendar/Calendar.vue"
import Product_inner  from "./../../components/Pages/Product_inner/Product_inner.vue"
import Pkr  from "./../../components/partials/Pkr/Pkr.vue"
import Companypopup from "./../../components/partials/Companypopup/Companypopup.vue"
import Receipts  from "./../../components/partials/Receipts/Receipts.vue"
import Yourcompany  from "./../../components/Pages/Yourcompany/Yourcompany.vue"
import Stock  from "./../../components/Pages/Stock/Stock.vue"
import Stock_list  from "./../../components/Pages/Stock_list/Stock_list.vue"
import Companysequence  from "./../../components/Pages/Companysequence/Companysequence.vue"
import Profile  from "./../../components/Pages/Profile/Profile.vue"
import Inproduct  from "./../../components/Pages/Inproduct/Inproduct.vue"
import All  from "./../../components/Pages/All/All.vue"
import Sales  from "./../../components/Pages/Sales/Sales.vue"
import Imported  from "./../../components/Pages/Imported/Imported.vue"
import RFQ_Create  from "./../../components/Pages/RFQ_Create/RFQ_Create.vue"
import Administrators  from "./../../components/Pages/Administrators/Administrators.vue"
import Billing  from "./../../components/Pages/Billing/Billing.vue"
import Incomingproduct_edit  from "./../../components/Pages/Incomingproduct_edit/Incomingproduct_edit.vue"
import Terms  from "./../../components/Pages/Terms/Terms.vue"
import Buttonsgroup  from "./../../components/partials/Buttonsgroup/Buttonsgroup.vue"
import Product_Boxes   from "./../../components/partials/Product_Boxes/Product_Boxes.vue"
import Pagination   from "./../../components/partials/Pagination/Pagination.vue"
import Test   from "./../../components/Pages/Test/Test.vue"
import InsideHrThree from "./../../components/Pages/InsideHrThree/InsideHrThree.vue"
import Subview from "./../../components/Pages/Subview/Subview.vue"
import RQImport from "./../../components/Pages/RQImport/RQImport.vue"
import board from "./../../components/Pages/board/board.vue"
import RQordergrid from "./../../components/Pages/RQordergrid/RQordergrid.vue"
import RQcreatecompo from "./../../components/partials/RQcreatecompo/RQcreatecompo.vue"
import Productinnercompo from "./../../components/partials/Productinnercompo/Productinnercompo.vue"
import RQin from "./../../components/partials/RQin/RQin.vue"
import Vendorbillcreatecompo from "./../../components/partials/Vendorbillcreatecompo/Vendorbillcreatecompo.vue"
import Purchasereports from "./../../components/Pages/Purchasereports/Purchasereports.vue"
import Purchasereportsgraph from "./../../components/Pages/Purchasereportsgraph/Purchasereportsgraph.vue"
import producttable from "./../../components/Pages/producttable/producttable.vue"

const routes = [
    { path: '/purchase', component: Test,
        children: [
            { path: '', component: Subview,
                children: [
                    { path: '', component: RequestQuotation},
                    { path: 'Request_quotation_lower', component: Request_quotation_lower},
                    { path: 'EditProduct', component: EditProduct},
                    { path: 'CreateProduct', component: CreateProduct},
                    { path: 'Productingcreate', component: Productingcreate},
                    { path: 'RQorder', component: RQorder},
                    { path: 'incomcreate', component: incomcreate},
                    { path: 'RQcreate', component: RQcreate},
                    { path: 'RQ', component: RQ},
                    { path: 'RQEdit', component: RQEdit},
                    { path: 'VendorBillCreate', component: VendorBillCreate},
                    { path: 'VendorBillEdits', component: VendorBillEdits},
                    { path: 'VendorsEdit', component: VendorsEdit},
                    { path: 'VendorCreate', component: VendorCreate},
                    { path: 'RQImport', component: RQImport},
                    { path: 'PurchaseorderImport', component: PurchaseorderImport},
                    { path: 'VendorbillImport', component: VendorbillImport},
                    { path: 'purchase_order', component: board},
                    { path: 'IncomingProductImport', component: IncomingProductImport},
                    { path: 'vendor', component: vendors},
                    { path: 'products', component: product},
                    { path: 'entry_gate', component: GateEntry},
                    { path: 'incoming_products', component: IncomingProducts},
                    { path: 'vendor_bills', component: VendorBills},
                    { path: 'setting', component: PurchaseSetting},
                    { path: 'Companies', component: Companies},
                    { path: 'requestinner', component: Request_quotation_inner},
                    { path: 'vendorinner', component: Vendor_inner},
                    { path: 'Vendormenu', component: Vendormenu},
                    { path: 'calendar', component: Calendar},
                    { path: 'product_inner', component: Product_inner},
                    { path: 'pkr', component: Pkr},
                    { path: 'Incomingmenu', component: Incomingmenu},
                    { path: 'Companypopup', component: Companypopup},
                    { path: 'Receipts', component: Receipts},
                    { path: 'Yourcompany', component: Yourcompany},
                    { path: 'Stock', component: Stock},
                    { path: 'Companysequence', component: Companysequence},
                    { path: 'profile', component: Profile},
                    { path: 'Inproduct', component: Inproduct},
                    { path: 'stock_list', component: Stock_list},
                    { path: 'all', component: All},
                    { path: 'sales', component: Sales},
                    { path: 'imported', component: Imported},
                    { path: 'vendorpkr', component: Vendorpkr},
                    { path: 'rfq', component: RFQ_Create},
                    { path: 'Administrators', component: Administrators},
                    { path: 'Billing', component: Billing},
                    { path: 'vendoredit', component: Vendoredit},
                    { path: 'incomingproduct_edit', component: Incomingproduct_edit},
                    { path: 'Terms', component: Terms},
                    { path: 'Buttonsgroup', component: Buttonsgroup},
                    { path: 'product_boxes', component: Product_Boxes},
                    { path: 'pagination', component: Pagination},
                    { path: 'InsideHrThree', component: InsideHrThree},
                    { path: 'rqordergrid', component: RQordergrid},
                    { path: 'rqcreatecompo', component: RQcreatecompo},
                    { path: 'rqin', component: RQin},
                    { path: 'purchasereports', component: Purchasereports},
                    { path: 'purchasereportsgraph', component: Purchasereportsgraph},
                    { path: 'productinnercompo', component: Productinnercompo},
                    { path: 'vendorbillcreatecompo', component: Vendorbillcreatecompo},
                    { path: 'producttable', component: producttable},
                ]
            },
        ]
    },
];

module.exports = routes