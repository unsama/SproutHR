import Project_layout   from "./../../components/Pages/Project_Layout/Project_Layout.vue"
import Project_Task   from "./../../components/Pages/Project_Task/Project_Task.vue"
import Test from "./../../components/Pages/Test/Test.vue"
import Project_settings   from "./../../components/Pages/Project_settings/Project_settings.vue"
import Project_Stages   from "./../../components/Pages/Project_Stages/Project_Stages.vue"
import Project_Stage_Import   from "./../../components/Pages/Project_Stage_Import/Project_Stage_Import.vue"
import Project_Stage_Create   from "./../../components/Pages/Project_Stage_Create/Project_Stage_Create.vue"
import Project_Stage_Table   from "./../../components/Pages/Project_Stage_Table/Project_Stage_Table.vue"
import Project_Stage_Edit   from "./../../components/Pages/Project_Stage_Edit/Project_Stage_Edit.vue"
import Projects   from "./../../components/Pages/Projects/Projects.vue"
import Project_Import   from "./../../components/Pages/Project_Import/Project_Import.vue"
import Project_Create   from "./../../components/Pages/Project_Create/Project_Create.vue"
import Project_Table   from "./../../components/Pages/Project_Table/Project_Table.vue"
import Project_Edit   from "./../../components/Pages/Project_Edit/Project_Edit.vue"
import Project_Issues   from "./../../components/Pages/Project_Issues/Project_Issues.vue"
import Project_Issue_Create   from "./../../components/Pages/Project_Issue_Create/Project_Issue_Create.vue"
import Project_Issue_Edit   from "./../../components/Pages/Project_Issue_Edit/Project_Issue_Edit.vue"
import Project_Issue_Inner   from "./../../components/Pages/Project_Issue_Inner/Project_Issue_Inner.vue"
import Task_Analysis  from "./../../components/Pages/Task_Analysis/Task_Analysis.vue"
import Issue_Analysis  from "./../../components/Pages/Issue_Analysis/Issue_Analysis.vue"
import Project_Dashboard  from "./../../components/Pages/Project_Dashboard/Project_Dashboard.vue"
import Project_Dashboard_Pipeline  from "./../../components/Pages/Project_Dashboard_Pipeline/Project_Dashboard_Pipeline.vue"
import Project_Grid  from "./../../components/partials/Project_Grid/Project_Grid.vue"
import Project_Task_Inner  from "./../../components/Pages/Project_Task_Inner/Project_Task_Inner.vue"
import Project_Task_Create  from "./../../components/Pages/Project_Task_Create/Project_Task_Create.vue"


const routes = [
    { path: '/projects', component: Test,
        children: [
            { path: '', component: Project_layout,
                children: [
                    { path: 'project_task', component: Project_Task },
                    { path: 'project_settings', component: Project_settings },
                    { path: 'project_stages', component: Project_Stages },
                    { path: 'project_stage_import', component: Project_Stage_Import },
                    { path: 'project_stage_create', component: Project_Stage_Create },
                    { path: 'project_stage_table', component: Project_Stage_Table },
                    { path: 'project_stage_edit', component: Project_Stage_Edit },
                    { path: 'Project', component: Projects },
                    { path: 'project_import', component: Project_Import },
                    { path: 'project_create', component: Project_Create },
                    { path: 'project_table', component: Project_Table },
                    { path: 'project_edit', component: Project_Edit },
                    { path: 'project_issues', component: Project_Issues },
                    { path: 'Project_Issue_Create', component: Project_Issue_Create },
                    { path: 'project_issue_edit', component: Project_Issue_Edit },
                    { path: 'project_issue_inner', component: Project_Issue_Inner },
                    { path: 'task_analysis', component: Task_Analysis },
                    { path: 'issue_analysis', component: Issue_Analysis },
                    { path: '', component: Project_Dashboard },
                    { path: 'project_dashboard_pipeline', component: Project_Dashboard_Pipeline },
                    { path: 'project_grid', component: Project_Grid },
                    { path: 'project_task_inner', component: Project_Task_Inner },
                    { path: 'project_task_create', component: Project_Task_Create },
                ]
            },
        ]

    },


];

module.exports = routes