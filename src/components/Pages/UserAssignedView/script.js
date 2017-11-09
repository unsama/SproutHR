import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Message from "./../../partials/Message/Message.vue"


export default{
    created: function () {
        var self = this;
        $(function () {
            $("#delete").click(function () {
                self.delete_inside();
            });
            $("#changepassword").click(function () {
                self.pwd_update();
                window.location.href = "/setting/users";
            });
            $("#send_resert_pwd_instruction").click(function () {
                self.send_resert_pwd_instructions();
            });
            $("#topm21").click(function () {
                $(".pwd").hide();
                $(".show_pwd").show();
            });
            $("#duplicate").click(function () {
                self.user_duplicate();
            });
            $('.SeeMore2').click(function(){
                var text = $(this).html();
                if(text == "active"){
                    $(this).html("inactive");
                    $(".check").addClass("fa fa-fw fa-check");
                }else{
                    $(this).html('active');
                }
            });
            self.btnlinks.editbtnlink = "/setting/assignedtaskedit/"+self.$route.params.id;
            self.btnlinks.assignedtasksbtnlink = "/setting/userassignedtask/"+self.$route.params.id;
            self.btnlinks.discardbtnlink = "/setting/userassignedtask/"+self.$route.params.id;
            //self.btnlinks.deletebtnlink = "/setting/userassignedtask/"+self.$route.params.id;

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
                discardbtnlink: "/setting/userassignedtask",
                savebtnlink: "",
                assignedtasksbtnlink: "/setting/userassignedtask",
                planordersbtnlink: "",
                changepasswordbtnlink: "",
                exportbtnlink: "",
                duplicatebtnlink: "",
                deletebtnlink: "",
            },
            username: '',
            task_tittle: '',
            project_name: '',
            assigned_username: '',
            date_deadline: '',
            tags_name: '',
            task_description: '',
            customer_name: '',
            v: true,
            v1: false
        };
    },


    methods: {
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/assigned_task_view", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.result[0];
                var j_date = new Date(parentdata.deadline);
                self.task_tittle = parentdata.task_tittle;
                self.project_name = parentdata.project_name;
                self.assigned_username = parentdata.username;
                self.date_deadline =  j_date.getDate()+"-"+j_date.getMonth()+"-"+j_date.getFullYear();
                self.tags_name = parentdata.tags_name;
                self.task_description = parentdata.description;
                self.customer_name = parentdata.customer_name;
                console.log(parentdata);
                //console.log(this.$route.query.id);
            }, function (err) {
                // alert(err);
            });

        },
        submit: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/user_status", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        delete_inside: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/delete_tasks_assigned_inside", {"id": self.$route.params.id }).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },

    },
    components: {
        DashboardController,
        Tabs,
        Modal,
        TableMain,
        Message

    }
}
