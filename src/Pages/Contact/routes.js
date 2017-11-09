import Test   from "./../../components/Pages/Test/Test.vue"
import Contact_layout from "./../../components/Pages/Contact_layout/Contact_layout.vue"
import Contacts from "./../../components/Pages/Contacts/Contacts.vue"
import contactduplicate from "./../../components/Pages/contactduplicate/contactduplicate.vue"
import contacttable from "./../../components/Pages/contacttable/contacttable.vue"
import Contactinfocreate from "./../../components/Pages/Contactinfocreate/Contactinfocreate.vue"
import contactinfo from "./../../components/Pages/contactinfo/contactinfo.vue"
import contactimport from "./../../components/Pages/contactimport/contactimport.vue"
import contactinfoedit from "./../../components/Pages/contactinfoedit/contactinfoedit.vue"
import selectcontact  from "./../../components/partials/selectcontact/selectcontact.vue"
import ProductEdit  from "./../../components/partials/ProductEdit/ProductEdit.vue"
import contactmodaledit  from "./../../components/partials/contactmodaledit/contactmodaledit.vue"
const routes = [
    { path: '/', component: Test,
        children: [
            { path: 'contact', component: Contact_layout,
                children: [
                    { path: '', component: Contacts},
                    { path: 'contacttable', component: contacttable},
                    { path: 'contactmodaledit/:id', component: contactmodaledit},
                    { path: 'contactinfo/:id', component: contactinfo},
                    { path: 'contactduplicate/:id', component: contactduplicate},
                    { path: 'Contactinfocreate', component: Contactinfocreate},
                    { path: 'contactinfoedit/:id', component: contactinfoedit},
                    { path: 'selectcontact', component: selectcontact},
                    { path: 'ProductEdit', component: ProductEdit},
                    { path: 'contactimport', component: contactimport},
                ]
            },
        ]
    },
];

module.exports = routes