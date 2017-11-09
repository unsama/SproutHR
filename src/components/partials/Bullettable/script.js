export default{
    created: function () {

        $(function () {
            $( "button#jQueryColorChange" ).click(function() {
                $(this).toggleClass( "selected" );
            });
            document.title = this.title;
            $("#ckbCheckAll1").click(function () {
                $(".checkBoxClass").prop('checked', $(this).prop('checked'));
            });
        });
    },
    props: [
        "tableheader",
        "tabledata",
        "tablecheckbox",
        "tablefoot"
    ],
    data(){
        return {
            title: 'Tablemain'
        }
    },
}