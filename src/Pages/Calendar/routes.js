import Test from "./../../components/Pages/Test/Test.vue"
import CalendarLayout   from "./../../components/Pages/CalendarLayout/CalendarLayout.vue"
import CalendarC  from "./../../components/Pages/CalendarC/CalendarC.vue"
import CalendarT  from "./../../components/partials/CalendarT/CalendarT.vue"



const routes = [

    { path: '/calendar', component: Test,
        children: [
            { path: '', component: CalendarLayout,
                children: [
                    { path: '', component: CalendarC},
                    { path: 'calendart', component: CalendarT},
                ]
            },

        ]

    },


];

module.exports = routes