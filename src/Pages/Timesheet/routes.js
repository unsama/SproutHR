import Test from "./../../components/Pages/Test/Test.vue"
import TimeSheetLayout   from "./../../components/Pages/TimeSheetLayout/TimeSheetLayout.vue"
import TimesheetDetailedActivity   from "./../../components/Pages/TimesheetDetailedActivity/TimesheetDetailedActivity.vue"
import TimesheetDetailedActivityImport  from "./../../components/Pages/TimesheetDetailedActivityImport/TimesheetDetailedActivityImport.vue"
import TimeSheetReport  from "./../../components/Pages/TimeSheetReport/TimeSheetReport.vue"


const routes = [

    { path: '/timesheet', component: Test,
        children: [
            { path: '', component: TimeSheetLayout,
                children: [
                    { path: 'detailedactivity', component: TimesheetDetailedActivity},
                    { path: 'detailedactivityimport', component: TimesheetDetailedActivityImport},
                    { path: 'report', component: TimeSheetReport},
                ]
            },
        ]
    },
];

module.exports = routes