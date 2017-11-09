import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        var self = this;
        $(function () {
            $(".close").click(function () {

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
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();

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
                        var title = prompt('Event Title:');
                        if (title) {
                            calendar.fullCalendar('renderEvent',
                                {
                                    title: title,
                                    start: start,
                                    end: end,
                                    allDay: allDay
                                },
                                true // make the event "stick"
                            );
                        }
                        calendar.fullCalendar('unselect');
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
                            title: 'All Day Event',
                            start: new Date(y, m, 1)
                        },
                        {
                            id: 999,
                            title: 'Repeating Event',
                            start: new Date(y, m, d - 3, 16, 0),
                            allDay: false,
                            className: 'info'
                        },
                        {
                            id: 999,
                            title: 'Repeating Event',
                            start: new Date(y, m, d + 4, 16, 0),
                            allDay: false,
                            className: 'info'
                        },
                        {
                            title: 'Meeting',
                            start: new Date(y, m, d, 10, 30),
                            allDay: false,
                            className: 'important'
                        },
                        {
                            title: 'Lunch',
                            start: new Date(y, m, d, 12, 0),
                            end: new Date(y, m, d, 14, 0),
                            allDay: false,
                            className: 'important'
                        },
                        {
                            title: 'Birthday Party',
                            start: new Date(y, m, d + 1, 19, 0),
                            end: new Date(y, m, d + 1, 22, 30),
                            allDay: false,
                        },
                        {
                            title: 'Click for Google',
                            start: new Date(y, m, 28),
                            end: new Date(y, m, 29),
                            url: 'http://google.com/',
                            className: 'success'
                        }
                    ],
                });


            });
        });
    },
    data(){
        return {
            quotation: "Calendar",
            modal: "Open: Salesperson",
            modal1: "Open: Sales Team",
            btnlinks: {
                createbtnlink: "#/app/accounting/saleableproductcreate",
                editbtnlink: "#/app/accounting/sellableproductedit",
            },
            tableheader: [
                "Product",
                "Description",
                "Ordered Qty",
                "Delivered",
                "Invoiced",
                "Unit Price",
                "Taxes",
                "Subtotal"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "[LAP-CUS] Laptop Customized",
                        "Laptop Customized",
                        "2.000",
                        "0.000",
                        "0.000",
                        "3,645.00",
                        "",
                        "7,290.00"
                    ],
                    "url": ""

                },
                "row1": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },
                "row2": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },

            }
        }
    },


    components: {
        DashboardController,
    }
}
