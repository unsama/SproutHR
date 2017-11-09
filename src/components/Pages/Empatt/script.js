import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
export default{
    created: function () {
        var self = this;
        self.select();
        self.select18();
        $('#abcdef').hide();
        $('#abcd').hide();
        var timer;
        var breaktimer;
        timer = new _timer
        (
            function(time)
            {
                if(time == 0)
                {
                    timer.stop();
                    alert('time outs');
                }

            }
        );
        timer.reset(0);
        timer.mode(0);
        function _timer(callback)
        {
            var time = 0;     //  The default time of the timer
            var mode = 1;     //    Mode: count up or count down
            var status = 0;    //    Status: timer is running or stoped
            var timer_id;    //    This is used by setInterval function
            // this will start the timer ex. start the timer with 1 second interval timer.start(1000)
            var d=self.CheckIn;
            this.start = function(interval,d)
            {
                interval = (typeof(interval) !== 'undefined') ? interval : 1000;
                if(status == 0)
                {
                    status = 1;
                    timer_id = setInterval(function()
                    {
                        switch(mode)
                        {
                            default:
                                if(time)
                                {
                                    time--;
                                    generateTime(d);
                                    if(typeof(callback) === 'function') callback(time);
                                }
                                break;

                            case 1:
                                if(time < 86400)
                                {
                                    time++;
                                    generateTime(d);
                                    if(typeof(callback) === 'function') callback(time);
                                }
                                break;
                        }
                    }, interval);
                }
            }
            //  Same as the name, this will stop or pause the timer ex. timer.stop()
            this.stop =  function()
            {
                if(status == 1)
                {
                    status = 0;
                    clearInterval(timer_id);
                }

            }

            // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
            this.reset =  function(sec)
            {
                sec = (typeof(sec) !== 'undefined') ? sec : 0;
                time = sec;
                generateTime(time);
            }
            // Change the mode of the timer, count-up (1) or countdown (0)
            this.mode = function(tmode)
            {
                mode = tmode;
            }

            // This methode return the current value of the timer
            this.getTime = function()
            {

                return time;
            }


            // This methode return the current mode of the timer count-up (1) or countdown (0)
            this.getMode = function()
            {
                return mode;
            }

            // This methode return the status of the timer running (1) or stoped (1)
            this.getStatus
            {
                return status;
            }

            // This methode will render the time variable to hour:minute:second format
            function generateTime(checkintime)
            {

                // var j_date = new Date(checkintime);
                 console.log(checkintime);
                // var hour=j_date.getHours();
                // var minute=j_date.getMinutes();
                // var second=j_date.getSeconds();
                var second = time % 60;
                var minute = Math.floor(time / 60) % 60;
                var hour = Math.floor(time / 3600) % 60;

                second = (second < 10) ? '0'+second : second;
                minute = (minute < 10) ? '0'+minute : minute;
                hour = (hour < 10) ? '0'+hour : hour;

                $('div.timer span.second').html(second);
                $('div.timer span.minute').html(minute);
                $('div.timer span.hour').html(hour);
            }

        }

        function getDateTime() {

            var date = new Date();

            var hour = date.getHours();
            hour = (hour < 10 ? "0" : "") + hour;

            var min  = date.getMinutes();
            min = (min < 10 ? "0" : "") + min;

            var sec  = date.getSeconds();
            sec = (sec < 10 ? "0" : "") + sec;

            var year = date.getFullYear();

            var month = date.getMonth() + 1;
            month = (month < 10 ? "0" : "") + month;

            var day  = date.getDate();
            day = (day < 10 ? "0" : "") + day;

            return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

        }

        $(function(){
            $(document).ready(function(){
                setInterval(function() {
                    self.selectidss(self.employee_id);
                }, 10000);
            });

            $("#checkinbutton").click(function(){
                $("#checkinresponse").show();
                $("#checkin").hide();
            });
            $("#breakinbutton").click(function(){
                var date = new Date();

                var hour = date.getHours();
                hour = (hour < 10 ? "0" : "") + hour;

                var min  = date.getMinutes();
                min = (min < 10 ? "0" : "") + min;

                var sec  = date.getSeconds();
                sec = (sec < 10 ? "0" : "") + sec;
                var current_time = hour + ":" + min + ":" + sec;
                console.log(current_time);
            });

            $("#checkoutbutton").click(function(){
                $('#checkout').hide();
                $('#checkoutresponse').show();
            });
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
            $(document).ready(function () {
                var d = new Date();
                var hour    = d.getHours();
                var minute  = d.getMinutes();
                var second  = d.getSeconds();
                var time = hour+":"+minute+":"+second;
                self.d1=time;
                $("#demo").html(time);
            });
        });
    },
    data(){
        return {
            r: true,
            t:false,
            k:false,
            y:false,
            p:true,
            f:false,
            l:false,
            u:false,
            counter: 0,
            names: [],
            tables: [],
            tablesf: [],
            status: '',
            abc: '',
            d1: '',
            attandance_setting: 1,
            emp_id: '',
            pin: '',
            idsk: '',
            CheckIn: '',
            ChecksIn: '',
            CheckOut: '',
            employee_pin: '',
            ChecksOut: '',
            employeename: '',
            employee_id: '13',
            date: '',
            pass: '',
            total: '',
            totalnew: '',
            BreakIn: '',
            statuss: '',
            d: '',
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: true,
            nextactivity: "EmployeesHans AndersResearch & Development",
            btnlinks: {
                createbtnlink:"#/app/newuser",
                importbtnlink:"#/app/imported"
            },
            tableheader: [

                " Date",
                " Check IN",
                " Check Out",
                " Break In",
                " Break Out",
            ],
            tablefooter:[
                "",
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Asad",
                        "Alupak",
                        "khan",
                        "Leaves",
                    ],
                    "url": "/recruitment/ReqDep"
                },

            },

        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/deletesatt", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        update: function (id) {
            var self = this;
            self.$http.post("/recruitment/Editstatus", {"statuss": id,"status": self.idsk}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/insertattandanceCheckIn", {"employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        update7: function (id) {
            var self = this;
            self.$http.post("/recruitment/Editstatus", {"statuss": id,"status": self.idsk}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/insertattandanceCheckout", {"employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        updatebreak: function (id) {
            var self = this;
            self.$http.post("/recruitment/insertattandancebreakin", {"employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        update2: function (id) {
            var self = this;
            self.$http.post("/recruitment/Editstatus", {"statuss": id,"status": self.idsk}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/insertattandanceCheckout", {"employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/selecttotattime", {"id": self.employee_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.totalnew = parentdata.total;
                    self.$http.post("/recruitment/updatetotalbreak2", {"employee_id": self.employee_id,"total": self.totalnew}).then(function(res){
                        console.log(res.body);
                    },function(err){
                    });
                },
                function (err) {
                });
        },
        update6: function (id) {
            var self = this;
            self.$http.post("/recruitment/Editstatus", {"statuss": id,"status": self.idsk}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/insertattandanceCheckout", {"employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/selecttotattime", {"id": self.employee_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.totalnew = parentdata.total;
            self.$http.post("/recruitment/updatetotalbreak2", {"employee_id": self.employee_id,"total": self.totalnew}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            },
            function (err) {
            });
            self.$http.post("/recruitment/fetchattendance", {"employee_id": self.employee_id}).then(function (res) {
                self.tables = res.body.data;
            },function(err){
            });
            self.$http.post("/recruitment/fetchattendancetotal", {"employee_id": self.employee_id}).then(function (res) {
                self.tablesf = res.body.data;
            },function(err){
            });
        },
        breakin: function () {
            var self = this;
            self.$http.post("/recruitment/updatebrekin", {"employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/fetchattendance", {"employee_id": self.employee_id}).then(function (res) {
                self.tables = res.body.data;
            },function(err){
            });
            self.$http.post("/recruitment/fetchattendancetotal", {"employee_id": self.employee_id}).then(function (res) {
                self.tablesf = res.body.data;
            },function(err){
            });
        },
        breakout: function () {
            var self = this;

            self.$http.post("/recruitment/updatebrekout", {"employee_id": self.employee_id,"BreakIn": self.BreakIn,"total": self.total}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/selectattandacetotalbreak", {"id": self.employee_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.total = parentdata.total;

            self.$http.post("/recruitment/updatetotalbreak", {"employee_id": self.employee_id,"total": self.total}).then(function(res){
                console.log(res.body);
            self.$http.post("/recruitment/fetchattendancetotal", {"employee_id": self.employee_id}).then(function (res) {
                self.tablesf = res.body.data;
            self.$http.post("/recruitment/fetchattendance", {"employee_id": self.employee_id}).then(function (res) {
                self.tables = res.body.data;
            },function(err){
            });
                },
                function (err) {
                });

            },function(err){
            });

            },function(err){
            });




        },

        update4: function (id) {
            var self = this;
            if(calc1.display1.value == self.pass)
            {
                self.$http.post("/recruitment/Editstatus", {"statuss": id,"status": self.idsk}).then(function(res){
                    console.log(res.body);
                },function(err){
                });
                self.$http.post("/recruitment/insertattandanceCheckout", {"employee_id": self.employee_id}).then(function(res){
                    console.log(res.body);
                },function(err){
                });
                self.$http.post("/recruitment/selecttotattime", {"id": self.employee_id}).then(function (res) {
                        var parentdata = res.body.data[0];
                        self.totalnew = parentdata.total;
                        self.$http.post("/recruitment/updatetotalbreak2", {"employee_id": self.employee_id,"total": self.totalnew}).then(function(res){
                            console.log(res.body);
                        },function(err){
                        });
                    },
                    function (err) {
                    });
            }
            else{
                alert('wrong pin please try again')
            }
        },
        update3: function (id) {
            var self = this;



            if(calc.display.value == self.pass)
            {
                self.$http.post("/recruitment/Editstatus", {"pin": self.pin,"statuss": id,"status": self.idsk}).then(function(res){
                    console.log(res.body);
                },function(err){
                });
                self.$http.post("/recruitment/insertattandanceCheckIn", {"employee_id": self.employee_id}).then(function(res){
                    console.log(res.body);
                },function(err){
                });
            }
            else{
                alert('wrong pin please try again')
            }

        },
        update5: function (id) {
            var self = this;
            self.$http.post("/recruitment/Editstatus", {"pin": self.pin,"statuss": id,"status": self.idsk}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/insertattandanceCheckIn", {"employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/fetchattendance", {"employee_id": self.employee_id}).then(function (res) {
                self.tables = res.body.data;
            },function(err){
            });
            self.$http.post("/recruitment/fetchattendancetotal", {"employee_id": self.employee_id}).then(function (res) {
                self.tablesf = res.body.data;
            },function(err){
            });
            self.$http.post("/recruitment/selectatt", {"id": self.employee_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.CheckIn = parentdata.CheckIn;


            },function(err){
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/select_employee_att", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
            },function(err){
            });
        },
        selectid: function (id,ids) {
            var self = this;

            self.$http.post("/recruitment/idselect", {"id": id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.statuss = parentdata.statuss.data[0];
                    self.idsk = parentdata.id;
                    self.employeename = parentdata.employeename;
                    self.employee_id = parentdata.id;
                if(ids==0)
                {
                    $('#checkin').show();
                    $('#abcd').hide();
                }
                else if(ids==1)
                {
                    $('#checkout').show();
                    $('#abcd').hide();
                }
            self.$http.post("/recruitment/selectatt", {"id": id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.emp_id = parentdata.emp_id;
                self.CheckIn = parentdata.CheckIn;
                self.CheckOut = parentdata.CheckOut;
                self.status = parentdata.status.data;

                self.$http.post("/recruitment/manager", {"manager_id":self.emp_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.d = data.employeename;
                    },
                    function (err) {
                    });
            }, function (err) {
            });
            }, function (err) {
            });
        },
        selectids: function (id,ids) {
            var self = this;
            self.$http.post("/recruitment/idselect", {"id": id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.statuss = parentdata.statuss.data[0];
                    self.idsk = parentdata.id;
                    self.employeename = parentdata.employeename;
                    self.employee_id = parentdata.id;
                    self.pass = parentdata.pin;
                if(ids==0)
                {
                    $('#pincheck').show();
                    $('#abcdef').hide();
                }
                else if(ids==1)
                {
                    $('#pincheckout').show();
                    $('#abcdef').hide();
                }
            self.$http.post("/recruitment/selectatt", {"id": id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.emp_id = parentdata.emp_id;
                self.CheckIn = parentdata.CheckIn;
                self.CheckOut = parentdata.CheckOut;
                self.status = parentdata.status.data;
                self.$http.post("/recruitment/manager", {"manager_id":self.emp_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.d = data.employeename;
                    },
                    function (err) {
                    });
            }, function (err) {
            });
            }, function (err) {
            });
        },
        selectidss: function (id,ids) {
            var self = this;
            self.$http.post("/recruitment/idselect", {"id": id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.statuss = parentdata.statuss.data[0];
                    self.idsk = parentdata.id;
                    self.employeename = parentdata.employeename;
                    self.employee_id = parentdata.id;
                    self.pass = parentdata.pin;
                if(ids==0)
                {
                    $('#breaklayout').show();
                    $('#ah').show();
                    $('#abck').hide();
                }
                else if(ids==1)
                {
                    $('#ah').show();
                    $('#breaklayout').show();
                    $('#abck').hide();
                }
                self.$http.post("/recruitment/fetchattendance", {"employee_id": id}).then(function (res) {
                    self.tables = res.body.data;
                },function(err){
                });
                self.$http.post("/recruitment/fetchattendancetotal", {"employee_id": id}).then(function (res) {
                    self.tablesf = res.body.data;
                },function(err){
                });

            // self.$http.post("/recruitment/selectatt", {"id": id}).then(function (res) {
            //     var parentdata = res.body.data[0];
            //     self.emp_id = parentdata.emp_id;
            //     self.CheckIn = parentdata.CheckIn;
            //     self.CheckOut = parentdata.CheckOut;
            //     self.status = parentdata.status.data;
            //
            //     self.$http.post("/recruitment/manager", {"manager_id":self.emp_id}).then(function (res) {
            //             var data = res.body.data[0];
            //             self.d = data.employeename;
            //         },
            //         function (err) {
            //         });
            //
            // }, function (err) {
            // });
            }, function (err) {
            });

        },

        ssubmit: function () {

            var self = this;
            self.$http.post("/recruitment/usa-att", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.emp_id = parentdata.emp_id;
                self.CheckIn = parentdata.CheckIn;
                self.$route.params.id = parentdata.id;
                self.CheckOut = parentdata.CheckOut;
                //console.log(this.$route.query.id);

                //console.log(self.job_tittle);
                self.$http.post("/recruitment/manager", {"manager_id":self.emp_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.d = data.employeename;

                        //console.log(self.job_tittle);

                        // console.log(res.body);
                    },
                    function (err) {
                    });

            }, function (err) {
            });





        },
        psubmit: function () {
            var self = this;
            self.$http.post("/recruitment/usaa-att", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.emp_id = parentdata.emp_id;
                self.CheckIn = parentdata.CheckIn;
                self.$route.params.id = parentdata.id;
                self.CheckOut = parentdata.CheckOut;
                //console.log(this.$route.query.id);

                //console.log(self.job_tittle);
                self.$http.post("/recruitment/manager", {"manager_id":self.emp_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.d = data.employeename;

                        //console.log(self.job_tittle);

                        // console.log(res.body);
                    },
                    function (err) {
                    });

            }, function (err) {
            });
        },
        select1: function () {

            var self = this;

            self.$http.post("/recruitment/numatt", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                console.log(self.num)
                //console.log(this.$route.query.id);
            }, function (err) {
            });
        },
        select18: function () {

            var self = this;

            self.$http.post("/recruitment/selectattsetting", {"id": self.attandance_setting}).then(function (res) {

                var parentdata = res.body.data[0];
                self.employee_pin = parentdata.employee_pin;

                console.log(self.employee_pin);
                if(self.employee_pin==0)
                {
                    $('#abcd').show();
                    $('#abcdef').hide();
                    $('#abck').hide();
                }
                else if(self.employee_pin==1)
                {
                    $('#abcdef').show();
                    $('#abcd').hide();
                    $('#abck').hide();
                }
                else if(self.employee_pin==2)
                {
                    $('#abck').show();
                    $('#abcdef').hide();
                    $('#abcd').hide();
                }


                //console.log(this.$route.query.id);
            }, function (err) {
            });
        },

        select3: function () {

            var self = this;
            self.num4+1;
        },

        dsubmit: function () {
            var self = this;

            self.$http.post("/recruitment/depinserts", {"f": self.f,"parent_dept_id": self.parent_dept_id,"manager_id": self.manager_id}).then(function(res){
                console.log(res.body);

            },function(err){

            });
        },
        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                //this.submit();
                //this.tags();
                //this.insert();
                //this.select();
                //this.insert();

                // this.submiting();


            }).catch(() => {
                // eslint-disable-next-line

            });
        }
    },
    components: {
        Emptyform,
        Tabs,
        TableMain,
        ModelDescription,
        Componame,
        Tableview,
        dashconterller: DashboardController

    }

}
