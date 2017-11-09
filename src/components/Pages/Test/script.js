function calcWidth() {
    var navwidth = 0;
    var morewidth = $('#main .more').outerWidth(true);
    $('#main > li:not(.more)').each(function() {
        navwidth += $(this).outerWidth( true );
    });

    //var availablespace = $('nav').outerWidth(true) - morewidth;
    var availablespace = $('#nav-main').width() - morewidth - 400;



    if (navwidth > availablespace) {
        var lastItem = $('#main > li:not(.more)').last();
        lastItem.attr('data-width', lastItem.outerWidth(true));
        lastItem.prependTo($('#main .more ul'));
        calcWidth();
    } else {

        var firstMoreElement = $('#main li.more li').first();
        if (navwidth + firstMoreElement.data('width') < availablespace) {
            firstMoreElement.insertBefore($('#main .more'));
        }
    }

    // if ($('.more li').length > 0) {
    //     $('.more').css('display','block');
    // } else {
    //     $('.more').css('display','none');
    // }
}

$(function() {

    calcWidth();
    $(window).on('resize load',function(){
        calcWidth();
    });
});