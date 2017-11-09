export default{
    created: function(){
    $(document).ready(function () {
        $('#embeddingDatePicker')
            .datepicker({
                format: 'mm/dd/yyyy'
            })
            .on('changeDate', function (e) {
                // Set the value for the date input
                console.log(e.date);
                $("#calendar").fullCalendar('gotoDate', e.date).fullCalendar('select', e.date);
            });

        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            dayClick: function (date, jsEvent, view) {

                $('#myModal').modal('show');

            }
        });

        $("#Closebutton").click(function () {
            if ($(".calendarbox").hasClass("col-md-9")) {
                $(".calendarbox").removeClass("col-md-9")
                $(".calendarbox").addClass("col-md-12")
                $(".datepicker-inline").toggle();
                $(this).css('position', 'fixed');
                $(this).css('right', '4px');
                $(this).css('top', '45px');
                $(this).html("<");
            }
            else {
                $(".calendarbox").removeClass("col-md-12")
                $(".calendarbox").addClass("col-md-9")
                $(".datepicker-inline").toggle();
                $(this).html("x");
            }
            $("#calendar").trigger("resize");
        })
    });

    },

}

