$(document).ready(function () {
    $("td.open").click(function () {
        window.open("http://192.168.25.104:8040/#/formview", '_self');

    });
});

$(document).ready(function () {

    $(".thead.tr.th.o_list_record_selector").click(function () {
        $('.o_checkbox').attr('checked', this.checked);
    });

});

import Tableview from "./../../partials//Tableview/Tableview.vue"

export default{
    created: function(){
        document.title = this.title;
    },
    data(){
        return{
            title: 'Template'
        }
    },
    components: {
        Tableview
    }
}