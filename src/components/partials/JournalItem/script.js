import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){

    },

    data(){
        return {
            nextactivity: "Journal Entries/ * 28/ Journal Items",
            btnlinks: {
                editbtnlink:"#/journalcreate",
                discardbtnlink:"#/imported"
            },


        }
    },

    components: {

        DashboardController

    }

}
