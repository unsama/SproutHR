import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        $(function () {
            $('#jqChart').jqChart({
                title: {text: 'Column Chart Colors'},
                animation: {duration: 1},
                shadows: {
                    enabled: true
                },
                series: [
                    {
                        type: 'column',
                        title: 'Series 1',
                        fillStyles: ['#418CF0', '#FCB441', '#E0400A', '#056492', '#BFBFBF', '#1A3B69', '#FFE382'],
                        data: [['A', 33], ['B', 57], ['C', 33],
                            ['D', 12], ['E', 35], ['F', 7], ['G', 24]]
                    }
                ]
            });
        });


    },
    data () {
        return {
            title: "Accounting Dashboard",
            dashboard: "Accounting Dashboard",


        }
    },


    components: {
        DashboardController,
    }
}