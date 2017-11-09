import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Companiesincompo from "./../../partials/Companiesincompo/Companiesincompo.vue"
import Companycreatecompo from "./../../partials/Companycreatecompo/Companycreatecompo.vue"
import Companyeditcompo from "./../../partials/Companyeditcompo/Companyeditcompo.vue"


export default{
    created: function () {
        var self = this;
        $(function () {

            self.btnlinks.editbtnlink = "/setting/companycreate/"+self.$route.params.id;
            self.btnlinks.discardbtnlink = "/setting/companiesin/"+self.$route.params.id;
            self.select();
            self.submit();

        });
        document.title = this.title;
    },

    data(){
        return {
            head: "Users / Administrators",
            title: 'Administrators - Sprout',
            modalhead: 'Change Password',
            btnlinks: {
                savebtnlink: "",
                discardbtnlink: ""
            },

            v: true,
            v1: false
        };
    },


    components: {
        DashboardController,
        Tabs,
        Modal,
        TableMain,
        Companiesincompo,
        Companycreatecompo,
        Companyeditcompo

    }
}
