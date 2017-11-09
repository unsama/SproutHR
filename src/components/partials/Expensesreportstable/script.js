import Modal from "./../Modal/Modal.vue"


export default{
    created: function(){
        $(function(){

        });
    },
    data () {
        return {
            activityimport: "My Reports / Import a File",
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomercreate",
                discardbtnlink: "#/app/sales/salescustomeredit",
                importbtnlink: "#/app/expenses/expensesreports",
                cancelbtnlink: "#/app/expenses/expensesreports",
            },
        }
    },
    components: {
        Modal,

    }
}