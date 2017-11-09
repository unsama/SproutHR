import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){

    },

    data(){
        return {
            nextactivity:"Chart of Accounts/ 090000 abc",
            btnlinks: {
                editbtnlink:"#/coaedit",
                createbtnlink:"#/coacreate"
            },

        }
    },

    components: {

        DashboardController

    }

}
