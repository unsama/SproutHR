import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Modalcreate from "./../../partials/Modalcreate/Modalcreate.vue"
import rexBox from "./../../partials/rexBox/rexBox.vue"

export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();

        // function drawszlider(ossz, meik){
        //     for(var i =0 ; i<=document.querySelectorAll('.szliderbar').length;i++) {
        //         var szazalek = Math.round((meik * 100) / ossz);
        //         document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
        //         document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
        //     }
        // }
        $(function () {

        })

        $(document).ready(function(){

            // for(var i =0 ; i<=document.querySelectorAll('.szliderbar').length;i++) {
            //     var szazalek = Math.round((self.names[i].hiredemployees	 * 100) / self.names[i].expected);
            //     console.log("hired"+self.names[i].hiredemployees);
            //     console.log("excepted"+self.names[i].expected);
            //     console.log("szazalek"+szazalek);
            //     console.log(i);
            //     document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
            //     document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
            // }
            for(var i =0 ; i<=self.names.length;i++) {
                var szazalek = Math.round((self.names[i].hiredemployees	 * 100) / self.names[i].expected);
                console.log("hired"+self.names[i].hiredemployees);
                console.log("excepted"+self.names[i].expected);
                console.log("szazalek"+szazalek);
                console.log(i);

                if(self.names[i].expected==0)
                {
                    szazalek=0;
                    document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
                    document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
                }
                else
                {
                    document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
                    document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
                }

            }

            $("button").click(function(){
                $().appendTo("p");
            });


        });
        document.title = this.title;
        function endEdit(e) {
            var input = $(e.target),
                label = input && input.prev();
            label.text(input.val() === '' ? defaultText : input.val());
            input.hide();
            label.show();
        }
        $(function () {
            $("#create").click(function () {
                self.submit();
                self.select();
                self.remove();
            });
            $("#discard").click(function () {
                self.select();
                self.remove();
            });

            self.id ="/recruitment/ReqSettingEdit/"+self.$route.params.id
            $('.clickedit').hide()
                .focusout(endEdit)
                .keyup(function (e) {
                    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                        endEdit(e);
                        return false;
                    } else {
                        return true;
                    }
                })
                .prev().click(function () {
                $(this).hide();
                $(this).next().show().focus();
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
            nextactivity: "Job Position",
            title : "",
            modalheading: "Create a Job Position",
            dashboard: "Dashboard",
            names: [],
            id: '',
            num: '',
            counter: 1,
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "#/app/Employees/TableDep"
            },
        }
    },
    methods: {
        remove: function () {
            var self = this;

            self.title=""


        },

        submit: function () {
            var self = this;

            self.$http.post("/recruitment/try", {"title": self.title}).then(function(res){

            },function(err){
            });
            self.select();
            $(".bd-example-modal-lg").modal('hide');


        },
        select4: function () {
            var self = this;
            self.counter-=1;
            self.$http.post("/recruitment/jobback", {"counter": self.counter}).then(function (res) {
                self.names = res.body.data;


                console.log(self.names);
            },function(err){
                alert(err);
            });


        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/abcsnum", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                console.log(self.num)
            }, function (err) {
            });
        },
        update: function (status,id) {
            var self = this;
            self.$http.post("/recruitment/Editstatusreq", {"status": status,"id": id}).then(function(res){
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
        update2: function (status,id,index) {
            var self = this;
            self.$http.post("/recruitment/Editstatusreq2", {"status": status,"id": id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            // this.todos.splice(index, 1)
            this.$delete(this.names, index)
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
        select3: function () {
            var self = this;
            self.counter+=1;
            self.$http.post("/recruitment/jobnext", {"counter": self.counter}).then(function (res) {
                self.names = res.body.data;


                console.log(self.names);
            },function(err){
                alert(err);
            });
            // if(self.counter<=1)
            // {
            //     self.counter=1;
            // }
            // else if(self.counter==num)
            // {
            //     self.counter=1;
            // }
            // else if(self.counter <= num && self.counter <= 1)
            // {s
            //     self.counter+=1;
            // }
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/jobs", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
                // }console.log(self.names)

            },function(err){
            });
        },

    },
    components: {
        DashboardController,
        Modal,
        Modalcreate,
        rexBox,



    }

}