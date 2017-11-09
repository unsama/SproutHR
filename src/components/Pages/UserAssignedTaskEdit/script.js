import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        var self = this;
        $(function () {
            $("#save").click(function () {
                 self.update();
                //alert("update");
            });

            $("#delete").click(function () {
                self.delete();
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
            self.btnlinks.editbtnlink = "/setting/usersinedit/"+self.$route.params.id;
            self.btnlinks.assignedtasksbtnlink = "/setting/userassignedtask/"+self.$route.params.id;
            self.btnlinks.discardbtnlink = "/setting/assignedview/"+self.$route.params.id;
            self.select();
            CKEDITOR.replace( 'editor1' );
            $('#datepicker').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            function showTestDate() {
                var value = $('#datepicker').datepicker('getFormattedDate');
                self.dates_value = value;
                //console.log(value);
            };
            $("#task_hide").click(function () {
                $(".task_show").toggle();
                $(".task_show1").toggle();
            });
        });
        document.title = this.title;
    },

    data(){
        return {
            head: "Users / Administrators",
            title: 'Administrators - Sprout',
            dates_value: '',
            modalhead: 'Change Password',
            btnlinks: {
                discardbtnlink: "/setting/assignedview",
                savebtnlink: "",
                assignedtasksbtnlink: "/setting/userassignedtask",
                planordersbtnlink: "",
                changepasswordbtnlink: "",
                exportbtnlink: "",
                duplicatebtnlink: "",
            },
            username: '',
            task_tittle: '',
            project_name: '',
            assigned_username: '',
            date_deadline: '',
            tags_name: '',
            task_description: '',
            customer_name: '',
            option: '',
            user_id: '',
            tag_id: '',
            contact_id: '',
            name: '',
            user_name: '',
            usersname: '',
            contactname: '',
            project_id: '',
            assigned_to_id: '',
            customer_id: '',
            tags_id: '',

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
                self.task_tittle = parentdata.task_tittle;
                self.project_name = parentdata.project_name;
                self.assigned_username = parentdata.username;
                self.date_deadline = parentdata.deadline;
                self.tags_name = parentdata.tags_name;
                self.tags_id = parentdata.tag_id;
                self.task_description = parentdata.description;
                self.customer_name = parentdata.customer_name;
                self.customer_id = parentdata.customer_id;
                self.project_id = parentdata.project_id;
                self.assigned_to_id = parentdata.assigned_to_id;
                console.log(parentdata);
                //console.log(this.$route.query.id);
            }, function (err) {
                // alert(err);
            });
            self.$http.post("/setting/project", {"name": self.name}).then(function(res){self.options = res.body.result;},function(err){
                alert(err);
            });
            self.$http.post("/setting/user_id", {"user_name": self.username}).then(function(res){self.user_id = res.body.result;},function(err){
                alert(err);
            });
            self.$http.post("/setting/tags_id", {"usersname": self.name}).then(function(res){self.tag_id = res.body.result;},function(err){
                alert(err);
            });
            self.$http.post("/setting/contact_id", {"contactname": self.name}).then(function(res){self.contact_id = res.body.result;},function(err){
                alert(err);
            });
        },

        update: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/update_user_assigned_task", {
                "id": self.$route.params.id ,
                "task_tittle": self.task_tittle,
                "project_name": self.project_id,
                "assigned_username": self.assigned_to_id,
                "date_deadline": self.dates_value,
                "tags_name": self.tags_name,
                "task_description": self.task_description,
                "customer_name": self.customer_id,
                "tags_id": self.tags_id,
            }).then(function(res){
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
        TableMain
    }
};
