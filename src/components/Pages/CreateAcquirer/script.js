import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        $(function () {
            $('.ty').hide();
            $("#radio41").on("change", function () {
                var selVal = $(this).val();
                // console.log($(this).val());
                if (selVal == "10") {
                    $('.ty').show();
                }
            });
        });
        $(function () {
            $("#radio411").on("change", function () {
                var selVal = $(this).val();
                // console.log($(this).val());
                if (selVal == "02") {
                    $('.ty').hide();

                }
            });
        });
        $(function () {
            $("#radio4110").on("change", function () {
                var selVal = $(this).val();
                // console.log($(this).val());
                if (selVal == "01") {
                    $('.ty').hide();

                }
            });
        });
        $(function () {
            $("#radio410").on("change", function () {
                var selVal = $(this).val();
                // console.log($(this).val());
                if (selVal == "03") {
                    $('.ty').hide();
                }
            });
        });
    },
    data () {
        return {
            head: "Payment Acquirers/ New",
            btnlinks: {
                savebtnlink: "/accounting/createacquirer",
                discardbtnlink: "/accounting/paymentacquirers"
            },


        }
    },


    components: {

        DashboardController,
    }
}