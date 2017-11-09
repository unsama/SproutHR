import Test from "./../../components/Pages/Test/Test.vue"
import DiscuessLayout from "./../../components/Pages/DiscuessLayout/DiscuessLayout.vue"
import StarDicuses from "./../../components/Pages/StarDicuses/StarDicuses.vue"
import Inbox from "./../../components/Pages/Inbox/Inbox.vue"
import channal from "./../../components/Pages/channal/channal.vue"
import ChannalEdit from "./../../components/Pages/ChannalEdit/ChannalEdit.vue"
import DiscuessChannal from "./../../components/Pages/DiscuessChannal/DiscuessChannal.vue"
import Channals from "./../../components/Pages/Channals/Channals.vue"
import EditChannal from "./../../components/partials/EditChannal/EditChannal.vue"
import infochannal from "./../../components/partials/infochannal/infochannal.vue"
import ChannalCreate from "./../../components/Pages/ChannalCreate/ChannalCreate.vue"
import DirectMessage from "./../../components/Pages/DirectMessage/DirectMessage.vue"
import chat from "./../../components/partials/chat/chat.vue"
import ChannelGridcreate from "./../../components/Pages/ChannelGridcreate/ChannelGridcreate.vue"
import ChannelGrid from "./../../components/Pages/ChannelGrid/ChannelGrid.vue"
import Channelgridsetting from "./../../components/Pages/Channelgridsetting/Channelgridsetting.vue"
import ChannelGridEdit from "./../../components/Pages/ChannelGridEdit/ChannelGridEdit.vue"



const routes = [
    { path: '/discuess', component: Test,
        children: [
            { path: '', component: DiscuessLayout,
                children: [
                    { path: 'StarDicuses', component: StarDicuses },
                    { path: 'Inbox', component: Inbox },
                    { path: 'channal', component: channal },
                    { path: 'DirectMessage', component: DirectMessage },
                    { path: 'Channals', component: Channals },
                    { path: 'DiscuessChannal', component: DiscuessChannal },
                    { path: 'ChannalEdit', component: ChannalEdit },
                    { path: 'infochannal', component: infochannal },
                    { path: 'EditChannal', component: EditChannal },
                    { path: 'ChannalCreate', component: ChannalCreate },
                    { path: 'chat', component: chat },
                    { path: 'ChannelGridcreate', component: ChannelGridcreate },
                    { path: 'ChannelGrid', component: ChannelGrid },
                    { path: 'ChannelGridEdit', component: ChannelGridEdit },
                    { path: 'Channelgridsetting', component: Channelgridsetting },

                ]
            },
        ]
    },
];

module.exports = routes