import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        $(function () {
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });

            $("#save").click(function(){
                this.select();
            });

            $(document).ready(function(){

                // for(var i =0 ; i<=document.querySelectorAll('.szliderbar').length;i++) {
                //     var szazalek = Math.round((self.names[i].hiredemployees  * 100) / self.names[i].expected);
                //     console.log("hired"+self.names[i].hiredemployees);
                //     console.log("excepted"+self.names[i].expected);
                //     console.log("szazalek"+szazalek);
                //     console.log(i);
                //     document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
                //     document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
                // }
                for(var i =0 ; i<=self.names.length;i++) {
                    var szazalek = Math.round((self.names2[i].hiredemployees  * 100) / self.names2[i].expected);
                    console.log("hired"+self.names2[i].hiredemployees);
                    console.log("excepted"+self.names2[i].expected);
                    console.log("szazalek"+szazalek);
                    console.log(i);
                    document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
                    document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
                }

                $("button").click(function(){
                    $().appendTo("p");
                });


            });


        });


    },
    data () {
        return {

            names: [],
            names2: [],

            nextactivity: "Departments",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "/employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "/Employees/TableDep"
            },
            
        }
    },

    methods: {
        select: function () {
            var self = this;
            self.$http.post("/employees/fetchdeparments", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.result;
                console.log(self.names);
            }, function (err) {
                alert(err);
            });
            //fetchVacanciesDetail
            self.$http.post("/employees/fetchDeptTotalAndAbsentEmployees", {"id": self.$route.params.id}).then(function (res) {
                self.names2 = res.body.result;
                console.log(self.names2);
            }, function (err) {
                alert(err);
            });

        },
    },


    components: {
        DashboardController



    }

}