
import CalendarT from "./../../partials/CalendarT/CalendarT.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{

    created: function () {
        document.title = this.title;
        var self = this;
        this.select1();
        this.select12();
        var the_data = [];


        $(function () {
            $(".close").click(function () {

            });
            $(document).ready(function(){

                $("#a").click(function(){
                    $("#a").hide();

                });
                $("#a").click(function(){
                    $("#d").hide();

                });
                $("#q").click(function(){
                    $("#a").hide();

                });
                $("#q").click(function(){
                    $("#q").hide();

                });
                $("#q").click(function(){
                    $("#d").show();
                });
                $("#ab").click(function(){
                    $("#ab").hide();

                });
                $("#ab").click(function(){
                    $("#b").show();
                });
                $("#b").click(function(){
                    $("#b").hide();

                });
                $("#b").click(function(){
                    $("#ab").show();
                });
            });
            $('#r').hide();
            $("#saves").click(function () {
                self.submit();
            });
            $("#Closebutton").off("click");
            $("#Closebutton").on("click",function () {
                console.log("success");
                if ($(".full").hasClass("col-md-10")) {
                    $(".full").removeClass("col-md-10")
                    $(".full").addClass("col-md-12")
                    $(".datepicker-inline").toggle();
                    $(this).text("<");
                }
                else {
                    $(".full").removeClass("col-md-12")
                    $(".full").addClass("col-md-10")
                    $(".datepicker-inline").toggle();
                    $(this).text("x");
                }
                $("#calendar").trigger("resize");
            })
            $("#Closebutton1").click(function () {

                $(".calendarbox").removeClass("col-md-10");
                $(".calendarbox").addClass("col-md-12");
                $(".cld").toggle();
                $(this).css('position', 'fixed');
                $(this).css('right', '4px');
                $(this).css('top', '45px');
                $(this).html("<");
                $("#calendar").trigger("resize");
            })
            $('#embeddingDatePicker')
                .datepicker({
                    format: 'mm/dd/yyyy'
                })
                .on('changeDate', function (e) {
                    // Set the value for the date input
                    console.log(e.date);
                    $("#calendar").fullCalendar('gotoDate', e.date).fullCalendar('select', e.date);
                });
            $(document).ready(function () {
                var date;
                var date1;
                var d;
                var a;
                var b;
                var c;
                var m;
                var y;
                var d1;
                var m1;
                var y1;


                // var date = new Date(self.date_from);
                // var d = date.getDate();
                // var m = date.getMonth();
                // var y = date.getFullYear();
                //
                // var date1 = new Date(self.date_to);
                // var d1 = date1.getDate();
                // var m1 = date1.getMonth();
                // var y1 = date1.getFullYear();

                /*  className colors
                 className: default(transparent), important(red), chill(pink), success(green), info(blue)
                 */
                /* initialize the external events
                 -----------------------------------------------------------------*/
                $('#external-events div.external-event').each(function () {
                    // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
                    // it doesn't need to have a start or end
                    var eventObject = {
                        title: $.trim($(this).text()) // use the element's text as the event title
                    };

                    // store the Event Object in the DOM element so we can get to it later
                    $(this).data('eventObject', eventObject);

                    // make the event draggable using jQuery UI
                    $(this).draggable({
                        zIndex: 999,
                        revert: true,      // will cause the event to go back to its
                        revertDuration: 0  //  original position after the drag
                    });
                });
                /* initialize the calendar
                 -----------------------------------------------------------------*/

                var calendar = $('#calendar').fullCalendar({
                    header: {
                        left: 'title',
                        center: 'agendaDay,agendaWeek,month',
                        right: 'prev,next today'
                    },
                    editable: true,
                    firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
                    selectable: true,
                    defaultView: 'month',
                    axisFormat: 'h:mm',
                    columnFormat: {
                        month: 'ddd',    // Mon
                        week: 'ddd d', // Mon 7
                        day: 'dddd M/d',  // Monday 9/7
                        agendaDay: 'dddd d'
                    },
                    titleFormat: {
                        month: 'MMMM yyyy', // September 2009
                        week: "MMMM yyyy", // September 2009
                        day: 'MMMM yyyy'                  // Tuesday, Sep 8, 2009
                    },
                    allDaySlot: false,
                    selectHelper: true,
                    select: function (start, end, allDay) {
                    },
                    droppable: true, // this allows things to be dropped onto the calendar !!!
                    drop: function (date, allDay) { // this function is called when something is dropped
                        // retrieve the dropped element's stored Event Object
                        var originalEventObject = $(this).data('eventObject');
                        // we need to copy it, so that multiple events don't have a reference to the same object
                        var copiedEventObject = $.extend({}, originalEventObject);
                        // assign it the date that was reported
                        copiedEventObject.start = date;
                        copiedEventObject.allDay = allDay;
                        // render the event on the calendar
                        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
                        // is the "remove after drop" checkbox checked?
                        if ($('#drop-remove').is(':checked')) {
                            // if so, remove the element from the "Draggable Events" list
                            $(this).remove();
                        }
                    },
                events: [

                        {
                            title: "dfds",
                            start: new Date(y,m,d),
                            end: new Date(self.year1,self.month1,self.day1),
                            url: 'http://google.com/',
                            className: 'success'
                        },
                    ],
                });
            });
        });
    },
    data () {
        return {
            nextactivity: "Leaves Request (April 2017)",
            modal: "Create: All Leaves",
            options: '',
            entries: the_data,
            av: [],
            av1: [],
            av2: [],
            options2: '',
            employee_id: '',
            description: '',
            leave_type_id: '',
            mode: '',
            test: '',
            date_to: '',
            month: '',
            month1: '',
            year: '',
            year1: '',
            day: '',
            names: [],
            tabledata: [],
            fate_from: [],
            fate_to: [],
            day1: '',
            date_from: '',
            id: '116',
            reported_last_payslips: '',
            test1: 0,
            test2: '',
            duration: '',
            status: '',
            reason: '',
            department_id: '',
            department_name: '',
            comment_manager: '',
            events: [

            ],
            btnlinks: {
                createbtnlink:"/inventory/inventory_adjustments_create",
                importbtnlink:"/inventory/inventory_adjustments_import",
                secondbtnlink:"/leaves/leaves_request",
                fifthbtnlink:"/leaves/leaves_request_calendar",
            },
            tableheader: [
                "Employees",
                "Allocation Mode",
                "Employees Tag",
                "Leave type",
                "Description",
                "Allocated Days",
                "Start Date",
                "End Date",
                "Status",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",
                    ],
                    "url": "/inventory/inventory_adjustments_table"
                },
                "row1": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",
                    ],
                    "url": "/inventory/inventory_adjustments_table"
                },
                "row2": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",
                    ],
                    "url": "/inventory/inventory_adjustments_table"
                },
            }
        }
    },
    methods: {
        select12: function () {
            var date;
            var date1;
            var d;
            var a;
            var b;
            var c;
            var m;
            var y;
            var d1;
            var m1;
            var y1;
            var self = this;
            // var e = array();
            self.$http.post("/recruitment/selectallfromleave_request", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.tabledata = [];
                self.fate_from = [];
                self.fate_to = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        date = new Date(val.date_from);
                        d = date.getDate();
                        self.day=d;
                        a = Number(d);
                        m = date.getMonth();
                        b = Number(m);
                        self.month=m
                        y = date.getFullYear();
                        c= Number(y);
                        self.year=y;
                        date1 = new Date(val.date_to);
                        d1 = date1.getDate();
                        self.day1=d;
                        m1 = date1.getMonth();
                        self.month1=m;
                        y1 = date1.getFullYear();
                        self.year1=y;
                        // console.log(val.id);
                        self.fate_from[self.day,self.month,self.year],
                            self.fate_to[self.day1,self.month1,self.year1],
                            self.tabledata.push({
                                'start' : self.fate_from,
                                'end'   : self.fate_to,
                                'title' : val.description
                            });
                        console.log(self.fate_from);
                        console.log(self.fate_to);

                    });
                }
            },function(err){
                alert(err);
            });
        },
        submit4: function (id) {
            var self = this;
            self.reported_last_payslips=id;
            alert(self.reported_last_payslips);
        },
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/leaveallocationinsert2", {
                "reported_last_payslips": self.reported_last_payslips,
                "test": self.test,
                "comment_manager": self.comment_manager,
                "description": self.description,
                "leave_type_id": self.leave_type_id,
                "mode": self.mode,
                "duration": self.duration,
                "department_id": self.department_id,
                "employee_id": self.employee_id}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        submit3: function (id) {
            var self = this;
            self.test=id;
            alert(self.test);
        },
        selectcontacts: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/selectdepname", {
                "id": self.employee_id,
            }).then(function(res){
                var parentdata = res.body.data[0];
                self.department_id = parentdata.department_id;
                console.log(self.department_id);
                self.$http.post("/recruitment/selectdepleave", {
                    "id": self.department_id,
                }).then(function(res){
                    var parentdata = res.body.data[0];
                    self.department_name = parentdata.name;
                    console.log(self.department_name);

                },function(err){
                    alert(err);
                });
            },function(err){
                alert(err);
            });
        },

        select1: function () {
            var self = this;
            self.$http.post("/recruitment/selectallfromleave_requestjoin", {
                "id": self.id,
            }).then(function(res){
                self.names = res.body.data;
                console.log(self.names);
            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {

                alert('From Submitted!');
            }).catch(() => {
            });
        }
    },
    components: {
        CalendarT,
        Modal,
        DashboardController,

    }
}