import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Equipments",
            btnlinks: {
                createbtnlink: "/maintenance/maintenancerequestcreate",
                editbtnlink: "/maintenance/expensessubmitedit",
                firstbtnlink:  "/maintenance/maintenanceequipments",
                secondbtnlink: "/maintenance/maintenanceequipmentslist",

            },
            tableheader: [
                "Equipments Name",
                "Owner",
                "Serial Number",
                "Technician",
                "Equipment Category",


            ],
            tablefoot: [
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
                        "Samsung",
                        "Administrators",
                        "MT/14656/684",
                        "Administrators",
                        "Monitor",
                    ],
                    "url": "/maintenance/maintenanceequipmentsinnerpage"
                },
                "row1": {
                    "data": [
                        "Acer laptop",
                        "Demo user",
                        "MT/14986/44",
                        "Administrators",
                        "Computers",
                    ],
                    "url": "/#/app/maintenance/"
                },
                "row2": {
                    "data": [
                        "HP laptop",
                        "Demo user",
                        "MT/199/2124",
                        "Administrators",
                        "Computers",
                    ],
                    "url": "/#/app/maintenance/"
                },

            }

        }
    },


    components: {
        DashboardController,
        Tablemain

    },

}