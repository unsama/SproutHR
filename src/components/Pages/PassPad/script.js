import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
export default{
    created: function () {
        var timer;

        timer = new _timer
            (
                function(time)
                {
                    if(time == 0)
                    {
                        timer.stop();
                        alert('time out');
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
            this.start = function(interval)
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
                                    generateTime();
                                    if(typeof(callback) === 'function') callback(time);
                                }
                                break;

                            case 1:
                                if(time < 86400)
                                {
                                    time++;
                                    generateTime();
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
            function generateTime()
            {
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
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            nextactivity: "EmployeesHans AndersResearch & Development",
            btnlinks: {
                createbtnlink:"#/app/newuser",
                importbtnlink:"#/app/imported"
            },
            tableheader: [
                "Reference",
                "Destination Location Zone",
                "Partner",
                "Schduled Date",
                "Source Document",
                "Back Order Of",
                "Status",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "#/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "#/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "#/request_quotation_inner"

                },

            }

        }
    },
    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Tableview,
        dashconterller: DashboardController

    }

}
