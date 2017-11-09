import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        $(function () {
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });
        });


    },
    data () {
        return {
            nextactivity: "Product",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "/purchase/CreateProduct",
                secondbtnlink: "/purchase/productstable",
                firstbtnlink: "/purchase/products"
            },
            tableheader: [
                "Internal Reference",
                "Name",
                "Sale Price",
                "Cost",
                "Internal Category",
                "Product Type",
                "Quantity On Hand",
                "Forecasted Quantity",



            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "ALU pak industries",
                        "alupak industries",
                        "1.000",
                        "2.0011",
                        "allk",
                        "industries",
                        "000",
                        "111",

                    ],
                    "url": ""
                },
            }
        }
    },

    components: {
        DashboardController,
        Tabledrag



    }

}