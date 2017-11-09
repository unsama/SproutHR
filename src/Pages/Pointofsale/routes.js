
import POSfruit  from "./../../components/Pages/POSfruit/POSfruit.vue"
import POSsetting  from "./../../components/Pages/POSsetting/POSsetting.vue"
import POSlayout  from "./../../components/Pages/POSlayout/POSlayout.vue"
import POSdashboard   from "./../../components/Pages/POSdashboard/POSdashboard.vue"
import POSmodal   from "./../../components/Pages/POSmodal/POSmodal.vue"
import Posloading   from "./../../components/Pages/Posloading/Posloading.vue"
import Market_Pos   from "./../../components/Pages/Market_Pos/Market_Pos.vue"
import Poscategories   from "./../../components/Pages/Poscategories/Poscategories.vue"
import Posproducts   from "./../../components/Pages/Posproducts/Posproducts.vue"
import Pospayment   from "./../../components/Pages/Pospayment/Pospayment.vue"
import Posfruitedit   from "./../../components/partials/Posfruitedit/Posfruitedit.vue"
import Posfruitwoedit   from "./../../components/partials/Posfruitwoedit/Posfruitwoedit.vue"
import Possessions   from "./../../components/Pages/Possessions/Possessions.vue"
import Posorders   from "./../../components/Pages/Posorders/Posorders.vue"
import Posbarcode   from "./../../components/Pages/Posbarcode/Posbarcode.vue"
import Posdefaultnomen   from "./../../components/Pages/Posdefaultnomen/Posdefaultnomen.vue"
import Posdefaultedit   from "./../../components/Pages/Posdefaultedit/Posdefaultedit.vue"
import Posdefaultcreate   from "./../../components/Pages/Posdefaultcreate/Posdefaultcreate.vue"
import Poscreatemodal   from "./../../components/partials/Poscreatemodal/Poscreatemodal.vue"
import Posmaincompo   from "./../../components/partials/Posmaincompo/Posmaincompo.vue"
import Poscash   from "./../../components/Pages/Poscash/Poscash.vue"
import Posorderin   from "./../../components/Pages/Posorderin/Posorderin.vue"
import Possessionin   from "./../../components/Pages/Possessionin/Possessionin.vue"
import Possessionmodal   from "./../../components/partials/Possessionmodal/Possessionmodal.vue"
import Poscashedit   from "./../../components/Pages/Poscashedit/Poscashedit.vue"
import Pospaymentimport   from "./../../components/Pages/Pospaymentimport/Pospaymentimport.vue"
import Posbarcodeimport   from "./../../components/Pages/Posbarcodeimport/Posbarcodeimport.vue"
import Poscategoriesimport   from "./../../components/Pages/Poscategoriesimport/Poscategoriesimport.vue"
import Poscategoriescreate   from "./../../components/Pages/Poscategoriescreate/Poscategoriescreate.vue"
import Posproductcreate   from "./../../components/Pages/Posproductcreate/Posproductcreate.vue"
import Posmaincreate   from "./../../components/Pages/Posmaincreate/Posmaincreate.vue"
import Posdashboardsetting   from "./../../components/Pages/Posdashboardsetting/Posdashboardsetting.vue"
import Posproductincreate   from "./../../components/partials/Posproductincreate/Posproductincreate.vue"
import Posmarketcustomer   from "./../../components/Pages/Posmarketcustomer/Posmarketcustomer.vue"
import Possessionedit   from "./../../components/partials/Possessionedit/Possessionedit.vue"
import Possessioninedit   from "./../../components/Pages/Possessioninedit/Possessioninedit.vue"
import Posordersedit   from "./../../components/partials/Posordersedit/Posordersedit.vue"
import Posorderedit   from "./../../components/Pages/posorderedit/posorderedit.vue"
import Posproductedit   from "./../../components/partials/Posproductedit/Posproductedit.vue"
import Posproductsedit   from "./../../components/Pages/Posproductsedit/Posproductsedit.vue"
import Posproductboxes   from "./../../components/partials/Posproductboxes/posproductboxes.vue"
import Posproductsedits   from "./../../components/Pages/Posproductsedits/Posproductsedits.vue"
import Posproducteditor   from "./../../components/partials/Posproducteditor/Posproducteditor.vue"
import Posmarketpayment   from "./../../components/Pages/Posmarketpayment/Posmarketpayment.vue"
import Posmarketreceipt   from "./../../components/partials/Posmarketreceipt/Posmarketreceipt.vue"
import Posmainedit   from "./../../components/Pages/Posmainedit/Posmainedit.vue"
import Posfruits   from "./../../components/Pages/Posfruits/Posfruits.vue"
import Poseditcash   from "./../../components/Pages/Poseditcash/Poseditcash.vue"
import Posmarketpaymentcompo   from "./../../components/partials/Posmarketpaymentcompo/Posmarketpaymentcompo.vue"
import Posmarketcustomercompo   from "./../../components/partials/Posmarketcustomercompo/Posmarketcustomercompo.vue"
import Posmarketaddcustomer   from "./../../components/partials/Posmarketaddcustomer/Posmarketaddcustomer.vue"
import Posmodalorder   from "./../../components/partials/Posmodalorder/Posmodalorder.vue"
import Possessioninnermodal   from "./../../components/partials/Possessioninnermodal/Possessioninnermodal.vue"
import posorderreport  from "./../../components/Pages/Posorderreport/Posorderreport.vue"
import Pointofsale   from "./../../components/Pages/Pointofsale/Pointofsale.vue"
import Pointofsalemain   from "./../../components/Pages/Pointofsalemain/Pointofsalemain.vue"
import Pointofsalemaincreate   from "./../../components/Pages/Pointofsalemaincreate/Pointofsalemaincreate.vue"
import Pointofsaleimport   from "./../../components/Pages/Pointofsaleimport/Pointofsaleimport.vue"
import Modal from "./../../components/partials/Modal/Modal.vue"
import Test from "./../../components/Pages/Test/Test.vue"


