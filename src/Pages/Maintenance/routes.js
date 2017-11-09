import Maintenancelayout  from "./../../components/Pages/Maintenancelayout/Maintenancelayout.vue"
import Maintenancedashboard  from "./../../components/Pages/Maintenancedashboard/Maintenancedashboard.vue"
import Maintenancerequest  from "./../../components/Pages/Maintenancerequest/Maintenancerequest.vue"
import Maintenanceequipments  from "./../../components/Pages/Maintenanceequipments/Maintenanceequipments.vue"
import Maintenanceequipmentslist  from "./../../components/Pages/Maintenanceequipmentslist/Maintenanceequipmentslist.vue"
import Maintenancedashboardgrid  from "./../../components/partials/Maintenancedashboardgrid/Maintenancedashboardgrid.vue"
import Maintenancecalendar  from "./../../components/Pages/Maintenancecalendar/Maintenancecalendar.vue"
import Maintenancepipeline  from "./../../components/partials/Maintenancepipeline/Maintenancepipeline.vue"
import Maintenancetodo  from "./../../components/Pages/Maintenancetodo/Maintenancetodo.vue"
import Maintenancetop  from "./../../components/Pages/Maintenancetop/Maintenancetop.vue"
import Maintenanceblocked  from "./../../components/Pages/Maintenanceblocked/Maintenanceblocked.vue"
import Maintenancedashedit  from "./../../components/partials/Maintenancedashedit/Maintenancedashedit.vue"
import Maintenancedashsetting  from "./../../components/Pages/Maintenancedashsetting/Maintenancedashsetting.vue"
import Maintenancegridin  from "./../../components/partials/Maintenancegridin/Maintenancegridin.vue"
import Maintenancegridpage  from "./../../components/Pages/Maintenancegridpage/Maintenancegridpage.vue"
import Maintenancereqcreate  from "./../../components/partials/Maintenancereqcreate/Maintenancereqcreate.vue"
import Maintenancerequestcreate  from "./../../components/Pages/Maintenancerequestcreate/Maintenancerequestcreate.vue"
import Maintenanceequipmentsinner   from "./../../components/partials/Maintenanceequipmentsinner/Maintenanceequipmentsinner.vue"
import Maintenanceequipmentsinnerpage   from "./../../components/Pages/Maintenanceequipmentsinnerpage/Maintenanceequipmentsinnerpage.vue"
import Test   from "./../../components/Pages/Test/Test.vue"

const routes = [
    { path: '/', component: Test,
        children: [
            { path: 'maintenance', component: Maintenancelayout,
                children: [
                    { path: '', component: Maintenancedashboard},
                    { path: 'maintenancerequest', component: Maintenancerequest},
                    { path: 'maintenanceequipments', component: Maintenanceequipments},
                    { path: 'maintenanceequipmentslist', component: Maintenanceequipmentslist},
                    { path: 'maintenancedashboardgrid', component: Maintenancedashboardgrid},
                    { path: 'maintenancecalendar', component: Maintenancecalendar},
                    { path: 'maintenancepipeline', component: Maintenancepipeline},
                    { path: 'maintenancetodo', component: Maintenancetodo},
                    { path: 'maintenancetop', component: Maintenancetop},
                    { path: 'maintenanceblocked', component: Maintenanceblocked},
                    { path: 'maintenancedashedit', component: Maintenancedashedit},
                    { path: 'maintenancedashsetting', component: Maintenancedashsetting},
                    { path: 'maintenancegridin', component: Maintenancegridin},
                    { path: 'maintenancegridpage', component: Maintenancegridpage},
                    { path: 'maintenancereqcreate', component: Maintenancereqcreate},
                    { path: 'maintenancerequestcreate', component: Maintenancerequestcreate},
                    { path: 'maintenanceequipmentsinner', component: Maintenanceequipmentsinner},
                    { path: 'maintenanceequipmentsinnerpage', component: Maintenanceequipmentsinnerpage},
                ]
            },
        ]
    },


];

module.exports = routes