import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        
    },
    data(){
        return {
            btncancellink: {
                nextactivity: "Attendances/Hans Anders from 2017-03-14 12:53:47 to 2017-03-23 12:53:50/Hans Anders/Research & Development",
                cancelbtnlink:"#/app/attendance/Manage",

            },

        }
    },

    components: {
        DashboardController,
    }
}