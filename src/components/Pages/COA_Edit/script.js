import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){

    },

    data(){
        return {
            nextactivity: "Chart of Accounts/ 090000 abc",
            btnlinks: {
                savebtnlink:"#/coaedit",
                discardbtnlink:"#/coatable"
            },

        }
    },

    components: {

        DashboardController

    }

}
