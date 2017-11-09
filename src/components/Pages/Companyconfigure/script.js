import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Companycreatecompo from "./../../partials/Companycreatecompo/Companycreatecompo.vue"


export default{
    created: function () {
        var self = this;
        document.title = this.title;
        this.select();

    },
    data(){
        return {
            head: "API Configuration / new company",
            title: 'Companies - Sprout',
            btnlinks: {
                createbtnlink: "/setting/companycreate",
                editbtnlink: "/setting/companyimport",
            },

        }
    },


    components: {
        DashboardController,
        Companycreatecompo

    }
}
