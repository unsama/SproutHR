import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        this.select();
        this.select1();
        $(function () {
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
            title : "Resumes and Letters - Sprout",
            dashboard: "Dashboard",
            names: [],
            num: '',
            counter: 0,
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "/recruitment/LetterTable"
            },
        }
    },
    methods: {
        select3: function () {
            var self = this;
            self.counter+=10;
            self.$http.post("/recruitment/letternext", {"counter": self.counter}).then(function (res) {
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
            // {
            //     self.counter+=1;
            // }


        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/numletter", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                console.log(self.num)
                //console.log(this.$route.query.id);
            }, function (err) {
            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/numletter", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {
            });
        },
        select4: function () {
            var self = this;
            self.counter-=10;
            self.$http.post("/recruitment/letterback", {"counter": self.counter}).then(function (res) {
                self.names = res.body.data;


                console.log(self.names);
            },function(err){
                alert(err);
            });



        },

        select: function () {
            var self = this;
            self.$http.post("/recruitment/letter", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;


                console.log(self.names);
            },function(err){
                alert(err);
            });
            //console.log(this.$route.query.id);
            // console.log(self.job_specific);
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }


    },

    components: {
        DashboardController



    }

}