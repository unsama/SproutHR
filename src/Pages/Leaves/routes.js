import Test from "./../../components/Pages/Test/Test.vue"
import leave_meeting_create from "./../../components/Pages/leave_meeting_create/leave_meeting_create.vue"
import Leave_meeting_table from "./../../components/Pages/Leave_meeting_table/Leave_meeting_table.vue"
import Leaves_Layout  from "./../../components/Pages/Leaves_Layout/Leaves_Layout.vue"
import Leaves_Summary  from "./../../components/Pages/Leaves_Summary/Leaves_Summary.vue"
import duplicate_leave_allocation  from "./../../components/Pages/duplicate_leave_allocation/duplicate_leave_allocation.vue"
import Leaves_Allocation  from "./../../components/Pages/Leaves_Allocation/Leaves_Allocation.vue"
import Leaves_Request  from "./../../components/Pages/Leaves_Request/Leaves_Request.vue"
import Leaves_Dashboard  from "./../../components/Pages/Leaves_Dashboard/Leaves_Dashboard.vue"
import Leave_Allocation_Table  from "./../../components/Pages/Leave_Allocation_Table/Leave_Allocation_Table.vue"
import Leave_Allocation_Edit  from "./../../components/Pages/Leave_Allocation_Edit/Leave_Allocation_Edit.vue"
import Leave_Allocation_Create  from "./../../components/Pages/Leave_Allocation_Create/Leave_Allocation_Create.vue"
import Leaves  from "./../../components/Pages/Leaves/Leaves.vue"
import leave_summary_duplicate  from "./../../components/Pages/leave_summary_duplicate/leave_summary_duplicate.vue"
import leavemeeting  from "./../../components/Pages/leavemeeting/leavemeeting.vue"
import Leaves_Create  from "./../../components/Pages/Leaves_Create/Leaves_Create.vue"
import Leave_Summary_create  from "./../../components/Pages/Leave_Summary_create/Leave_Summary_create.vue"
import Leave_Summary_Import  from "./../../components/Pages/Leave_Summary_Import/Leave_Summary_Import.vue"
import Allocation_Leaves  from "./../../components/Pages/Allocation_Leaves/Allocation_Leaves.vue"
import Leaves_Import  from "./../../components/Pages/Leaves_Import/Leaves_Import.vue"
import Allocation_Leaves_Create  from "./../../components/Pages/Allocation_Leaves_Create/Allocation_Leaves_Create.vue"
import Allocation_Leaves_Import  from "./../../components/Pages/Allocation_Leaves_Import/Allocation_Leaves_Import.vue"
import Leaves_Details   from "./../../components/Pages/Leaves_Details/Leaves_Details.vue"
import Leaves_Detail_Import   from "./../../components/Pages/Leaves_Detail_Import/Leaves_Detail_Import.vue"
import Leaves_Detail_Table   from "./../../components/Pages/Leaves_Detail_Table/Leaves_Detail_Table.vue"
import Leaves_Detail_Edit   from "./../../components/Pages/Leaves_Detail_Edit/Leaves_Detail_Edit.vue"
import Leaves_Detail_Create   from "./../../components/Pages/Leaves_Detail_Create/Leaves_Detail_Create.vue"
import Leaves_Configuration   from "./../../components/Pages/Leaves_Configuration/Leaves_Configuration.vue"
import Leaves_Configuration_Table   from "./../../components/Pages/Leaves_Configuration_table/Leaves_Configuration_table.vue"
import Leaves_Configuration_Edit   from "./../../components/Pages/Leaves_Configuration_Edit/Leaves_Configuration_Edit.vue"
import Leaves_Configuration_Create   from "./../../components/Pages/Leaves_Configuration_Create/Leaves_Configuration_Create.vue"
import Leaves_Configuration_Import   from "./../../components/Pages/Leaves_Configuration_Import/Leaves_Configuration_Import.vue"
import Leaves_Request_Table   from "./../../components/Pages/Leaves_Request_Table/Leaves_Request_Table.vue"
import Leaves_Request_Calendar   from "./../../components/Pages/Leaves_Request_Calendar/Leaves_Request_Calendar.vue"
import leaves_table   from "./../../components/Pages/leaves_table/leaves_table.vue"
import Leaves_Request_Import   from "./../../components/Pages/Leaves_Request_Import/Leaves_Request_Import.vue"
import Leaves_Request_Edit   from "./../../components/Pages/Leaves_Request_Edit/Leaves_Request_Edit.vue"
import Leaves_Request_Create   from "./../../components/Pages/Leaves_Request_Create/Leaves_Request_Create.vue"
import Leaves_Allocation_Import   from "./../../components/Pages/Leaves_Allocation_Import/Leaves_Allocation_Import.vue"
import Leaves_Pivot   from "./../../components/Pages/Leaves_Pivot/Leaves_Pivot.vue"
import Department_leave_Edit   from "./../../components/Pages/Department_leave_Edit/Department_leave_Edit.vue"
import Leaves_Summary_Table   from "./../../components/Pages/Leaves_Summary_Table/Leaves_Summary_Table.vue"
import Leave_Summary_Edit   from "./../../components/Pages/Leave_Summary_Edit/Leave_Summary_Edit.vue"
import leavetype_duplicate   from "./../../components/Pages/leavetype_duplicate/leavetype_duplicate.vue"
import Department_leave_create   from "./../../components/Pages/Department_leave_create/Department_leave_create.vue"
import Deparment_leave_duplicate   from "./../../components/Pages/Deparment_leave_duplicate/Deparment_leave_duplicate.vue"
import Department_leave_select   from "./../../components/Pages/Department_leave_select/Department_leave_select.vue"
import leaves_select   from "./../../components/Pages/leaves_select/leaves_select.vue"
import leave_edit   from "./../../components/Pages/leave_edit/leave_edit.vue"
import leave_duplicate   from "./../../components/Pages/leave_duplicate/leave_duplicate.vue"
import leave_create   from "./../../components/Pages/leave_create/leave_create.vue"
import leave_type  from "./../../components/partials/leave_type/leave_type.vue"
import leaveallocationRequest  from "./../../components/partials/leaveallocationRequest/leaveallocationRequest.vue"
import leavetype_create  from "./../../components/partials/leavetype_create/leavetype_create.vue"
import selectallocation  from "./../../components/partials/selectallocation/selectallocation.vue"
const routes = [
    { path: '/leaves', component: Test,
        children: [
            { path: '', component: Leaves_Layout,
                children: [
                    { path: 'leave_edit/:id', component: leave_edit},
                    { path: 'Leave_meeting_table', component: Leave_meeting_table},
                    { path: 'leave_meeting_create', component: leave_meeting_create},
                    { path: 'leave_duplicate/:id', component: leave_duplicate},
                    { path: 'leave_create', component: leave_create},
                    { path: 'leaves_select/:id', component: leaves_select},
                    { path: 'Deparment_leave_duplicate/:id', component: Deparment_leave_duplicate},
                    { path: 'Department_leave_select/:id', component: Department_leave_select},
                    { path: 'Department_leave_create', component: Department_leave_create},
                    { path: 'leaves_table', component: leaves_table},
                    { path: 'Department_leave_Edit/:id', component: Department_leave_Edit},
                    { path: 'selectallocation', component: selectallocation},
                    { path: 'leaveallocationRequest', component: leaveallocationRequest},
                    { path: 'leavetype_create', component: leavetype_create},
                    { path: 'leave_type', component: leave_type},
                    { path: 'leaves_summary', component: Leaves_Summary},
                    { path: 'leaves_allocation', component: Leaves_Allocation},
                    { path: 'leaves_request', component: Leaves_Request},
                    { path: '', component: Leaves_Dashboard},
                    { path: 'leave_allocation_table/:id', component: Leave_Allocation_Table},
                    { path: 'leave_allocation_edit/:id', component: Leave_Allocation_Edit},
                    { path: 'leave_allocation_create', component: Leave_Allocation_Create},
                    { path: 'leaves', component: Leaves},
                    { path: 'leaves_create', component: Leaves_Create},
                    { path: 'leave_summary_create', component: Leave_Summary_create},
                    { path: 'leave_summary_import', component: Leave_Summary_Import},
                    { path: 'allocation_leaves', component: Allocation_Leaves},
                    { path: 'leaves_import', component: Leaves_Import},
                    { path: 'allocation_leaves_create', component: Allocation_Leaves_Create},
                    { path: 'allocation_leaves_import', component: Allocation_Leaves_Import},
                    { path: 'leaves_details', component: Leaves_Details},
                    { path: 'leaves_detail_import', component: Leaves_Detail_Import},
                    { path: 'leaves_detail_table', component: Leaves_Detail_Table},
                    { path: 'leaves_detail_edit', component: Leaves_Detail_Edit},
                    { path: 'leaves_detail_create', component: Leaves_Detail_Create},
                    { path: 'leaves_configuration', component: Leaves_Configuration},
                    { path: 'leaves_configuration_table/:id', component: Leaves_Configuration_Table},
                    { path: 'leaves_configuration_edit/:id', component: Leaves_Configuration_Edit},
                    { path: 'Leaves_Configuration_Create', component: Leaves_Configuration_Create},
                    { path: 'leaves_configuration_import', component: Leaves_Configuration_Import},
                    { path: 'leaves_request_table', component: Leaves_Request_Table},
                    { path: 'leaves_request_calendar', component: Leaves_Request_Calendar},
                    { path: 'leaves_request_import', component: Leaves_Request_Import},
                    { path: 'leaves_request_edit', component: Leaves_Request_Edit},
                    { path: 'leaves_request_create', component: Leaves_Request_Create},
                    { path: 'leaves_allocation_import', component: Leaves_Allocation_Import},
                    { path: 'allocation_leave_import', component: Allocation_Leaves_Import},
                    { path: 'leaves_pivot', component: Leaves_Pivot},
                    { path: 'leaves_summary_table/:id', component: Leaves_Summary_Table},
                    { path: 'leave_summary_edit/:id', component: Leave_Summary_Edit},
                    { path: 'leavetype_duplicate/:id', component: leavetype_duplicate},
                    { path: 'duplicate_leave_allocation/:id', component: duplicate_leave_allocation},
                    { path: 'leavemeeting', component: leavemeeting},
                    { path: 'leave_summary_duplicate/:id', component: leave_summary_duplicate},
                ]
            },
        ]

    },


];

module.exports = routes