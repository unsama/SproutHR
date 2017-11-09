export default{
    created: function () {
        $(function () {
            var cur_sel_div = 0;
            $("a.cus-link").on("click", function (e) {
                e.preventDefault();
                //print heading
                var title = $(this).text();
                $('#head').html(title);
                var hash = $(this).attr("href");
                var allDivs = $(".cus-toggle:not(" + hash + ")");
                var grabDiv = $(hash);
                var divHas = grabDiv.css("display");
                if (typeof divHas !== "undefined" && divHas == 'none') {
                    cur_sel_div = grabDiv.index();
                    grabDiv.show();
                }
                allDivs.hide();
            });

            $("a.next").on("click", function (e) {
                e.preventDefault();
                var mainConTog = $("#mainDivs");
                var findDiv = mainConTog.find(".cus-toggle:eq(" + (cur_sel_div + 1) + ")");
                var idGet = findDiv.attr("id");
                var last_index = mainConTog.find(".cus-toggle").last().index();
                if (typeof idGet !== "undefined") {
                    var allDivs = $(".cus-toggle:not(#" + idGet + ")");
                    findDiv.show();
                    allDivs.hide();
                    cur_sel_div = cur_sel_div + 1;
                    if (last_index == cur_sel_div) {
                        console.log("this is last");

                    }
                }
            });

            $("button").click(function () {
                $("#div1").fadeIn();
                $("#div2").fadeIn("slow");
                $("#div3").fadeIn(4000);

            });
            $("button").click(function () {
                $("#div1").fadeOut();
                $("#div2").fadeOut("slow");
                $("#div3").fadeOut(3000);
            });

        });
    }
}