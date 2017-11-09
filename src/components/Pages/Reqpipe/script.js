import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ScheduleanActivity from "./../../partials/ScheduleanActivity/ScheduleanActivity.vue"
export default{
    created: function () {
        var self = this;
        document.title = this.title;
        this.select();
        this.select1();
        this.select2();
        self.btnlinks.createbtnlink ="/recruitment/ReqpipeCreate/"+self.$route.params.id;
        $(function () {
            $("#sortable1, #sortable2").sortable({
                connectWith: ".connectedSortable",
                update: function (event,ui) {
                    ui.item.each(function(index,item){
                        console.log(item.dataset.id);
                        self.pre=item.dataset.id;
                    });
                },
                receive: function(event,ui){
                    console.log(ui);
                    ui.item.each(function(index,item){
                        console.log("recive "+item.parentElement.dataset.id);
                        self.next=item.parentElement.dataset.id;
                        // update(item.parentElement.dataset.id,item.dataset.id);
                        // console.log(update1(item.parentElement.dataset.id,item.dataset.id))
                    });
                }
            }).disableSelection()
            $(".click").on("click", function () {
                $('#create').toggle();
            });
            $(".click1").on("click", function () {
                $('#create1').toggle();
            });
            $("#click2").on("click", function () {
                $('#create2').toggle();
            });
            $("#click3").on("click", function () {
                $('#create3').toggle();
            });
            $("#deletes").on("click", function () {
                $('#create1').hide();
            });
            $("#discard").on("click", function () {
                $('#addshow').hide();
            });
            $("#addnew").on("click", function () {
                $('#addshow').show();
                $('#addnew').hide();
            });
            $("#discard").on("click", function () {
                $('#addnew').show();
                $('#addshow').hide();
            });
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
            });
        });
    },
    data(){
        return {
            modalheading: "Schedule an Activity",
            modal: "Edit Column",
            pipeline: "Job Positions/Applications",
            names: [],
            stages: [],
            stagename: '',
            job_positions_id: '',
            job_tittle: '',
            ids: '',
            jobspecific: '',
            options: '',
            options2: '',
            folded: '',
            Usetemplate: '',
            job_specific: '',
            email_template_id: '',
            name: '',
            sid: '',
            id: '',
            g: '',
            idss: '51',
            num: '',
            title: '',
            next: '',
            pre: '',
            btnlinks: {
                createbtnlink: "",
                importbtnlink: "#/app/imported",
                firstbtnlink: "/recruitment/Reqpipe",
                secondbtnlink: "/recruitment/ReqpipeTable"
            },
        }
    },
    methods: {
        update1: function (pre,next) {
            var self = this;
            self.$http.post("/recruitment/Editstatusreqapp", {"pre": pre,"next": next}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            // this.todos.splice(index, 1)

            this.select();
            // for(var i =0 ; i<=self.names.length;i++) {
            //     var szazalek = Math.round((self.names[i].hiredemployees	 * 100) / self.names[i].expected);
            //     console.log("hired"+self.names[i].hiredemployees);
            //     console.log("excepted"+self.names[i].expected);
            //     console.log("szazalek"+szazalek);
            //     console.log(i);
            //     document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
            //     document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
            // }

        },
        updates: function () {
            var self = this;

            self.update1(self.pre,self.next);

            // for(var i =0 ; i<=self.names.length;i++) {
            //     var szazalek = Math.round((self.names[i].hiredemployees	 * 100) / self.names[i].expected);
            //     console.log("hired"+self.names[i].hiredemployees);
            //     console.log("excepted"+self.names[i].expected);
            //     console.log("szazalek"+szazalek);
            //     console.log(i);
            //     document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
            //     document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
            // }

        },
        submit1: function () {
            var self = this;
            self.$http.post("/recruitment/Editstages", {"id": self.id,"name": self.name,"job_specific": self.job_specific,"email_template_id": self.email_template_id,"folded": self.folded,"description": self.description}).then(function(res){
                console.log(res.body);
            },function(err){
                ;
            });
            this.select();
            this.select1();
        },
        submit: function (id) {
            var self = this;
            self.ids=id;
            self.$http.post("/recruitment/delete", {"id": self.ids}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        submit2: function (id) {
            var self = this;
            self.ids=id;
            self.$http.post("/recruitment/delete2", {"id": id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        insert1: function (id) {
            var self = this;
            self.$http.post("/recruitment/createapp", {
                "title": self.title,
                "id": self.$route.params.id,
                "stageid": id
            }).then(function(res){
                console.log(res.body);

            },function(err){

            });
            this.select();
            this.select1();
        },
        insert: function () {
            var self = this;
            self.$http.post("/recruitment/createstages", {
                "stagename": self.stagename,

            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        dsubmit: function () {
            var self = this;
            self.$http.post("/recruitment/deletesapp", {"id": self.appid,"ids": self.appids}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/selectstages", {"id": self.$route.params.id}).then(function (res) {
                self.stages = res.body.data;
            },function(err){
                ;
            });

        },
        select: function (id) {
            var self = this;
            self.$http.post("/recruitment/applicationsonjob", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
            },function(err){
            });
        },
        select2: function (id) {
            var self = this;
            self.$http.post("/recruitment/tablestagesselect", {"id": id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.id = parentdata.id;
                self.folded = parentdata.folded.data;
                self.description = parentdata.description
                console.log(res.body)
            },function(err){
            });
            //console.log(this.$route.query.id);
            // console.log(self.job_specific);

            //alert(self.companyName);
            self.$http.post("/recruitment/emailss", {
                "name": self.Usetemplate,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/jobspecific", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){
                ;
            });
            this.select();
            this.select1();
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                //this.submit();
                //this.tags();
                this.insert();
                this.select();
                this.select1();
                //this.select();
                //this.insert();
                // this.submiting();
            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        dashconterller: DashboardController,
        Modal,
        ScheduleanActivity

    }
}



