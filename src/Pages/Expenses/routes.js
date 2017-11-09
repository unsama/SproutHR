
import Expensessubmit   from "./../../components/Pages/Expensessubmit/Expensessubmit.vue"
import Expensessubmitgrid   from "./../../components/Pages/Expensessubmitgrid/Expensessubmitgrid.vue"
import Expensesrefused   from "./../../components/Pages/Expensesrefused/Expensesrefused.vue"
import Expensesreports   from "./../../components/Pages/Expensesreports/Expensesreports.vue"
import Expensesapprove   from "./../../components/Pages/Expensesapprove/Expensesapprove.vue"
import Expensespost   from "./../../components/Pages/Expensespost/Expensespost.vue"
import Expensespay   from "./../../components/Pages/Expensespay/Expensespay.vue"
import Expensesall   from "./../../components/Pages/Expensesall/Expensesall.vue"
import Expensesproducts   from "./../../components/Pages/Expensesproducts/Expensesproducts.vue"
import Expensessetting   from "./../../components/Pages/Expensessetting/Expensessetting.vue"
import Expensesallreports   from "./../../components/Pages/Expensesallreports/Expensesallreports.vue"
import Expensessubmitcreate  from "./../../components/partials/Expensessubmitcreate/Expensessubmitcreate.vue"
import Expensessubmitcreatepage  from "./../../components/Pages/Expensessubmitcreatepage/Expensessubmitcreatepage.vue"
import Expensessubmitimport  from "./../../components/Pages/Expensessubmitimport/Expensessubmitimport.vue"
import Expensessubmitin  from "./../../components/partials/Expensessubmitin/Expensessubmitin.vue"
import Expensessubmittable  from "./../../components/Pages/Expensessubmittable/Expensessubmittable.vue"
import Expensessubmitinedit  from "./../../components/partials/Expensessubmitinedit/Expensessubmitinedit.vue"
import Expensessubmitedit  from "./../../components/Pages/Expensessubmitedit/Expensessubmitedit.vue"
import Expensesrefusedcreate  from "./../../components/Pages/Expensesrefusedcreate/Expensesrefusedcreate.vue"
import Expensesrefusedimport  from "./../../components/Pages/Expensesrefusedimport/Expensesrefusedimport.vue"
import Expensesreportsin  from "./../../components/Pages/Expensesreportsin/Expensesreportsin.vue"
import Expensesreportstable  from "./../../components/partials/Expensesreportstable/Expensesreportstable.vue"
import Expensesreportscreate  from "./../../components/Pages/Expensesreportscreate/Expensesreportscreate.vue"
import Expensesreportscreatein  from "./../../components/partials/Expensesreportscreatein/Expensesreportscreatein.vue"
import Expensesreportsimport  from "./../../components/Pages/Expensesreportsimport/Expensesreportsimport.vue"
import Expensesapproveimport  from "./../../components/Pages/Expensesapproveimport/Expensesapproveimport.vue"
import Expensesproductslist  from "./../../components/Pages/Expensesproductslist/Expensesproductslist.vue"
import Expensesproductscreatecompo  from "./../../components/partials/Expensesproductscreatecompo/Expensesproductscreatecompo.vue"
import Expensesproductscreate  from "./../../components/Pages/Expensesproductscreate/Expensesproductscreate.vue"
import Expensesproductlistcreate  from "./../../components/Pages/Expensesproductlistcreate/Expensesproductlistcreate.vue"
import Expensespostcreate  from "./../../components/Pages/Expensespostcreate/Expensespostcreate.vue"
import Expensespostimport  from "./../../components/Pages/Expensespostimport/Expensespostimport.vue"
import Expensespayimport  from "./../../components/Pages/Expensespayimport/Expensespayimport.vue"
import Expensespaycreate  from "./../../components/Pages/Expensespaycreate/Expensespaycreate.vue"
import Expensespostgrid  from "./../../components/Pages/Expensespostgrid/Expensespostgrid.vue"
import Expensespaygrid  from "./../../components/Pages/Expensespaygrid/Expensespaygrid.vue"
import Expensesproductimport  from "./../../components/Pages/Expensesproductimport/Expensesproductimport.vue"
import Expensespostgridcreate  from "./../../components/Pages/Expensespostgridcreate/Expensespostgridcreate.vue"
import Expensesproductscompo  from "./../../components/partials/Expensesproductscompo/Expensesproductscompo.vue"
import Expensesalllist  from "./../../components/Pages/Expensesalllist/Expensesalllist.vue"
import Expensesallgrid  from "./../../components/Pages/Expensesallgrid/Expensesallgrid.vue"
import Test  from "./../../components/Pages/Test/Test.vue"
import Expenseslayout  from "./../../components/Pages/Expenseslayout/Expenseslayout.vue"
import Arrowtext  from "./../../components/partials/Arrowtext/Arrowtext.vue"
import chat  from "./../../components/partials/chat/chat.vue"
import Generalsetting  from "./../../components/Pages/Generalsetting/Generalsetting.vue"