const routes = [
    { path: '/pointofsale', component: Test,
        children: [
            { path: '', component: POSlayout,
                children: [
                    { path: '', component: POSdashboard},
                    { path: 'setting', component: POSsetting},
                    { path: 'modal', component: POSmodal},
                    { path: 'fruits', component: POSfruit},
                    { path: 'categories', component: Poscategories},
                    { path: 'posproduct', component: Posproducts},
                    { path: 'pospayment', component: Pospayment},
                    { path: 'posedit', component: Posfruitedit},
                    { path: 'pointofsale', component: Pointofsale},
                    { path: 'posorders', component: Posorders},
                    { path: 'posbarcode', component: Posbarcode},
                    { path: 'possession', component: Possessions},
                    { path: 'posdefault', component: Posdefaultnomen},
                    { path: 'posdmodal', component: Modal},
                    { path: 'posdefaultcreate', component: Posdefaultcreate},
                    { path: 'Poscreatemodal', component: Poscreatemodal},
                    { path: 'posmaincompo', component: Posmaincompo},
                    { path: 'posmain', component: Pointofsalemain},
                    { path: 'poscash', component: Poscash},
                    { path: 'poscashh', component: Poseditcash},
                    { path: 'posfruitwo', component: Posfruitwoedit},
                    { path: 'posorderin', component: Posorderin},
                    { path: 'possessionin', component: Possessionin},
                    { path: 'possessionmodal', component: Possessionmodal},
                    { path: 'poscasheditt', component: Poscashedit},
                    { path: 'pospaymentimport', component: Pospaymentimport},
                    { path: 'posbarcodeimport', component: Posbarcodeimport},
                    { path: 'pointofsaleimport', component: Pointofsaleimport},
                    { path: 'poscategoriesimport', component: Poscategoriesimport},
                    { path: 'poscategoriescreate', component: Poscategoriescreate},
                    { path: 'posproductcreate', component: Posproductcreate},
                    { path: 'pointofsalemaincreate', component: Pointofsalemaincreate},
                    { path: 'posmaincreate', component: Posmaincreate},
                    { path: 'posdashboardsetting', component: Posdashboardsetting},
                    { path: 'posproductincreate', component: Posproductincreate},
                    { path: 'possessioninedit', component: Possessioninedit},
                    { path: 'posorderedit', component: Posorderedit},
                    { path: 'posproductsedit', component: Posproductsedit},
                    { path: 'posproductboxes', component: Posproductboxes},
                    { path: 'posproductsedits', component: Posproductsedits},
                    { path: 'posproducteditor', component: Posproducteditor},
                    { path: 'posmarket', component: Market_Pos},
                    { path: 'posmainedit', component: Posmainedit},
                    { path: 'fruitss', component: Posfruits},
                    { path: 'posmarketpaymentcompo', component: Posmarketpaymentcompo},
                    { path: 'posmarketcustomercompo', component: Posmarketcustomercompo},
                    { path: 'posmarketpayment', component: Posmarketpayment},
                    { path: 'posmarketaddcustomer', component: Posmarketaddcustomer},
                    { path: 'posmodalorder', component: Posmodalorder},
                    { path: 'possessioninnermodal', component: Possessioninnermodal},
                    { path: 'posorderreport', component: posorderreport},

                ]
            },
        ]
    },
];

module.exports = routes