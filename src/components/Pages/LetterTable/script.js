import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();
        var del = []; // initialize empty array
        $(function () {
            $("#action").hide();
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
            });
            $(".delete").click(function () {
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());

                });
                console.log(del);
                self.delete(del);
            });

            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });
        });


    },
    data () {
        return {
            nextactivity: "Resumes and Letters",
            dashboard: "Dashboard",
            num: '',
            counter: 0,
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "/recruitment/LetterTable",
                firstbtnlink: "/recruitment/Letters",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
            tableheader: [
                " Attachment Name",
                " File Name",
                " Type",
                " Owner",
                " Date Created",
                " ",

            ],
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Williams_CV.doc",
                        "Williams_CV.doc",
                        "hr.applicant",
                        "",
                        "9",
                        "URL",
                        "Alupak Industriess",
                        "Administrators",
                        "02/12/2017 08:12:40",
                    ],
                    "url": "/recruitment/ResumeandLetters"
                },

            },

        }
    },
    methods: {
        delete: function (del) {
            var self = this;
            console.log("a"+del);
            self.$http.post("/recruitment/delete_letter", {"delete_items": del}).then(function(res){


            },function(err){

            });
            this.select();
            this.select1();
        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/numletter", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body);
                console.log(self.num);
            }, function (err) {
            });
        },
        select3: function () {
            var self = this;
            self.counter+=10;

            // if(self.counter<=1)
            // {
            //     self.counter=1;
            // }
            // else if(self.counter==num)
            // {
            //     self.counter=1;
            // }
            // else if(self.counter <= num && self.counter <= 1)
            // {
            //     self.counter+=1;
            // }
            self.$http.post("/recruitment/lettertablenext", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.application_tittle,
                                val.document_url,
                                val.type,
                                val.date_created,
                                val.owner,
                            ],
                            "url": "/recruitment/ResumeandLetters/"+val.id,
                        });
                        console.log(data);
                    });
                }

            },function(err){
                alert(err);
            });

        },
        select4: function () {
            var self = this;
            self.counter-=10;
            self.$http.post("/recruitment/lettertableback", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.application_tittle,
                                val.document_url,
                                val.type,
                                val.date_created,
                                val.owner,
                            ],
                            "url": "/recruitment/ResumeandLetters/"+val.id,
                        });
                        console.log(data);
                    });
                }

            },function(err){
                alert(err);
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/lettertable", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.application_tittle,
                                val.document_url,
                                val.type,
                                val.date_created,
                                val.owner,
                            ],
                            "url": "/recruitment/ResumeandLetters/"+val.id,
                        });
                        console.log(data);
                    });
                }

            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                // this.submiting();
                alert('From Submitted!');
            }).catch(() => {

            });
        }
    },

    components: {
        DashboardController,
        TableMain,



    }

}