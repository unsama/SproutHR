import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'expenses',
            sidebarData:{
                My_Expenses:[
                    {
                        url: "/expenses/expensessubmit",
                        title: "Expenses to Submit"
                    },
                    {
                        url: "/expenses/expensesrefused",
                        title: "Refused Expenses"
                    },
                    {
                        url: "/expenses/expensesreports",
                        title: "Expense Reports"
                    },
                ],
                To_Approve: [
                    {
                        url: "/expenses/expensesapprove",
                        title: "Expenses Reports to Approve"
                    },
                ],
                Accountant:[
                    {
                        url: "/expenses/expensespost",
                        title: "Expense Reports To Post"
                    },
                    {
                        url:"/expenses/expensespay",
                        title:"Expense Reports To Pay"
                    },
                ],
                Reports:[
                    {
                        url: "/expenses/expensesall",
                        title: "All Expenses"
                    },
                    {
                        url: "/expenses/expensesallreports",
                        title: "All Expense Reports"
                    },

                ],
                Configuration:[
                {
                    url: "/expenses/expensessetting",
                    title: "Settings"
                },
                {
                    url: "/expenses/expensesproducts",
                    title: "Expense Products"
                },

            ],
            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController,
        Modal

    }

}