const routes = [
    { path: '/expenses', component: Test,
        children: [
            { path: '', component: Expenseslayout,
                children: [
                    { path: '', component: Expensessubmit},
                    { path: 'expensesrefused', component: Expensesrefused},
                    { path: 'expensesreports', component: Expensesreports},
                    { path: 'expensesapprove', component: Expensesapprove},
                    { path: 'expensespost', component: Expensespost},
                    { path: 'expensespay', component: Expensespay},
                    { path: 'expensesall', component: Expensesall},
                    { path: 'expensesallreports', component: Expensesallreports},
                    { path: 'expensessetting', component: Expensessetting},
                    { path: 'expensesproducts', component: Expensesproducts},
                    { path: 'expensessubmitgrid', component: Expensessubmitgrid},
                    { path: 'arrowtext', component: Arrowtext},
                    { path: 'expensegeneralsetting', component: Generalsetting},
                    { path: 'expensessubmitcreate', component: Expensessubmitcreate},
                    { path: 'expensessubmitcreatepage', component: Expensessubmitcreatepage},
                    { path: 'expensessubmitimport', component: Expensessubmitimport},
                    { path: 'expensessubmitin', component: Expensessubmitin},
                    { path: 'expensessubmittable', component: Expensessubmittable},
                    { path: 'expensessubmitinedit', component: Expensessubmitinedit},
                    { path: 'expensessubmitedit', component: Expensessubmitedit},
                    { path: 'expensesrefusedcreate', component: Expensesrefusedcreate},
                    { path: 'expensesrefusedimport', component: Expensesrefusedimport},
                    { path: 'expensesreportsin', component: Expensesreportsin},
                    { path: 'expensesreportstable', component: Expensesreportstable},
                    { path: 'expensesreportscreate', component: Expensesreportscreate},
                    { path: 'expensesreportscreatein', component: Expensesreportscreatein},
                    { path: 'expensesreportsimport', component: Expensesreportsimport},
                    { path: 'expensesapproveimport', component: Expensesapproveimport},
                    { path: 'expensesproductslist', component: Expensesproductslist},
                    { path: 'expensesproductscreatecompo', component: Expensesproductscreatecompo},
                    { path: 'expensesproductscreate', component: Expensesproductscreate},
                    { path: 'expensesproductlistcreate', component: Expensesproductlistcreate},
                    { path: 'expensespostcreate', component: Expensespostcreate},
                    { path: 'expensespostimport', component: Expensespostimport},
                    { path: 'expensespayimport', component: Expensespayimport},
                    { path: 'expensespaycreate', component: Expensespaycreate},
                    { path: 'expensespostgrid', component: Expensespostgrid},
                    { path: 'expensespostgridcreate', component: Expensespostgridcreate},
                    { path: 'expensespaygrid', component: Expensespaygrid},
                    { path: 'expensesproductimport', component: Expensesproductimport},
                    { path: 'Expensesproductscompo', component: Expensesproductscompo},
                    { path: 'expensesallgrid', component: Expensesallgrid},
                    { path: 'chat', component: chat},
                    { path: 'expensesalllist', component: Expensesalllist},


                ]
            },
        ]

    },


];

module.exports = routes