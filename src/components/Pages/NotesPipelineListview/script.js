import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#aview').css("display");
                if(check == "none"){
                    $('#aview').show();
                    $('#aedit').hide();
                }else{
                    $('#aview').hide();
                    $('#aedit').show();
                }

            });
        });

    },
    data () {
        return {
            nextactivity: "Notes",
            title: "Notes - sprout",
            btnlinks: {
                createbtnlink:"/notes/newuser",
                importbtnlink: "/notes/notesimport",
                firstbtnlink:"/notes/",
                secondbtnlink:"/notes/pipelinelistview",
            },
            tableheader: [
                "Internal Refrence",
                "Name",
                "Sales Price",
                "Cost",
                "Internal Catories",
                "Product Type",
                "Quantity On Hand",
                "Forecasted Quality",

            ],
            tablefooter:[
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
                        "E-COM08",
                        "Apple In-Ear Headphones",
                        "79.00	",
                        "70.00",
                        "All / Saleable / Physical",
                        "Stockable Product",
                        "18.000	",
                        "18.000	",
                    ],
                    "url": "/notes/notespipelinecreate"

                },
                "row1": {
                    "data": [
                        "E-COM08",
                        "Apple In-Ear Headphones",
                        "79.00	",
                        "70.00",
                        "All / Saleable / Physical",
                        "Stockable Product",
                        "18.000	",
                        "18.000	",
                    ],
                    "url": "/notes/notespipelinecreate"

                },
                "row2": {
                    "data": [
                        "E-COM08",
                        "Apple In-Ear Headphones",
                        "79.00	",
                        "70.00",
                        "All / Saleable / Physical",
                        "Stockable Product",
                        "18.000	",
                        "18.000	",
                    ],
                    "url": "/notes/notespipelinecreate"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tablemain
    }
}