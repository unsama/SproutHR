$.getScript('http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',function(){
    $.getScript('http://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.0/morris.min.js',function(){

        // Morris.Area({
        //     element: 'area-example',
        //     data: [
        //         { y: '1.1.', a: 100, b: 90 },
        //         { y: '2.1.', a: 75,  b: 65 },
        //         { y: '3.1.', a: 50,  b: 40 },
        //         { y: '4.1.', a: 75,  b: 65 },
        //         { y: '5.1.', a: 50,  b: 40 },
        //         { y: '6.1.', a: 75,  b: 65 },
        //         { y: '7.1.', a: 100, b: 90 }
        //     ],
        //     xkey: 'y',
        //     ykeys: ['a', 'b'],
        //     labels: ['Series A', 'Series B']
        // });

        // Morris.Line({
        //     element: 'line-example',
        //     data: [
        //         {year: '2013', value: 20},
        //         {year: '2014', value: 15},
        //         {year: '2015', value: 10},
        //         {year: '2016', value: 5},
        //         {year: '2017', value: 2}
        //     ],
        //     xkey: 'year',
        //     ykeys: ['value'],
        //     labels: ['Value']
        // });

        // Morris.Donut({
        //     element: 'donut-example',
        //     data: [
        //         {label: "Android", value: 12},
        //         {label: "iPhone", value: 30},
        //         {label: "Other", value: 20}
        //     ]
        // });

        Morris.Bar({
            element: 'bar-example',
            data: [
                {y: 'Jan 2017', a: 100},
                {y: 'Feb 2017', a: 75},
                {y: 'Mar 2017', a: 50},
                {y: 'Apr 2017', a: 75},
                {y: 'May 2017', a: 50},
                {y: 'Jun 2017', a: 75}
            ],

        });

    });
});


