import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

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
        nextactivity: "Inventory",
        btnlinks: {
            createbtnlink:"#/app/newuser",
            importbtnlink:"#/app/imported"
        },
        tableheader: [
            "Inventory Reference",
            "Inventory Date",
            "Status",



        ],
        tabledata: {
            "row": {
                "data": [
                    "Starting Inventory",
                    "01/28/2017 19:22:52",
                    "Validated",



                ],
                "url": "/#/app/inventory/inventory_adjustments_table"

            },
            "row1": {
                "data": [
                    "Starting Inventory",
                    "01/28/2017 19:22:52",
                    "Validated",



                ],
                "url": "/#/app/inventory/inventory_adjustments_table"

            },
            "row2": {
                "data": [
                    "Starting Inventory",
                    "01/28/2017 19:22:52",
                    "Validated",



                ],
                "url": "/#/app/inventory/inventory_adjustments_table"

            },

        }
    }
},


components: {
    DashboardController,
        
}
}