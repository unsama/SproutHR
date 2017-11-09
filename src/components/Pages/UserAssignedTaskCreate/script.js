import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        var self = this;

        $(function () {
            $("#save").click(function () {
                self.submit();
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
            self.btnlinks.discardbtnlink = "/setting/userassignedtask/"+self.$route.params.id;
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
                discardbtnlink: "",
                savebtnlink: "",
                assignedtasksbtnlink: "/setting/userassignedtask",
                planordersbtnlink: "",
                changepasswordbtnlink: "",
                exportbtnlink: "",
                duplicatebtnlink: "",
            },
            username: '',
            usersname: '',
            user_id: '',
            tag_id: '',
            name: '',
            description: '',
            status: '',
            contact_id: '',
            task_title: '',
            options: '',
            product_detail: '',
            project_name: '',
            task_as: '',
            task_as_name: '',
            customer_name: '',
            privacy: '',
            customer_data: '',
            user_data: '',
            date_deadline: '',
            tag_details: '',
            v: true,
            v1: false
        };
    },

    computed: {
        fullname: function () {
            return this.first + " " + this.last;
        }
    },
    methods: {

        project_modal: function () {
            var self = this;
            self.$http.post("/setting/project_id", {"id": self.product_detail}).then(function(res){
                var parentdata = res.body.result[0];
                self.project_name = parentdata.name;
                self.task_as = parentdata.tasks_as;
                self.task_as_name = parentdata.task_as_name;

                console.log(res);
                },function(err){
                console.log(err);
            });

          //console.log(this.product_detail);
        },
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/project", {"name": self.name}).then(function(res){self.options = res.body.result;},function(err){
                alert(err);
            });
            self.$http.post("/setting/user_id", {"username": self.username}).then(function(res){self.user_id = res.body.result;},function(err){
                alert(err);
            });
            self.$http.post("/setting/tags_id", {"usersname": self.name}).then(function(res){self.tag_id = res.body.result;},function(err){
                alert(err);
            });
            self.$http.post("/setting/contact_id", {"contactname": self.name}).then(function(res){self.contact_id = res.body.result;},function(err){
                alert(err);
            });
        },
        submit: function showTestDate() {
            var self = this;
            //console.log(self.dates_value);
            var ckeditor_value = CKEDITOR.instances.editor1.getData();
            self.$http.post("/setting/user_tasks", {
                "task_tittle": self.task_title,
                "product_detail": self.product_detail,
                "assigned_to_id": self.user_data,
                "tag_details": self.tag_details,
                "date_deadline": self.dates_value,
                "description": ckeditor_value,
                "customer_id": self.customer_data
            }).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
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
