import Repairs_Layout   from "./../../components/Pages/Repairs_Layout/Repairs_Layout.vue"
import Repairs_Main   from "./../../components/Pages/Repairs_Main/Repairs_Main.vue"
import Repairs_Table   from "./../../components/Pages/Repairs_table/Repairs_table.vue"
import Repairs_Edit   from "./../../components/Pages/Repairs_Edit/Repairs_Edit.vue"
import Repairs_Import   from "./../../components/Pages/Repairs_Import/Repairs_Import.vue"
import Repairs_Create   from "./../../components/Pages/Repairs_Create/Repairs_Create.vue"
import Test  from "./../../components/Pages/Test/Test.vue"



const routes = [
    {
        path: '/repairs', component: Test,
        children: [
            {
                path: '', component: Repairs_Layout,
                children: [
                    {path: '', component: Repairs_Main},
                    {path: 'repairs_table', component: Repairs_Table},
                    {path: 'repairs_edit', component: Repairs_Edit},
                    {path: 'repairs_import', component: Repairs_Import},
                    {path: 'repairs_create', component: Repairs_Create},
                ]
            }
        ]
    }

];
module.exports = routes