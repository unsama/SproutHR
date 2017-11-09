import Dashboardlayout   from "./../../components/Pages/Dashboardlayout/Dashboardlayout.vue"
import TimesheetDetailedActivity   from "./../../components/Pages/TimesheetDetailedActivity/TimesheetDetailedActivity.vue"
import TimesheetDetailedActivityImport   from "./../../components/Pages/TimesheetDetailedActivityImport/TimesheetDetailedActivityImport.vue"
import Test from "./../../components/Pages/Test/Test.vue"
import Dashboardspage from "./../../components/Pages/Dashboardspage/Dashboardspage.vue"



const routes = [
    { path: '/dashboards', component: Test,
        children: [
            { path: '', component: Dashboardlayout,
                children: [
                    { path: '', component: Dashboardspage},

                ]
            },
        ]
    },
];

module.exports = routes