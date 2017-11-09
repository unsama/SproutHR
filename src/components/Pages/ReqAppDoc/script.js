import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        var self = this;
        document.title = this.title;
        this.select();
        this.select1();
        self.btnlinks.createbtnlink ="/recruitment/AppReqCreate/"+self.$route.params.id;
        self.btnlinks.secondbtnlink ="/recruitment/lettertablejob/"+self.$route.params.id;
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
            namess: [],
            counter: 0,
            num: '',


            application_tittle: '',
            btnlinks: {
                createbtnlink:"",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: ""
            },

        }
    },
    methods: {
        select3: function () {
            var self = this;
            self.counter+=10;
            self.$http.post("/recruitment/abcsnext", {"counter": self.counter,"id": self.$route.params.id}).then(function (res) {
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
        select4: function () {
            var self = this;
            self.counter-=10;
            self.$http.post("/recruitment/abcsback", {"counter": self.counter,"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
        },

        select: function () {
            var self = this;


            self.$http.post("/recruitment/abcs", {"id": self.$route.params.id}).then(function (res) {
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