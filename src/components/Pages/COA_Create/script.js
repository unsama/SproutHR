import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){

    },

    data(){
        return {
            nextactivity: "Chart of Accounts/ New",
            btnlinks: {
                savebtnlink:"#/coacreate",
                discardbtnlink:"#/coa"
            },

        }
    },

    components: {

        DashboardController

    }

}
