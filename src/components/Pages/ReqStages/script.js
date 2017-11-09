import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

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
                self.delete();
                self.select();
                self.select1();
            });


        });
    },
    data () {
        return {
            el: '#example-3',
            checkedNames: [],
            head: "Stages",
            title : "Stages - Sprout",
            nextactivity: "Stages",
            stagename: '',
            folded: '',
            options: '',
            num: '',
            names: [],
            counter: 0,
            btnlinks: {
                createbtnlink:"/recruitment/Stagecreate",
                importbtnlink:"/recruitment/StageImport",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
            tableheader: [
                "ID",
                "Stage Name",
                "Folded in Recruitment Pipe",
                ""
            ],
            tabledata: [
                {

                }
            ]
        }
    },
    methods: {
        delete: function (del) {
            var self = this;
            console.log("a"+self.checkedNames);
            self.$http.post("/recruitment/delete_stage", {"delete_items": self.checkedNames}).then(function(res){
                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        select3: function () {
            var self = this;
            self.counter+=10;
            self.$http.post("/recruitment/tablestagesnext", {"counter": self.counter}).then(function (res) {
                self.names = res.body.data;
                // }console.log(self.names)
            },function(err){
            });
            // self.$http.post("/recruitment/tablestagesnext", {
            //     "counter": self.counter,"num": self.num,
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.name
            //                 ],
            //                 "url": "/recruitment/Stages/"+val.id,
            //                 "checkbox":true
            //             });
            //         });
            //     }
            //     //self.options =res.body.data;
            //     //console.log(res.body);
            // },function(err){
            //
            // });

        },
        select4: function () {
            var self = this;
            self.counter-=10;
            self.$http.post("/recruitment/tablestagesback", {"counter": self.counter}).then(function (res) {
                self.names = res.body.data;
                // }console.log(self.names)
            },function(err){
            });
            // self.$http.post("/recruitment/tablestagesback", {
            //     "counter": self.counter,
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.name
            //                 ],
            //                 "url": "/recruitment/Stages/"+val.id,
            //                 "checkbox":true
            //             });
            //         });
            //     }
            // },function(err){
            // });
        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/num", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/tablestages", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
                // }console.log(self.names)
            },function(err){
            });
            // self.$http.post("/recruitment/tablestages", {
            //     "name": self.options,
            // }).then(function(res){
            //     var data = res.body.data;
            //     self.tabledata = [];
            //     if(data.length > 0){
            //         data.forEach(function(val) {
            //             self.tabledata.push({
            //                 "data": [
            //                     val.id,
            //                     val.name
            //                 ],
            //                 "url": "/recruitment/Stages/"+val.id,
            //                 "checkbox":true
            //             });
            //         });
            //     }
            //
            //
            // },function(err){
            //
            // });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {



            }).catch(() => {
                // eslint-disable-next-line

            });
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}