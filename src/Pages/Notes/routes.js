import Test from "./../../components/Pages/Test/Test.vue"
import NotesLayout   from "./../../components/Pages/NotesLayout/NotesLayout.vue"
import NotesPipeline  from "./../../components/Pages/NotesPipeline/NotesPipeline.vue"
import NotesPipelineCreate  from "./../../components/Pages/NotesPipelineCreate/NotesPipelineCreate.vue"
import NotesPipelineListview  from "./../../components/Pages/NotesPipelineListview/NotesPipelineListview.vue"
import NotesImport   from "./../../components/Pages/NotesImport/NotesImport.vue"

const routes = [
    { path: '/notes', component: Test,
        children: [
            { path: '', component: NotesLayout,
                children: [
                    { path: '', component: NotesPipeline},
                    { path: 'notespipelinecreate', component: NotesPipelineCreate},
                    { path: 'pipelinelistview', component: NotesPipelineListview},
                    { path: 'notesimport', component: NotesImport},
                ]
            },
        ]

    },


];

module.exports = routes